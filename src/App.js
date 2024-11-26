import React, { useState } from "react";

function App() {
  // Step 1: Initialize state using useState
  const [count, setCount] = useState(0);

  // Step 2: Event handlers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // Step 3: UI with buttons
  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <h2 style={styles.counter}>{count}</h2>
      <div style={styles.buttonContainer}>
        <button onClick={increment} style={styles.button}>
          Increment
        </button>
        <button onClick={decrement} style={styles.button}>
          Decrement
        </button>
        <button onClick={reset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

// Styles (optional, for better presentation)
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  counter: {
    fontSize: "48px",
    color: "#333",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid #333",
  },
};

export default App;