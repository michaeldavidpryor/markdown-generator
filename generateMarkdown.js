
function generateMarkdown(data, URL) {
  console.log(data)
  return `

# ${data.title}

----

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Features](#features)
- [Tests](#tests)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [Badges](#badges)

----

## Description

${data.description}

----

## Installation
  
  ${data.installation}

----

## Features

  ${ data.features}

----

## Tests

  ${ data.tests}

----

## Contributing

  ${ data.contributing} 

----

## Support

[![Avatar](https://avatars.githubusercontent.com/${data.username}?s=200)](http://github.com/${data.username}) 

<br>

<a href = "mailto:${data.email}?subject = Feedback&body = Message" target="_blank">Send Feedback</a>

----
## License

![GitHub](http://img.shields.io/github/license/${data.username}/${data.repo}) 
----
## Badges

![GitHub followers](https://img.shields.io/github/followers/${data.username}?label=Follow&style=social)
`
}

module.exports = generateMarkdown 
