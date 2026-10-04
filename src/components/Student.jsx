function Student({ name, age }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        width: "230px",
        padding: "10px",
        margin: "10px",
        display: "inline-block",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
      }}>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default Student;
