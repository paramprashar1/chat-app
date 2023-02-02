import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "./../../src/components/image.png";
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      // <div style={{ paddingLeft: 500, paddingRight: 500, paddingTop: 120 }}>
      //   <div className="card text-white bg-dark mb-3">
      //     <div className="card-header">Header</div>
      //     <div className="card-body">
      //       <h5 className="card-title">Dark card title</h5>
      //       <p className="card-text">
      //         Some quick example text to build on the card title and make up the
      //         bulk of the card's content.
      //       </p>
      //
      //     </div>
      //   </div>
      // </div>
      <center>
        <div class="card text-center" style={{ width: 600, marginTop: 100 }}>
          <div class="card-body">
            <h2 class="card-title">Chatify</h2>
            <p class="card-text">
              The No. 1 app for chatting is here! Use this app to chat to your
              friends, join Chat Rooms and do much more! Sign Up today and
              experience the future of Social Media!
            </p>
            <button
              className="btn btn-primary "
              onClick={() => loginWithRedirect()}
            >
              Get Started!
            </button>
          </div>
        </div>
      </center>
    );
  }
};

export default LoginButton;
