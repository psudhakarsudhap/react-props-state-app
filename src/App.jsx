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
      <div>
        <Student name="Sudhakar" age={20} />
        <Student name="Another Student" age={22} />
      </div>
      <Counter />
    </div>
  );
}

export default App;
