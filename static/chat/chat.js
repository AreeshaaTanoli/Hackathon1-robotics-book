// Get DOM elements
const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");
const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const quickBtns = document.querySelectorAll(".quick-btn");

// Toggle chat box
chatIcon.addEventListener("click", () => {
  chatBox.classList.toggle("hidden");
});

// Function to append message
function appendMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  const timestamp = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  msgDiv.textContent = `[${timestamp}] ${text}`;
  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Function to send message to backend
async function sendMessage(message) {
  appendMessage(message, "user");  // show user message
  try {
    const res = await fetch("http://127.0.0.1:8000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    appendMessage(data.reply, "bot"); // show bot reply
  } catch (err) {
    appendMessage("Backend not connected!", "bot");
  }
}

// Send button click
sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (!message) return;
  userInput.value = "";
  sendMessage(message);
});

// Enter key support
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

// Quick buttons click
quickBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let msg = "";
    if (btn.dataset.action === "help") msg = "Please give me help for the current task.";
    if (btn.dataset.action === "next") msg = "Give me the next step.";
    if (btn.dataset.action === "docs") msg = "Show me relevant documentation.";
    sendMessage(msg);
  });
});
