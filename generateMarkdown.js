import inquirer from "inquirer";
import marked from 'marked';

// License badge
const licenseBadges = {
  'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
};

function renderLicenseBadge(license) {
  return licenseBadges[license] || '';
}

function renderLicenseSection(license) {

  if (license === 'None') return '';
  return `## License

This project is licensed under the ${license} License. For more information, see the [license documentation](https://opensource.org/licenses/MIT).`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${data.license !== 'None' ? '- [License](#license)' : ''}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  For any questions, please contact me:
  
  GitHub: [${data.github}](https://github.com/${data.github})
  Email: ${data.email}
  
  ${renderLicenseSection(data.license)}
  `;
}

// Generate HTML from markdown
function generateHTML(markdown) {
  const htmlContent = marked(markdown);
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        a {
            color: #3498db;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>
  `;
}

export { generateMarkdown, generateHTML };