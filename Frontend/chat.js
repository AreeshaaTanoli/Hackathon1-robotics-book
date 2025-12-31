async function sendMessage(message) {
  appendMessage(message, "user");  // show user message
  try {
    const res = await fetch("http://127.0.0.1:8000/api/chat", {  // Full backend URL
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

// Example to fetch book content
async function fetchBookChapter(chapter) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/book/${chapter}.md`);
    const text = await res.text();
    appendMessage(`Book says:\n${text}`, "bot");
  } catch {
    appendMessage("Book not found!", "bot");
  }
}
