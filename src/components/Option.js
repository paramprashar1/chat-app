import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Profile from "./Profile";

function Options() {
  const [showJRoom, setJRoom] = useState(false);
  return (
    <>
      {/* <Profile /> */}
      {!showJRoom ? (
        <center>
          <div className="btn-group-vertical " style={{ width: 600 }}>
            <button
              className="btn btn-primary btn-lg btn-block"
              onClick={(event) => {
                setJRoom(true);
              }}
            >
              Join a chat room
            </button>
            <button
              className="btn btn-primary btn-lg btn-block disabled"
              onClick={(event) => {
                setJRoom(true);
              }}
            >
              Chat with your Friend
            </button>
          </div>
        </center>
      ) : (
        <Profile />
      )}
    </>
  );
}
export default Options;
