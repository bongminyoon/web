// server.js 파일 내용 예시
const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/pet1', function(req, res){
    res.send('펫 1페이지 입니다');
});

app.get('/pet2', function(req, res){
    res.send('펫 2페이지 입니다');
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
});

