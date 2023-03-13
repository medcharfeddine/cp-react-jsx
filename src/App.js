import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto.jsx";
import FullName from "./Component/Profile/FullName.jsx";
import Address from "./Component/Profile/Address.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="hero pattern-cross-dots-xl">
      <div className="App">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
