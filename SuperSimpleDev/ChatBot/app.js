
{
  /*
    1.input bar for user input
    2."send button" component
    3.an profile image for chat from user and chatbot along with chat
    4.different response from chatbot on specific questions from user
  */
}

function ChatInput() {
  return (
    <>
      <input placeholder="Send a message to Chatbot" size="30" />
      <button>Send</button>
    </>
  );
}

function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
      if (sender === 'robot') {
        return (
          <div>
            <img src="robot.png" width="50" />
            {message}
          </div>
        );
      }
      */

  return (
    <div>
      {sender === "robot" && <img src="robot.png" width="50" />}
      {message}
      {sender === "user" && <img src="user.png" width="50" />}
    </div>
  );
}

function App() {
  return (
    <>
      <ChatInput />
      <ChatMessage message="hello chatbot" sender="user" />
      <ChatMessage message="Hello! How can I help you?" sender="robot" />
      <ChatMessage message="can you get me todays date?" sender="user" />
      <ChatMessage message="Today is September 27" sender="robot" />
    </>
  );
}

const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<App />);
