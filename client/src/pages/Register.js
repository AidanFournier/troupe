import React, { useState } from "react";
import axios from "axios";
import bannerImg from "../images/banner.jpg";

export default function Home() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // OnSubmit, send the request to the API server.
    axios.post("/api/register").then((res) => {
      // Then do something with the result.
      setData(res.data.result);
      if (res.data.result) alert(`[${res.data.timeStamp}] The username you entered was: ${name}`);
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
