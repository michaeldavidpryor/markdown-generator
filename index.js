const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);


inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
function generateMD(answers) {
  return `
# Project Title

## Description

## Installation

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [Team](#team)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)


## Usage

```
    ```
## Installation


## Tests
- Going into more detail on code and technologies used

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

![GitHub followers](https://img.shields.io/github/followers/${username}?label=Follow&style=social);
 }`

    .then(function ({ username }) {
      const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

      axios.get(queryUrl).then(function (res) {
        const repoNames = res.data.map(function (repo) {
          return repo.name;
        });

        const repoNamesStr = repoNames.join("\n");

        fs.writeFile("repos.txt", repoNamesStr, function (err) {
          if (err) {
            throw err;
          }

          console.log(`Saved ${repoNames.length} repos`);
        });
      });
    });

  function writeToFile(fileName, data) {

  }

  function init() {

  }

  init();
}