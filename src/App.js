import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [apod, , setApod] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov.planetary/apod?api_key=F18Xf0DnbtolzZfU6AtLZxCSnAYlDtdNY35MaTsI"
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  return (
    <div className="App">
      <p>
        <span role="img" aria-label="go!">
          {!Object.keys(apod).length && <p>Yükleniyor...</p>}
          <div>
            <h1>{apod.title}</h1>
            <span>{apod.date}</span>
            <p>{apod.explanation} </p>

            <img src={apod.url} alt={apod.title} />
          </div>
        </span>
      </p>
    </div>
  );
}

export default App;
