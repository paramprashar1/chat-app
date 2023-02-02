// import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";
// import io from "socket.io-client";

function App() {
  return (
    <>
      <div style={{ paddingTop: 10, paddingRight: 20, paddingLeft: 20 }}>
        <LoginButton />
        <div>
          <LogoutButton />
        </div>
      </div>
    </>
  );
}

export default App;
