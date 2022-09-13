import { useState, useEffect } from "react";

function Effect() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  return (
    <div>
      <h1>Resours: {type}</h1>
      <button onClick={() => setType("users")}>Users</button>
      <button onClick={() => setType("todos")}>Todo</button>
      <button onClick={() => setType("posts")}>Posts</button>
    </div>
  );
}

export default Effect;
