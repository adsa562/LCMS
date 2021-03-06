const app         = new (require('koa'))()
const path        = require('path')
const config      = require('./config.json')
const hAF         = require('koa2-connect-history-api-fallback')

app.use(hAF())
app.use(require('koa-static')(path.join(__dirname, '/../dist/')))
app.listen(config.port)
console.log(`Start server on port ${config.port}.`)
