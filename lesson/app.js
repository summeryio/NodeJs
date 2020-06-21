
const server = require('./server')
const router = require('./router')
const handler = require('./handler')

let handle = {}
handle['/'] = handler.home
handle['/api/v1/records'] = handler.api_records

server.startServer(router.route, handle)