import "./App.css";
import Student from "./components/Student";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ margin: "0" }}>
      <h1
        style={{
          backgroundColor: "#f0f0f0",
          padding: "20px 0",
          margin: "0",
          width: "100%",
        }}>
        Welcome to Sudhakar's App
      </h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <Student name="Sudhakar" age={20} />
        <Student name="Ravi" age={22} />
      </div>
      <Counter />
    </div>
  );
}

export default App;
