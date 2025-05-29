import React from "react";

function HeaderItem({ name, icon }) {
  return (
    <div className="flex text-black items-center gap-3 text-[17px] font-semibold cursor-pointer hover:underline underline-offset-8">
      {icon}
      <h2>{name}</h2>
    </div>
  );
}

export default HeaderItem;
