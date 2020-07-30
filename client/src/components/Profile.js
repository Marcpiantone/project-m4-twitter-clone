import React, { useContext } from "react";

import { CurrentUserContext } from "./CurrentUserContext";

const Profile = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  console.log(status);
  console.log(currentUser);
  if (status === "idle") {
    return <div>{currentUser.profile.handle}</div>;
  } else {
    return <div>ProfilePage</div>;
  }
};

export default Profile;
