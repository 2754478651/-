const path =require('path');
let notFound =(req,res)=>{
    console.log('404');
    res.status(404).sendFile(path.join(__dirname,'view/404.html'))
}
module.exports = notFound;