import React from "react";
import { ControlSideBarH, StyledUlProfileH , ListItem  } from './Profile.Style';

const UserControlBarH = () => {
  return (
    < ControlSideBarH >
    <StyledUlProfileH >
      <ListItem>My orders</ListItem>
      <ListItem>Wishlist</ListItem>
      <ListItem>Notifications</ListItem>
      <ListItem>Settings</ListItem>
    </StyledUlProfileH >
    </ ControlSideBarH>
  );
};
export default UserControlBarH;