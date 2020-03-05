// 建立 最簡單的Hello World 網頁 !!!
var express = require('express') //把express引用近來
var app = express()
//設置Router
app.get('/', (req, res) => {
    res.send('Hello World!!!')
})
//把輸出port設置為8080
app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
})
module.exports = app;


