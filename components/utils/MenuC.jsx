import React from "react";
import { Menu, MenuItem, ListItemIcon, Fade } from "@material-ui/core";
import { ExitToAppOutlined } from "@material-ui/icons";
import Link from "next/link";

// data: {title,href,icon}

function MenuC({ data, open, onClose, anchorEl }) {
  return (
    <Menu
      id="fade-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={onClose}
      TransitionComponent={Fade}>
      {data.map((item) => (
        <Link key={item.title} href={item.href} passHref>
          <MenuItem onClick={onClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {item.title}
          </MenuItem>
        </Link>
      ))}
      <MenuItem onClick={onClose}>
        <ListItemIcon>
          <ExitToAppOutlined fontSize="small" />
        </ListItemIcon>
        Log Out
      </MenuItem>
    </Menu>
  );
}

export default MenuC;
