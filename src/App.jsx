import React from "react";
import "./styles/style.css";

function App({
  title1,
  title2,
  title3,
  amount1,
  amount2,
  amount3,
  data1,
  data2,
  data3,
  button1,
  button2,
  button3,
}) {
  const renderCheckmark = (important) => (important ? "✔" : "✘");

  return (
    <div className="row">
      <div className="col-sm-12 col-md-4">
        <div className="card mb-3">
          <div className="card-header text-center">
            <p className="card-title">{title1}</p>
            <h1 className="card-amount">{amount1}</h1>
            <hr />
          </div>
          <div className="card-body">
            <ul>
              {data1.map((data) => {
                console.log(data);

                return (
                  <React.Fragment key={data.id}>
                    <li className={data.important ? "" : "disabled"}>
                      {renderCheckmark(data.important)}

                      {data.user}
                      {data.storage}
                      {data.pubProjects}
                      {data.access}
                      {data.pvtProjects}
                      {data.support}
                      {data.domain}
                      {data.status}
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
            {button1.button}
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="card mb-3">
          <div className="card-header text-center">
            <p className="card-title">{title2}</p>
            <h1 className="card-amount">{amount2}</h1>
            <hr />
          </div>
          <div className="card-body">
            <ul>
              {data2.map((data) => {
                console.log(data);

                return (
                  <React.Fragment key={data.id}>
                    <li className={data.important ? "" : "disabled"}>
                      {renderCheckmark(data.important)} {data.user}
                      {data.storage}
                      {data.pubProjects}
                      {data.access}
                      {data.pvtProjects}
                      {data.support}
                      {data.domain}
                      {data.status}
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
            {button2.button}
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-4">
        <div className="card mb-3">
          <div className="card-header text-center">
            <p className="card-title">{title3}</p>
            <h1 className="card-amount">{amount3}</h1>
            <hr />
          </div>
          <div className="card-body">
            <ul>
              {data3.map((data) => {
                console.log(data);

                return (
                  <React.Fragment key={data.id}>
                    <li>
                      {renderCheckmark(data.important)} {data.user}
                      {data.storage}
                      {data.pubProjects}
                      {data.access}
                      {data.pvtProjects}
                      {data.support}
                      {data.domain}
                      {data.status}
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
            {button3.button}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
