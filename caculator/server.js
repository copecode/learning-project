const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '';
    if (req.url === '/') {
        filePath = path.join(__dirname, 'index.html');
    } else {
        // 处理其他路径请求，例如对应静态资源的请求路径
        filePath = path.join(__dirname, req.url);
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Page Not Found</h1>');
            return;
        }

        const extname = path.extname(filePath).toLowerCase();
        let contentType = 'text/html';
        switch (extname) {
            case '.css':
                contentType = 'text/css';
                break;
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.jpg':
                contentType = 'image/jpeg';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            // 可以继续添加更多的文件类型判断和对应Content-Type设置
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});