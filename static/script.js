function login() {
    const demoUsername = "or4193@srmist.edu.in";
    const demoPassword = "1234";
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    if (enteredUsername === demoUsername && enteredPassword === demoPassword) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
function stayAnonymous() {
    alert("You chose to stay anonymous. Start exploring EaseMinds anonymously!");
}
function freeToTalk() {
    alert("You're free to talk openly. Begin your conversation on EaseMinds!");
}
function chat(message) {
    fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Chatbot: ' + data.response);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const userMessageHTML = `<div class="user-message"><p>User: ${userInput}</p></div>`;
    document.querySelector('.chat-container').innerHTML += userMessageHTML;
    chat(userInput);
    document.getElementById('userInput').value = '';
}
function sendMessage() {
    let messageInput = document.getElementById('message-input');
    let message = messageInput.value;
    if (message.trim() !== '') {
        
        displayMessage('You', message, 'user');
        messageInput.value = '';
    }
}

function toggleAnonymity() {
    
    let anonymityCheckbox = document.getElementById('anonymity');
    let isAnonymous = anonymityCheckbox.checked;

    let message = isAnonymous ? 'You are now anonymous.' : 'You are no longer anonymous.';
    displayMessage('System', message, 'system');
}

function logout() {
    
    window.location.href = 'index.html';
}

// Add this to your static/script.js file

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;

    if (message.trim() !== "") {
        // You can customize this condition based on your logic
        // For now, it assumes that the message is not empty

        // Add your logic to send the message or initiate a call with a doctor

        // Check if the message contains "I am not well"
        if (message.toLowerCase().includes("i am not well")) {
            // If yes, create a button to connect to the doctor
            createConnectToDoctorButton();
        }

        // For demonstration purposes, redirect to the doctor_call.html page if "demo" is typed
        if (message.toLowerCase() === "demo") {
            window.location.href = "/doctor_call";
        }

        // Clear the message input after sending
        messageInput.value = "";
    }
}

function createConnectToDoctorButton() {
    var chatBox = document.getElementById("chat-box");

    // Create a new button
    var connectToDoctorButton = document.createElement("button");
    connectToDoctorButton.textContent = "Connect to Doctor";
    connectToDoctorButton.onclick = function () {
        // Redirect to the doctor_call.html page
        window.location.href = "/doctor_call";
    };

    // Append the button to the chat box
    chatBox.appendChild(connectToDoctorButton);
}
