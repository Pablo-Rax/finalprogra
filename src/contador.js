import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 25) {
      setCount(count + 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador</h1>
      <p style={{ fontSize: "24px" }}>Cuenta actual: {count}</p>
      <button
        onClick={increment}
        disabled={count === 25}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "5px",
          backgroundColor: count === 25 ? "grey" : "#61dafb",
          color: count === 25 ? "#fff" : "#000",
          border: "none",
        }}
      >
        Incrementar
      </button>
      {count === 25 && (
        <p style={{ color: "red", marginTop: "20px" }}>
          ¡Has alcanzado el límite de 25!
        </p>
      )}
    </div>
  );
};

export default Counter;
