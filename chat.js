
const alumniList = [
    { id: 1, name: "Jane Smith" },
    { id: 2, name: "Emily Johnson" },
    { id: 3, name: "Michael Brown" },
];


document.addEventListener('DOMContentLoaded', () => {
    loadAlumni();
});


function loadAlumni() {
    const alumniListDiv = document.getElementById('alumni-list');
    alumniList.forEach(alumni => {
        const alumniElement = document.createElement('div');
        alumniElement.textContent = alumni.name;
        alumniElement.classList.add('alumni-item');
        alumniElement.onclick = () => startPrivateChat(alumni);
        alumniListDiv.appendChild(alumniElement);
    });
}


function searchAlumni() {
    const query = document.getElementById('alumni-search').value.toLowerCase();
    const alumniItems = document.querySelectorAll('.alumni-item');
    alumniItems.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(query) ? 'block' : 'none';
    });
}


function startPrivateChat(alumni) {
    document.getElementById('chat-with').textContent = `Chat with ${alumni.name}`;
    document.getElementById('alumni-list').style.display = 'none';
    document.getElementById('private-chat').style.display = 'block';
    document.getElementById('chat-messages').innerHTML = ''; 
    loadChatMessages(alumni.id); 
}


function loadChatMessages(alumniId) {

    const messages = JSON.parse(localStorage.getItem(`chat_${alumniId}`) || '[]');
    const chatMessagesDiv = document.getElementById('chat-messages');
    chatMessagesDiv.innerHTML = ''; 

   
    messages.forEach((msg, index) => {
        const msgElement = document.createElement('div');
        msgElement.classList.add('message', msg.sent ? 'sent' : 'received');
        msgElement.textContent = msg.text;

       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            deleteMessage(alumniId, index); 
            chatMessagesDiv.removeChild(msgElement); 
        });

        msgElement.appendChild(deleteButton); 
        chatMessagesDiv.appendChild(msgElement);
    });
}


function deleteMessage(alumniId, index) {
    const messages = JSON.parse(localStorage.getItem(`chat_${alumniId}`) || '[]');
    messages.splice(index, 1); 
    localStorage.setItem(`chat_${alumniId}`, JSON.stringify(messages)); 
}


document.getElementById('send-group').addEventListener('click', function () {
    const groupMessageInput = document.getElementById('group-message');
    const groupChatMessages = document.getElementById('group-chat-messages');

    const messageText = groupMessageInput.value.trim();
    
    if (messageText !== "") {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');

        const messageTextNode = document.createElement('span');
        messageTextNode.textContent = messageText;
        newMessage.appendChild(messageTextNode);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            groupChatMessages.removeChild(newMessage);
        });

        newMessage.appendChild(deleteButton);
        groupChatMessages.appendChild(newMessage);

        groupMessageInput.value = "";
        groupChatMessages.scrollTop = groupChatMessages.scrollHeight;
    }
});


document.getElementById('send-private').addEventListener('click', function () {
    const privateMessageInput = document.getElementById('private-message');
    const privateChatMessages = document.getElementById('chat-messages');
    const alumniId = parseInt(document.getElementById('chat-with').getAttribute('data-alumni-id'));

    const messageText = privateMessageInput.value.trim();
    
    if (messageText !== "") {
     
        const newMessage = { text: messageText, sent: true };
        
       
        const messages = JSON.parse(localStorage.getItem(`chat_${alumniId}`) || '[]');
        messages.push(newMessage);
        localStorage.setItem(`chat_${alumniId}`, JSON.stringify(messages));

       
        const newMessageElement = document.createElement('div');
        newMessageElement.classList.add('message', 'sent');
        newMessageElement.textContent = messageText;

       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            deleteMessage(alumniId, messages.length - 1); 
            privateChatMessages.removeChild(newMessageElement); 
        });

        newMessageElement.appendChild(deleteButton);
        privateChatMessages.appendChild(newMessageElement);

        
        privateMessageInput.value = "";
        privateChatMessages.scrollTop = privateChatMessages.scrollHeight;
    }
});
