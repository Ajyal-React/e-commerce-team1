import React from "react";
import { ControlSideBarV, StyledUlProfile, ListItem } from "./Profile.Style";
import { Link } from "react-router-dom";
const UserControlBar = () => {
  return (
    <ControlSideBarV>
      <StyledUlProfile>
        <Link to="/profile/myorders">
          <ListItem>My orders</ListItem>
        </Link>
        <Link to="/profile/wishlist">
          <ListItem>Wishlist</ListItem>
        </Link>
        <Link to="/profile/notifications">
          <ListItem>Notifications</ListItem>
        </Link>
        <Link to="/profile/settings">
          <ListItem>Settings</ListItem>
        </Link>
        <ListItem>Logout</ListItem>
      </StyledUlProfile>
    </ControlSideBarV>
  );
};
export default UserControlBar;
