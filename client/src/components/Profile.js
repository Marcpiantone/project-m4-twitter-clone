import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";

import { NavLink } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [profileState, setProfileState] = useState("loading");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`/api/me/profile`);
        await res.json().then((data) => {
          setProfile(data);
          setProfileState("idle");
        });
      } catch (err) {
        console.log(err);
        setProfileState("error");
      }
    };
    fetchProfile();
  }, []);

  if (profileState === "idle") {
    console.log(profile);
    return (
      <DisplayName to={`/${profile.profile.handle}`}>
        {profile.profile.displayName}
      </DisplayName>
    );
  }
  if (profileState === "error") {
    return <Error />;
  } else {
    return <Loading />;
  }
};

const DisplayName = styled(NavLink)`
  color: black;
  font-weight: bolder;
`;

export default Profile;
