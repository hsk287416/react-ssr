import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';

const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    const content = renderToString((
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
    ));

    res.send(`
        <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `);
});

app.listen(3000);
