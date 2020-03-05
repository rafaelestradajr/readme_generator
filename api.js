const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./generateMarkdown");

/* Starting with an api object that uses a getUser method with a parameter of username
 The queryUrl is where the api is being requested,
  it's also using template literal to insert the username string from the prompt answers.
  getUser is being invoked in index.js.
  */





const api = {
    getUser(username) {
        const queryUrl = `https://api.github.com/users/${username}`;

        return axios
            .get(queryUrl)
            .then(function (response) {
                console.log(response.data);
                const jsonRes = JSON.parse(response);
                const githubUserInfo = {
                    username: response.data.login,
                    avatar: response.data.avatar_url,
                    email: response.data.email
                }
                fs.writeFile("README.md", generateMarkdown(githubUserInfo), function (err) {
                    if (err) { throw err; }
                    });
                    if (response.data.email === null) {
                        githubUserInfo.email = "placeholderemail@email.com"
                    }
                    console.log(githubUserInfo);
                    return githubUserInfo;
                });
            }
};
    module.exports = api;

