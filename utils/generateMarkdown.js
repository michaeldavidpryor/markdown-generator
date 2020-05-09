function generateMarkdown(data, url) {
  console.log(data)
  return `
# ${data.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Description

## Installation

## Usage

```
    ```

## Tests
- Going into more detail on code and technologies used

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
(https://choosealicense.com/licenses)

![GitHub followers](https://img.shields.io/github/followers/${username}?label=Follow&style=social);
 }
`;
}

module.exports = generateMarkdown;
