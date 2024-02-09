"use client";

import { useState } from "react";

export default function Vmatrix({ VData }) {
  const [hover, setHover] = useState("");
  const [mouseX, setMouseX] = useState();
  console.log(mouseX);
  const onMouseOver = (event, skillName) => {
    setMouseX(event.clientX);
    setHover(skillName);
  };
  return (
    <div className="box-border max-w-[315px]">
      <div className="w-[full] flex flex-wrap Vmatrix justify-center items-center gap-[2px] ">
        {VData.character_skill.map((item) => {
          return (
            <div className={`relative `} key={item.skill_name}>
              {item.skill_description.slice(10, 12) === "25" ? (
                <svg
                  width={75}
                  height={75}
                  className="relative"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-13 -10 26 20"
                >
                  <path
                    d="M 0 -10 L 8 -10 L 13 0 L 8 10 L 0 10 L -8 10 L -13 0 L -8 -10 L 0 -10"
                    stroke="#000"
                    strokeWidth="0.1"
                    fill="#D1ECFF"
                  />
                </svg>
              ) : (
                <svg
                  width={75}
                  height={75}
                  className="relative"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-13 -10 26 20"
                >
                  <path
                    d="M 0 -10 L 8 -10 L 13 0 L 8 10 L 0 10 L -8 10 L -13 0 L -8 -10 L 0 -10"
                    stroke="#000"
                    strokeWidth="0.1"
                    fill="#D1D1D1"
                  />
                </svg>
              )}
              <div
                onMouseOver={() => onMouseOver(event, item.skill_name)}
                onMouseLeave={() => setHover("")}
                className="absolute top-[18px] left-[22px] "
              >
                <img className=" " src={item.skill_icon} />
                <span className="bg-gray-500 text-[9px] text-white p-[2px] px-2 font-bold rounded-md relative left-[2px] top-[-12px]">
                  {String(item.skill_level).padStart(2, "0")}
                </span>
              </div>
              <div
                className={`w-[300px] text-white bg-gray-900 rounded-md p-2 absolute  ${
                  mouseX < 74 ? "" : mouseX < 110 ? "left-[-45px]" : ""
                } ${hover === item.skill_name ? "visible z-10" : "hidden"}`}
              >
                <h1 className="text-center font-bold">{item.skill_name}</h1>
                <div className="flex items-center ">
                  <img
                    width={32}
                    className="w-[32px] h-[32px]"
                    src={item.skill_icon}
                  />
                  <span className=" text-[11px] px-2">
                    {item.skill_description}
                  </span>
                </div>
                <div className="border-b border-gray-400 py-1"></div>
                <div className="flex flex-col">
                  <span>[ 현재 레벨 {item.skill_level} ]</span>
                  <span className="text-[10px]">{item.skill_effect}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
