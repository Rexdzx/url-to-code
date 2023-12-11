import * as readlineSync from "readline-sync";
import * as url from "url";
import scrape from "website-scraper";

const websiteUrl = readlineSync.question("Masukan URL : ");
const parsedUrl = new url.URL(websiteUrl);
const resultDirectory = `./result/${parsedUrl.hostname}`;

scrape({
  urls: [websiteUrl],
  urlFilter: function (url) {
    return url.indexOf(websiteUrl) === 0;
  },
  recursive: true,
  maxDepth: 50,
  prettifyUrls: true,
  filenameGenerator: "bySiteStructure",
  directory: resultDirectory,
  subdirectories: false,
})
  .then(() => {
    console.log("Entire website succesfully downloaded");
  })
  .catch((err) => {
    console.log("An error ocurred", err);
  });
