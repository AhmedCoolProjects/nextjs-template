import { useState } from "react";
import Link from "next/link";
import {
  Brightness4Outlined,
  Brightness7Outlined,
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  BookOutlined,
  ChatBubbleOutlineOutlined,
  Functions as FunctionsIcon,
} from "@material-ui/icons";
import { IconButton, Button } from "@material-ui/core";
import { useContext } from "react";
import { AppContext } from "contexts/AppContext";
import MenuC from "./MenuC";

const data = [
  {
    title: "My Profile",
    href: "/profile",
    icon: <AccountCircleOutlined fontSize="small" />,
  },
  {
    title: "My Posts",
    href: "/my_posts",
    icon: <BookOutlined fontSize="small" />,
  },
  {
    title: "My Favorites",
    href: "/my_favorites",
    icon: <FavoriteBorderOutlined fontSize="small" />,
  },
  {
    title: "Personal Chat",
    href: "/pchat",
    icon: <ChatBubbleOutlineOutlined fontSize="small" />,
  },
  {
    title: "My Results",
    href: "/result_calc",
    icon: <FunctionsIcon fontSize="small" />,
  },
];

function TopNavbar() {
  const [isDark, handleChangeMode] = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuIsOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <header
      className={`flex py-2 flex-row 
    items-center justify-between border-b-[0.2px]
     border-gray-300 ${isDark ? "bg-[#303030e8]" : "bg-[#fafafa]"}`}>
      <Button onClick={() => {}}>about</Button>
      <div className="flex flex-row items-center justify-start relative">
        <Link href="/" passHref>
          <h1 className="text-xl uppercase cursor-pointer">jina bac</h1>
        </Link>
      </div>
      <div className="flex flex-row items-center space-x-1 justify-start relative ">
        <IconButton onClick={handleChangeMode}>
          {isDark ? <Brightness7Outlined /> : <Brightness4Outlined />}
        </IconButton>
        <IconButton
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}>
          <AccountCircleOutlined />
        </IconButton>
      </div>
      <MenuC
        data={data}
        open={menuIsOpen}
        onClose={handleMenuClose}
        anchorEl={anchorEl}
      />
    </header>
  );
}

export default TopNavbar;
