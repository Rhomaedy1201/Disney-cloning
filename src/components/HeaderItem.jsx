import React from "react";

function HeaderItem({ name, icon }) {
  return (
    <div className="flex text-black items-center gap-3 text-[17px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
      {icon}
      <h2 className="">{name}</h2>
    </div>
  );
}

export default HeaderItem;
