import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/dashboard")
      .then((res) => {
        console.log(res);
        if (res.data.valid) {
          setMessage(res.data.message);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <h2>Dashboard {message}</h2>

      <h2>Welcom to my page</h2>
    </>
  );
};

export default Dashboard;
