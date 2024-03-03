"use client";

import { useEffect, useState } from "react";

export default function Vmatrix({ VData, darkTheme }) {
  const [hover, setHover] = useState("");
  const [mouseX, setMouseX] = useState();
  const [width, setWidth] = useState();
  /*   console.log("마우스", mouseX); */
  /* console.log("윈도우", window.innerWidth); */
  const onMouseOver = (event, skillName) => {
    setMouseX(event.clientX);
    setHover(skillName);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth); //화면Width를 state에 저장
    };
    //이벤트 등록
    window.addEventListener("resize", handleResize);

    return () => {
      // 언마운트 될때 이벤트 제거
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="box-border max-w-[315px] 3sm:max-w-[360px] md:max-w-[750px] lg:max-w-[1009px] mx-auto mt-3 p-1">
      <h1 className="text-center text-[25px] md:text-[30px] lg:text-[35px]">
        5차 스킬
      </h1>
      <div
        className={`w-[full] flex flex-wrap   gap-[6px] p-1 3sm:pl-7 md:pl-7 lg:pl-1 py-[10px] rounded-md shadow-md ${
          width !== undefined && width < 1024
            ? width < 768
              ? "Vmatrix"
              : "VmatrixMd"
            : "VmatrixLg"
        } ${darkTheme ? "bg-gray-500" : "bg-gray-50"}`}
      >
        {VData.character_skill.map((item) => {
          return (
            <div className={`relative `} key={item.skill_name}>
              {item.skill_description.slice(10, 12) === "25" ? (
                <svg
                  width={70}
                  height={70}
                  className="relative "
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
                  width={70}
                  height={70}
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
                className="absolute top-[16px] left-[20px] "
              >
                <img className=" " src={item.skill_icon} />
                <span className="bg-gray-500 text-[9px] text-white p-[2px] px-2 font-bold rounded-md relative left-[2px] top-[-12px]">
                  {String(item.skill_level).padStart(2, "0")}
                </span>
              </div>
              <div
                className={`w-[260px] 3sm:w-[300px] text-white bg-gray-900 rounded-md p-2 absolute  ${
                  mouseX < 90
                    ? ""
                    : mouseX < 129
                    ? "left-[-35px]"
                    : mouseX < 168
                    ? "left-[-75px]"
                    : mouseX < 206
                    ? "left-[-112px]"
                    : mouseX < 244
                    ? "left-[-152px]"
                    : mouseX < 282
                    ? "left-[-190px]"
                    : mouseX < 320
                    ? "left-[-228px]"
                    : mouseX < 346
                    ? "left-[-228px]"
                    : mouseX < 975
                    ? "left-[-228px]"
                    : mouseX < 1250
                    ? "left-[-228px]"
                    : ""
                } ${hover === item.skill_name ? "visible z-10" : "hidden"}`}
              >
                <h1 className="text-center font-bold">{item.skill_name}</h1>
                <div className="flex items-center ">
                  <img
                    width={32}
                    className="w-[32px] h-[32px]"
                    src={item.skill_icon}
                  />
                  <span className=" text-[11px] px-2 whitespace-pre-wrap">
                    {item.skill_description}
                  </span>
                </div>
                <div className="border-b border-gray-400 py-1"></div>
                <div className="flex flex-col">
                  <span>[ 현재 레벨 {item.skill_level} ]</span>
                  <span className="text-[10px] whitespace-pre-wrap">
                    {item.skill_effect}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
