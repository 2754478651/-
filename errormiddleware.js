const {getDate} = require('./util');
const fs= require('fs');
function errorMiddleware(err, req, res, next) {
    console.log('error middleware')
    console.log(err.name)
    console.log(err.message)
    let data = `\n\n时间：${getDate(2)} - 错误名称: ${err.name}--${err.message}`;
    fs.appendFileSync('./error.log',data)
    // console.log(stack);
    next();
    // res.send('error')
    
}
module.exports = errorMiddleware;