function solve() {
   const sendBtn = document.getElementById('send');
   const messageContainer = document.getElementById('chat_input');
   const parentDiv = document.getElementById('chat_messages');

   sendBtn.addEventListener('click', sendMessage);

   function sendMessage() {
      let message = messageContainer.value;
      let newMessage = document.createElement('div');
      newMessage.classList.add('message', 'my-message');
      newMessage.textContent = message;

      parentDiv.appendChild(newMessage);

      messageContainer.value = "";
   }
}

