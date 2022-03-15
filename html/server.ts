import http from 'http';
import querystring from 'querystring';
import path from 'path';
import fs from 'fs';

const hostname = '127.0.0.1';
const port = 3000;
const publicPath = path.join(__dirname, './public');

const wait = (time: number) =>
    new Promise(resolve => {
        setTimeout(resolve, time);
    });

const makeScript = (
    jsName: string,
    needWait: number = 0,
    url?: string,
    type?: string
) => {
    const waitStr = needWait > 0 ? ` wait: ${needWait}` : '';
    let script = `console.log('${jsName}${waitStr}');`;
    if (url) {
        script += `document.write('<script ${
            type || ''
        } src="${url}"></script>');`;
    }
    return script;
};

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const [reqPath, queryStr] = (req.url || '').split('?');
    const query = querystring.decode(queryStr || '');
    if (reqPath.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/x-javascript');
        const jsName = reqPath.split('/').pop() || '';
        const needWait = (query.wait && +query.wait) || 0;
        const moreUrl = Array.isArray(query.url) ? query.url[0] : query.url;
        const moreType = Array.isArray(query.type) ? query.type[0] : query.type;
        if (needWait > 0) {
            await wait(needWait);
        }
        res.write(
            makeScript(
                jsName,
                needWait,
                decodeURIComponent(moreUrl || ''),
                moreType || ''
            )
        );
    } else {
        let htmlName = 'index.html';
        if (reqPath.endsWith('.html')) {
            htmlName = reqPath.split('/').pop() || '';
        }
        const content = fs.readFileSync(
            path.join(publicPath, htmlName),
            'utf-8'
        );
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write(content);
    }
    res.end();
});

server.listen(port, hostname, () => {
    const url = `http://${hostname}:${port}/`;
    console.log(`Server running at ${url}`);
});
