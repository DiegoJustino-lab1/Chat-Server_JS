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


socket.addEventListener('nova mensagem', (mensagem)=>{
   const elementoMensgem= document.createElement('Li'); //cria um elemento li
   elementoMensagem.textcontent=mensagem; //adiciona o texto da mensagem
   elementoMensgem.classList.add('mensagem'); //adiciona a classe mensagem
   chat.appendChild(elementoMensgem); //adiciona o elemento li ao chat
})