import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    avatar: "",
    email: "",
    first_name: "",
    id: 0,
    last_name: "",
  });

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((res) => {
        //console.log(res);
        setUser(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userId]);

  if (!user) {
    return <div>User Not found</div>;
  }
  return (
    <>
      <h1>User Information</h1>
      <img src={user.avatar}></img>
      <h3>
        Name:
        {`${user.first_name} ${user.last_name}`}
      </h3>
      <h3> email: {user.email}</h3>
    </>
  );
};

export default User;
