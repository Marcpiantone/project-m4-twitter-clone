import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";
import { format } from "date-fns";

import { UL, Divider } from "./GlobalStyles";

import { NavLink } from "react-router-dom";

import { COLORS } from "./constants";
import HomeFeed from "./HomeFeed";

import { FiMapPin, FiCalendar } from "react-icons/fi";

const Profile = (handle) => {
  console.log(window.location.pathname);
  const [user, setUser] = useState(null);
  const [userState, setUserState] = useState("loading");

  const [profileFeed, setProfileFeed] = useState("null");
  const [profileFeedState, setProfileFeedState] = useState("loading");

  const fetchUser = async () => {
    try {
      const res = await fetch(`/api${window.location.pathname}/profile`);
      await res.json().then((data) => {
        setUser(data);
        setUserState("idle");
      });
    } catch (err) {
      console.log(err);
      setUserState("error");
    }
  };

  const fetchProfileFeed = async () => {
    try {
      const res = await fetch(`/api${window.location.pathname}/feed`);
      await res.json().then((data) => {
        setProfileFeed(data);
        setProfileFeedState("idle");
      });
    } catch (err) {
      console.log(err);
      setProfileFeedState("error");
    }
  };

  useEffect(() => {
    fetchUser();
    fetchProfileFeed();
  }, [user]);

  console.log(userState);
  console.log(user);

  if (userState === "idle") {
    //const JoinedOn = format(new Date(user.profile.joined), "MMMM yyyy");
    return (
      <UL>
        <Li>
          <Header>
            <Banner src={user.profile.bannerSrc} />
            <Avatar src={user.profile.avatarSrc} />
            <Infos>
              <DisplayName to={`/${user.profile.handle}`}>
                {user.profile.displayName}
              </DisplayName>
              <Handle>@{user.profile.handle}</Handle>
              <Bio> {user.profile.bio}</Bio>
              <SubInfos>
                <FiMapPin />
                <Location> {user.profile.location} </Location>
                <FiCalendar />
                {/* <MemberSince>Joined {JoinedOn}</MemberSince> */}
              </SubInfos>
            </Infos>
            <Divider />
          </Header>
        </Li>

        <HomeFeed feed={profileFeed} feedState={profileFeedState} />
      </UL>
    );
  }
  if (userState === "error") {
    return <Error />;
  } else {
    return <Loading />;
  }
};

const Header = styled.div``;

const Li = styled.li`
  border-right: solid 1px ${COLORS.greyish};
  max-width: 800px;
  width: 100%;
`;

const Banner = styled.img`
  max-width: 100%;
`;

const Avatar = styled.img`
  border-radius: 50%;
  border: solid white 2px;
  width: 200px;
  margin-left: 100px;
  position: relative;
  top: -100px;
`;

const Infos = styled.div`
  margin-left: 15px;
  position: relative;
  top: -75px;
`;

const DisplayName = styled(NavLink)`
  display: block;
  color: black;
  font-weight: bolder;
  margin-bottom: 5px;
`;

const Handle = styled.div`
  color: ${COLORS.grey};
  margin-bottom: 15px;
`;

const Bio = styled.div`
  margin-bottom: 10px;
`;

const SubInfos = styled.div`
  color: ${COLORS.grey};
`;

const Location = styled.span`
  padding-right: 10px;
`;

const MemberSince = styled.span``;

export default Profile;
