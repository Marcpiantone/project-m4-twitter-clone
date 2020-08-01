import React, { useContext } from "react";

import { CurrentUserContext } from "./CurrentUserContext";

import Loading from "./Loading";

const Profile = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  if (status === "idle") {
    return <div>{currentUser.profile.handle}</div>;
  } else {
    return <Loading />;
  }
};

export default Profile;
