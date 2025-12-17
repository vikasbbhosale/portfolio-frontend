import React, { useState, useRef, useEffect } from 'react';
import '../styles/chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: "Hi! I'm here to help. Ask me anything about my skills, projects, or experience!"
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const GEMINI_API_KEY = "AIzaSyDBTPJlfnsfXJVuViL20OHSF38wXeuLcSA";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue("");

    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(url
        ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: userMessage }]
              }
            ]
          })
        }
      );

      const data = await response.json();
      console.log("Gemini Response:", data);

      const botResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No reply received.";

      setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [
        ...prev,
        { role: "bot", content: "Error! Please try again later." }
      ]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chatbot">
     
      <button
        className={`chatbot-button ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <div className="button-ring"></div>
      </button>

   
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="header-info">
              <div className="bot-avatar">🤖</div>
              <div>
                <h4 className="bot-name">Vikas Assistant</h4>
                <p className="bot-status">Online</p>
              </div>
            </div>
            <button
              className="minimize-button"
              onClick={() => setIsOpen(false)}
              aria-label="Minimize chat"
            >
              −
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                {msg.role === 'bot' && <div className="message-avatar">🤖</div>}
                <div className="message-bubble">
                  <p>{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-avatar">🤖</div>
                <div className="message-bubble loading">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              className="send-button"
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;














// import React, { useState, useRef, useEffect } from "react";
// import "../styles/chatbot.css";

// function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       role: "bot",
//       content: "Hi! I'm Vikas Assistant 🤖. Ask me anything!"
//     }
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!inputValue.trim()) return;

//     const userMessage = inputValue;
//     setInputValue("");

//     setMessages(prev => [...prev, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ message: userMessage })
//       });

//       const data = await response.json();

//       const botResponse =
//         data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//         "No response from AI.";

//       setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
//     } catch (error) {
//       setMessages(prev => [
//         ...prev,
//         { role: "bot", content: "❌ Server error. Try again later." }
//       ]);
//     }

//     setIsLoading(false);
//   };

//   const handleKeyPress = e => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   return (
//     <div className="chatbot">
//       {!isOpen && (
//         <button className="chatbot-button" onClick={() => setIsOpen(true)}>
//           🤖
//         </button>
//       )}

//       {isOpen && (
//         <div className="chatbot-window">
//           <div className="chatbot-header">
//             <h4>Vikas Assistant</h4>
//             <button onClick={() => setIsOpen(false)}>−</button>
//           </div>

//           <div className="chatbot-messages">
//             {messages.map((msg, index) => (
//               <div key={index} className={`message ${msg.role}`}>
//                 <div className="bubble">{msg.content}</div>
//               </div>
//             ))}

//             {isLoading && (
//               <div className="message bot">
//                 <div className="bubble">Typing...</div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           <div className="chatbot-input">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={inputValue}
//               onChange={e => setInputValue(e.target.value)}
//               onKeyPress={handleKeyPress}
//               disabled={isLoading}
//             />
//             <button onClick={sendMessage} disabled={isLoading}>
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chatbot;

