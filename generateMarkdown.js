const fs = require("fs");
const api = require("./api");
const axios = require("axios");






function generateMarkdown(data) {
    console.log(data);
    return `

 #  ${data.title}

 Table of Contents|

  Version|
  Description|
  Installation|
  Usage|
  Contributors|
  Licensing|
  ### Version:
  ![version](https://img.shields.io/badge/version-${data.version}-blue)

  
  ### Description:
  ${data.description}

  ### Installation:
  ${data.installation}

  ### Usage:
  ${data.usage}

  ### Contributors:
  ${data.contributors}

  ### Licensing:

  [![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ### Creator:

  [![Profile Badge](https://img.shields.io/badge/User-Profile-red.svg)](https://github.com/${data.username})

  ### Contact:  
  ${data.email}
  
  ![Profile Image](${data.avatar})
  `;
}







module.exports = generateMarkdown;
