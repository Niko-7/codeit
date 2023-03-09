import { useState, useEffect } from "react";
import { fetchUsers } from "../api";

const UserInterface = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetchUsers().then(({ data }) => {
      data.forEach((user) => {
        if (user.username === "weegembump") setCurrentUser(user);
      });
    });
  }, []);

  return <p className="white-text">Signed in as: {currentUser.username}</p>;
};

export default UserInterface;
