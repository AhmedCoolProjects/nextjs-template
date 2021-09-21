import React from "react";
import Link from "next/link";
import { Fade, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { ExitToAppOutlined } from "@mui/icons-material";

function MenuC({ data, open, onClose, anchorEl, isLogin }) {
  return (
    <Menu
      id="fade-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={onClose}
      TransitionComponent={Fade}
    >
      {data.map((item) => (
        <Link key={item.title} href={item.href} passHref>
          <MenuItem onClick={onClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {item.title}
          </MenuItem>
        </Link>
      ))}
      <Link href="/auth" passHref>
        <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <ExitToAppOutlined fontSize="small" />
          </ListItemIcon>
          {isLogin ? "Log Out" : "Login"}
        </MenuItem>
      </Link>
    </Menu>
  );
}

export default MenuC;
