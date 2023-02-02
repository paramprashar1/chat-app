import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setmessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setmessageList((list) => [...list, messageData]);
      setCurrentMessage("");
      //   console.log(messageData);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setmessageList((list) => [...list, data]);
      console.log(data);
    });
    return () => socket.emit("end");
    // return () => socket.removeListener("receive_message");
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Room: {room}👋</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              //   <h1>{messageContent.message}</h1>
              <>
                {/* <div>
                  <center>
                    <p
                      style={{
                        color: "white",
                      }}
                    >
                      {username} has joined the chat
                    </p>
                  </center>
                </div> */}
                <div
                  className="message"
                  id={username === messageContent.author ? "other" : "you"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{messageContent.time}</p>

                      <p id="author">
                        {username === messageContent.author
                          ? "You"
                          : messageContent.author}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Type here"
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyDown={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>▶️</button>
      </div>
    </div>
  );
}

export default Chat;
