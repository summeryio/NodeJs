
const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

function startServer(route, handle) {
    const onRequest = (request, response) => {
        const pathname = url.parse(request.url).pathname
        let data = []

        console.log('Request received ' + pathname);

        request.on('error', (err) => {
            console.error(err);
        }).on('data', (thunk) => {
            data.push(thunk)
        }).on('end', () => {
            if (request.method === 'POST') {
                if (data.length > 1e6) {
                    request.connection.destroy()
                }
                
                data = Buffer.concat(data).toString()
                route(handle, pathname, response, querystring.parse(data))
            } else {
                const params = url.parse(request.url, true).query
                route(handle, pathname, response, params)
            }
        })
    }
    const server = http.createServer(onRequest)

    server.listen(3000, '127.0.0.1')
    console.log('Server started on localhost port 3000');
}

module.exports.startServer = startServer