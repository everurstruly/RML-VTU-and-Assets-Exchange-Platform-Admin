import * as React from "react";
import { NavLink } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuIcon from "@mui/icons-material/Menu";
import { Paper } from "@mui/material";
import {
  AccountCircle,
  AccountCircleSharp,
  Forum,
  Home,
  LocalMall,
  ShoppingBasket,
} from "@mui/icons-material";

export default function SimpleBottomNavigation() {
  // const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        // value={value}
        // onChange={(evt, newValue) => {
        //   setValue(newValue);
        // }}
        className="!h-[74px]"
      >
        <BottomNavigationAction
          // LinkComponent={NavLink}
          className="gap-y-1.5 !justify-end !pb-2"
          href="/dashboard"
          label="Dashboard"
          icon={<Home className="!size-7" />}
        />
        <BottomNavigationAction
          // LinkComponent={NavLink}
          className="gap-y-1.5 !justify-end !pb-2"
          href="/orders"
          label="Orders"
          icon={<LocalMall className="!size-7" />}
        />
        <BottomNavigationAction
          // LinkComponent={NavLink}
          className="gap-y-1.5 !justify-end !pb-2"
          href="/messages"
          label="Messages"
          icon={<Forum className="!size-7" />}
        />
        <BottomNavigationAction
          // LinkComponent={NavLink}
          className="gap-y-1.5 !justify-end !pb-2"
          href="/me"
          label="You"
          icon={<AccountCircle className="!size-7" />}
        />
      </BottomNavigation>
    </Paper>
  );
}