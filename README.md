## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rexdzx/url-to-code.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Run the scrapper:

   ```bash
   node index.mjs
   ```

2. Set the Website URL

   ```bash
   Masukkan URL : your-url
   ```

3. Customize other options if needed (e.g., `maxDepth`, `directory`, etc.).

4. Check the `./result` directory for the downloaded website.

## Configuration

- `urls`: An array of URLs to scrape.
- `urlFilter`: A function to filter URLs. The example filters URLs that start with the specified `websiteUrl`.
- `recursive`: If `true`, the scraper will follow links recursively.
- `maxDepth`: Maximum recursion depth.
- `prettifyUrls`: If `true`, URLs will be prettified.
- `filenameGenerator`: File naming strategy, set to `'bySiteStructure'` in the example.
- `directory`: Output directory for the downloaded website.

## Acknowledgments

- [Bahrul-Rozak](https://github.com/Bahrul-Rozak) for making an amazing project
- [website-scraper](https://www.npmjs.com/package/website-scraper) for providing an easy-to-use web scraping library.

Happy Scrapping! 🕸️
