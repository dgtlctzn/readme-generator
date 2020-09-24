// function to generate markdown for README
function generateMarkdown(data) {
  let license = "";
  if (data.license === "MIT") {
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "GNU") {
    license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  return `${license}
  # ${data.title}

  ![${data.imageName}](${data.imageLink})

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Description
  \`\`\`${data.description}\`\`\`
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usageText}
  [${data.usageName}](${data.usageLink})
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Github profile: [${data.username}](github.com/${data.username})
  
  If you have any questions about the project please contact ${data.email}
  ## License
  This project is covered under the ${data.license} license
`;
}

module.exports = generateMarkdown;
