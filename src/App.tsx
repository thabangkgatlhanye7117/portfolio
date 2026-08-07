import Cursor from "./components/Cursor";
import NetworkBackground from "./components/networkBackground/NetworkBackground";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <NetworkBackground />
      <Cursor />

      <div className="relative z-10">
        <Router />
      </div>
    </>
  );
}

export default App;