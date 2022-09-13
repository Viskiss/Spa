import { useState, useEffect } from "react";

function Simple() {
  const [type, setType] = useState("users");

  useEffect(() => {}, [type]);

  return (
    <div>
      <h1>Resours: {type}</h1>
      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todos")}>Todo</button>
      <button onClick={() => setType("posts")}>Posts</button>
    </div>
  );
}

export default Simple;
