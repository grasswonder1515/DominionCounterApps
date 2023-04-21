import "./styles.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";

export default function App() {
  const [tokenCnt, setToken] = useState(0);
  return (
    <div className="App">
      <h1>ドミニオントークン管理アプリ</h1>
      <Card>
        <h2>村人トークン</h2>
        <div>{tokenCnt}</div>
        <button onClick={() => setToken((prevcount) => prevcount + 1)}>
          +
        </button>
        <button onClick={() => setToken((prevcount) => prevcount - 1)}>
          -
        </button>
      </Card>
    </div>
  );
}
