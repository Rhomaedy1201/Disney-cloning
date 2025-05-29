import React from "react";
import logo from "../assets/logo/disney_logo.png";
import HeaderItem from "./HeaderItem";
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiSparkles,
  HiStar,
  HiPlay,
  HiDotsVertical,
} from "react-icons/hi";
import { HiMiniTv } from "react-icons/hi2";

function Header() {
  const [toggle, setToggle] = React.useState(false);
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
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.name} name={""} icon={item.icon} />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} icon={<HiDotsVertical />} />
            {toggle && (
              <div className="absolute mt-3 bg-white p-5 gap-3 shadow">
                {menu.map(
                  (item, index) =>
                    index >= 3 && (
                      <HeaderItem
                        key={item.name}
                        name={item.name}
                        icon={item.icon}
                      />
                    )
                )}
              </div>
            )}
          </div>
        </div>
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
