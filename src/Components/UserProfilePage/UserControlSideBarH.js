import React from "react";
import { ControlSideBarH, StyledUlProfileH , ListItem, NavLink  } from './Profile.Style';

const UserControlBarH = () => {
  return (
    < ControlSideBarH >
    <StyledUlProfileH >
    <NavLink  to="/profile/myorders">
          <ListItem>My orders</ListItem>
        </NavLink >
        <NavLink  to="/profile/wishlist">
          <ListItem>Wishlist</ListItem>
        </NavLink >
        <NavLink  to="/profile/notifications">
          <ListItem>Notifications</ListItem>
        </NavLink >
        <NavLink  to="/profile/settings">
          <ListItem>Settings</ListItem>
        </NavLink >
    </StyledUlProfileH >
    </ ControlSideBarH>
  );
};
export default UserControlBarH;