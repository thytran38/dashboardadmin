const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/dashboard-admin'));

app.get('/*', (req, res) =>
        res.sendFile('index.html', {root: 'dist/dashboard-admin'}),
    );

app.listen(progress.env.PORT || 8080);
