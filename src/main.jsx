import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const data1 = [
  {
    id: 1,
    user: "Single User",
    important: true,
  },

  { id: 2, storage: "50GB Storage", important: true },
  {
    id: 3,
    pubProjects: "Unlimited Public Projects",
    important: true,
  },
  {
    id: 4,
    access: "Community Access",
    important: true,
  },
  {
    id: 5,
    pvtProjects: "Unlimited Private Projects",
    important: false,
  },
  {
    id: 6,
    support: "Dedicated Phone Support",
    important: false,
  },
  {
    id: 7,
    domain: "Free Subdomain",
    important: false,
  },
  {
    id: 8,
    status: "Monthly status Report",
    important: false,
  },
];

const button1 = {
  id: 9,
  button: (
    <div className="d-grid">
      <button className="btn btn-primary rounded-pill" disabled type="button">
        BUTTON
      </button>
    </div>
  ),
  important: false,
};
const data2 = [
  {
    id: 10,
    user: "5 User",
    important: true,
  },

  { id: 11, storage: "50GB Storage", important: true },
  {
    id: 12,
    pubProjects: "Unlimited Public Projects",
    important: true,
  },
  {
    id: 13,
    access: "Community Access",
    important: true,
  },
  {
    id: 14,
    pvtProjects: "Unlimited Private Projects",
    important: true,
  },
  {
    id: 15,
    support: "Dedicated Phone Support",
    important: true,
  },
  {
    id: 16,
    domain: "Free Subdomain",
    important: true,
  },
  {
    id: 17,
    status: "Monthly status Report",
    important: false,
  },
];
const button2 = {
  id: 18,
  button: (
    <div className="d-grid gap-2">
      <button className="btn btn-primary rounded-pill" disabled type="button">
        BUTTON
      </button>
    </div>
  ),
  important: false,
};
const data3 = [
  {
    id: 19,
    user: "Unlimited User",
    important: true,
  },

  { id: 20, storage: "50GB Storage", important: true },
  {
    id: 21,
    pubProjects: "Unlimited Public Projects",
    important: true,
  },
  {
    id: 22,
    access: "Community Access",
    important: true,
  },
  {
    id: 23,
    pvtProjects: "Unlimited Private Projects",
    important: true,
  },
  {
    id: 24,
    support: "Dedicated Phone Support",
    important: true,
  },
  {
    id: 25,
    domain: "Free Subdomain",
    important: true,
  },
  {
    id: 26,
    status: "Monthly status Report",
    important: true,
  },
];
const button3 = {
  id: 27,
  button: (
    <div className="d-grid gap-2">
      <button className="btn btn-primary  rounded-pill" type="button">
        BUTTON
      </button>
    </div>
  ),
  important: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="container">
      <App
        title1={"FREE"}
        title2={"PLUS"}
        title3={"PRO"}
        amount1={"$0/month"}
        amount2={"$9/month"}
        amount3={"$49/month"}
        data1={data1}
        data2={data2}
        data3={data3}
        button1={button1}
        button2={button2}
        button3={button3}
      />
    </div>
  </>
);
