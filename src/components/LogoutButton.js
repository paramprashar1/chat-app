import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import Options from "./Option";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <div className="btn-danger" style={{ backgroundColor: "white" }}>
          <div className="d-flex flex-row-reverse">
            <button
              className="btn btn-danger right "
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          </div>
        </div>
        <br />
        <Options />
      </>
    );
  }
};

export default LogoutButton;
