import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import io from "socket.io-client";
import Chat from "./Chat";
import "../App.css";
// const socket = io.connect("http://localhost:3001");
const socket = io(
  "https://api.render.com/deploy/srv-cfdrdk4gqg45rnuqudsg?key=zk5KbfEA-r4"
);
const Profile = () => {
  const { user } = useAuth0();
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <>
      {/* <div className="container">
        <p className="userInfo" id="userInfo1">
          Name: {user.name}
        </p>
        <p className="userInfo" id="userInfo2">
          Given Name: {user.given_name}
        </p>
        <p className="userInfo" id="userInfo3">
          Family Name: {user.family_name}
        </p>
        <p className="userInfo" id="userInfo4">
          Email: {user.email}
        </p>
        <p className="userInfo" id="userInfo5">
          Sub: {user.sub}
        </p>
      </div> */}

      <div className="App">
        <h6 className="userInfo" id="userInfo1">
          Welcome {username}
        </h6>
        <br></br>
        <div></div>
        {!showChat ? (
          <div className="joinChatContainer">
            <h4>Join a Chat</h4>
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join a Room</button>
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
    </>
  );
};

export default Profile;
