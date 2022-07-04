import React from "react";
import { ControlSideBarV, StyledUlProfile, ListItem  } from './Profile.Style';

const UserControlBar = () => {
  return (
    < ControlSideBarV >
    <StyledUlProfile>
      <ListItem>My orders</ListItem>
      <ListItem>Wishlist</ListItem>
      <ListItem>Notifications</ListItem>
      <ListItem>Settings</ListItem>
      <ListItem>Logout</ListItem>
    </StyledUlProfile>
    </ ControlSideBarV>
  );
};
export default UserControlBar;