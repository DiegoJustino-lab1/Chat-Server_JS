const botaoEnviar=document.getElementById('enviar');
const caixaMensagem=document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click',()=>{
    socket.emit('mensagem',caixaMensagem.value);
    if(caixaMensagem.value!==''){
        socket.emit('nova mensagem',caixaMensagem.value);
        caixaMensagem.value='';
    }
})


socket.on('nova mensagem', (msg)=>{
   const elementoMensagem= document.createElement('li'); //cria um elemento li
   elementoMensagem.textContent=msg; //adiciona o texto da mensagem
   elementoMensagem.classList.add('mensagem'); //adiciona a classe mensagem
   chat.appendChild(elementoMensagem); //adiciona o elemento li ao chat
})