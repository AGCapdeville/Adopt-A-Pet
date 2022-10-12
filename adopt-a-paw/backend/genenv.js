const fs = require('fs')
const path = `./.env`
const vars = `
 REACT_APP_VAR=${process.env.REACT_APP_VAR}
`
fs.writeFileSync(path, vars)