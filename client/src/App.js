import React from 'react';
import axios from 'axios';
import './App.css';
import bannerImg from "./images/banner.jpg";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get("/api/sample")
      .then((res) => {
        setData(res.data.messages);
      });
  }, []);

  return (
    <div className="App">
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <header className="App-header">
            <img src={bannerImg} className="banner-img" alt="Banner" />
            <h1>Troupe</h1>
          </header>
          <div>
            {data.map((message) => (
              <p>{message}</p>
            ))}
            <button>Create account</button>
            <p>
              Have an account?
              <a href="." target="_blank" className="App-link">
                Log in
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
