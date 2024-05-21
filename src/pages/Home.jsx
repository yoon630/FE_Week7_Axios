import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";
import Layout from "./Layout";
import User from "./User";

const Home = () => {
  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1&per_page=9")
      .then((res) => {
        //console.log(res);
        setUsersInfo(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const userId = (e) => {
    usersInfo(e.target.id);
  };
  return (
    <>
      <h1>Home Page</h1>
      {usersInfo.map((user) => (
        <Card
          key={user.id}
          img={user.avatar}
          name={`${user.first_name} ${user.last_name}`}
          id={user.id}
          onClick={(e) => userId(e)}
        />
      ))}

      <Link to="/menu">Go Menu page</Link>
    </>
  );
};

export default Home;
