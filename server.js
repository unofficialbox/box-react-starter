const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const BoxSDK = require('box-node-sdk');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors({
    origin: [
        'http://localhost:8080',
        'http://api.box.com'
      ]
  }));

  const { 
        EXPLORER_SCOPES, 
        RECENTS_SCOPES, 
        PICKER_SCOPES, 
        UPLOADER_SCOPES, 
        PREVIEW_SCOPES,
        BOX_CLIENT_ID,
        BOX_CLIENT_SECRET,
        BOX_ENTERPRISE_ID,
        BOX_USER_ID,
        BOX_FILE_ID, 
    } = require('./server-constants');


    const sdkConfig = {
        boxAppSettings: {
            clientID: BOX_CLIENT_ID,
            clientSecret: BOX_CLIENT_SECRET
        }, 
        enterpriseID: BOX_ENTERPRISE_ID //The enterprise id in this case is optional and can be ommited.
    }
    const sdk = BoxSDK.getPreconfiguredInstance(sdkConfig)
    const client = sdk.getCCGClientForUser(BOX_USER_ID);

    const port = process.env.PORT || 8080;
    const server = app.listen(port, () => {
        const host = server.address().address;
        const port = server.address().port;
        console.log(`Express app listening at http://${host}:${port}`);
    });

app.get('/box/explorer/token-downscope/:folderId', async (req, res) => {
    try {
        const folderId = req.params.folderId;     
        // const downscopedToken = await client.exchangeToken(EXPLORER_SCOPES, `https://api.box.com/2.0/folders/${folderId}`);
        const downscopedToken = await client.exchangeToken(EXPLORER_SCOPES);


        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(downscopedToken);
    }
    catch(error) {
        console.log('Failed to get downscoped token: ', error)
        res.status(500).send({ error: error.mesage });
    }
})

app.get('/box/explorer-recents/token-downscope/:userId', async (req, res) => {
    try {
        const userClient = sdk.getAppAuthClient('user', BOX_USER_ID);
        const downscopedToken = await userClient.exchangeToken(RECENTS_SCOPES)

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(downscopedToken);
    }
    catch(error) {
        console.log('Failed to get downscoped token: ', error)
        res.status(500).send({ error: error.mesage });
    }
})

app.get('/box/picker/token-downscope/:folderId', async (req, res) => {
    try {
        const folderId = req.params.folderId;
        const downscopedToken = await client.exchangeToken(PICKER_SCOPES, `https://api.box.com/2.0/folders/${folderId}`);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(downscopedToken);
    }
    catch(error) {
        console.log('Failed to get downscoped token: ', error)
        res.status(500).send({ error: error.mesage });
    }
})

app.get('/box/uploader/token-downscope/:folderId', async (req, res) => {
    try {
        const folderId = req.params.folderId;
        const downscopedToken = await client.exchangeToken(UPLOADER_SCOPES, `https://api.box.com/2.0/folders/${folderId}`);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(downscopedToken);
    }
    catch(error) {
        console.log('Failed to get downscoped token: ', error)
        res.status(500).send({ error: error.mesage });
    }
})

app.get('/box/preview/token-downscope/:fileId', async (req, res) => {
    try {
        const fileId = req.params.fileId;
        // const downscopedToken = await client.exchangeToken(PREVIEW_SCOPES, `https://api.box.com/2.0/files/${fileId}`);
        const downscopedToken = await client.exchangeToken(PREVIEW_SCOPES);

        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(downscopedToken);
    }
    catch(error) {
        console.log('Failed to get downscoped token: ', error)
        res.status(500).send({ error: error.mesage });
    }
})
   
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});