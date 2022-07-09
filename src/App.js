import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  // Example of using 'useEffect' for changing the 'title' of a page:
  // This updates the page's title, but only when the 'text' variable changes:
  useEffect(() => {
    document.title = text;
  }, [text]);

  // Example of using 'useEffect' to create a timeout with 'setTimeout()' function:
  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <DogPics />
    </div>
  );
}

export default App;
