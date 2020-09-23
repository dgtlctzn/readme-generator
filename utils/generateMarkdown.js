// function to generate markdown for README
function generateMarkdown(data) {
  let license = "";
  if (data.license === "MIT") {
    license = "![APM](https://img.shields.io/apm/l/readme)";
  } else if (data.license === "GNU") {
    license = "";
  } else {
    license = "";
  }
  return `${license}
  # ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Description
  ${data.description}
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
  Github profile: [${data.username}](github.com)
  If you have any questions about the project please contact ${data.email}
  ## License
  This project is covered under the ${data.license} license
`;
}

module.exports = generateMarkdown;
