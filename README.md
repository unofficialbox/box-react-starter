# Box React Starter
The Box React Starter project is an example repo that includes an Express backend with the [Box UI Elements](https://github.com/box/box-ui-elements) React components


## Helpful tools to get IDs needed in the prerequisites section.
1. [Box CLI](https://developer.box.com/guides/tooling/cli/)
2. [Box Postman Collection](https://developer.box.com/guides/tooling/postman/)

## Pre-Requisites

1. Clone this github repo.
2. Run `yarn install` to install dependencies
3. Create and authorize a Client Credentials Grant Application in the [Box Developer Console](https://account.box.com/developers/services) using the following [Setup Guide.](https://developer.box.com/guides/authentication/client-credentials/client-credentials-setup/)
4. Copy the generated *_config.json Box application file to the [server directory](/server).
5. Update the following [server-constants.js](/server-constants.js) file variables
    * [BOX_CLIENT_ID](https://github.com/unofficialbox/box-react-starter/blob/main/server-constants.js#L7)
    * [BOX_CLIENT_SECRET](https://github.com/unofficialbox/box-react-starter/blob/main/server-constants.js#L8)
    * [BOX_ENTERPRISE_ID](https://github.com/unofficialbox/box-react-starter/blob/main/server-constants.js#L9)
    * [BOX_USER_ID](https://github.com/unofficialbox/box-react-starter/blob/main/server-constants.js#L10)
    * [BOX_FILE_ID](https://github.com/unofficialbox/box-react-starter/blob/main/server-constants.js#L11)
6. Run `yarn build` in the root project directory.
7. Run `yarn start` in the root project directory.
8. Open you browser and navigate to `http://localhost:8080`


## Disclaimer
This project is a collection of open source examples and should not be treated as an officially supported product. Use at your own risk. If you encounter any problems, please log an [issue](https://github.com/unofficialbox/box-react-starter/issues).

## License

The MIT License (MIT)

Copyright (c) 2023 Kyle Adams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.