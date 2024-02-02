const http=require('http');
const express= require('express');
const aplicacao=express();

const servidorHttp= http.createServer(aplicacao);
const io= require('socket.io')(servidorHttp);


io.addListener('connection', (socket)=>{
console.log('Alguém se conectou');
socket.addListener('nova mensagem', (msg)=>{
io.emit('nova mensagem', msg);

})
})

aplicacao.use(express.static('public'));
servidorHttp.listen(1000, 'ipv4'); //colocar o ip da máquina onde esta escrito ipv4