import React from "react";
import logo from "../assets/logo/disney_logo.png";
import HeaderItem from "./HeaderItem";
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiSparkles,
  HiStar,
  HiPlay,
} from "react-icons/hi";
import { HiMiniTv } from "react-icons/hi2";

function Header() {
  const menu = [
    {
      name: "HOME",
      icon: <HiOutlineHome />,
    },
    {
      name: "SEARCH",
      icon: <HiOutlineSearch />,
    },
    {
      name: "WATCH LIST",
      icon: <HiSparkles />,
    },
    {
      name: "ORIGINALS",
      icon: <HiStar />,
    },
    {
      name: "MOVIES",
      icon: <HiPlay />,
    },
    {
      name: "SERIES",
      icon: <HiMiniTv />,
    },
  ];

  return (
    <div className="w-full bg-white p-4 flex items-center justify-between px-8 shadow">
      <div className="flex items-center gap-8 ">
        <img src={logo} alt="logo" className="w-[100px] mr-2 object-cover" />
        {menu.map((item) => (
          <HeaderItem key={item.name} name={item.name} icon={item.icon} />
        ))}
      </div>
      <div>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png"
          className="w-12 rounded-full cursor-pointer"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Header;
