"use client";

import { useEffect, useState } from "react";

export default function LinkSkill({ Data, darkTheme }) {
  const [linkPreset, setLinkPreset] = useState(1);
  const [hover, setHover] = useState("");
  const [mouseX, setMouseX] = useState();
  const [width, setWidth] = useState();
  /*   console.log("마우스", mouseX);
  console.log("윈도우", window.innerWidth); */
  const onMouseOver = (event, skillName) => {
    setMouseX(event.clientX);
    setHover(skillName);
  };

  const linkPreset_1 = [
    Data.character_owned_link_skill_preset_1,
    ...Data.character_link_skill_preset_1,
  ];
  const linkPreset_2 = [
    Data.character_owned_link_skill_preset_2,
    ...Data.character_link_skill_preset_2,
  ];
  const linkPreset_3 = [
    Data.character_owned_link_skill_preset_3,
    ...Data.character_link_skill_preset_3,
  ];

  const linkPresetNull = [
    Data.character_owned_link_skill,
    ...Data.character_link_skill,
  ];

  let preset =
    Data.character_owned_link_skill_preset_1 === null
      ? linkPresetNull
      : linkPreset === 1
      ? linkPreset_1
      : linkPreset === 2
      ? linkPreset_2
      : linkPreset_3;

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

  /*   console.log(linkPreset_1); */

  return (
    <div className="box-border max-w-[315px] mt-5 p-2 py-1 mb-[90px] 3sm:max-w-[360px] md:max-w-[750px] lg:max-w-[1019px] mx-auto">
      <div className="grid grid-cols-2 items-center ">
        <h1 className="text-center text-[25px] lg:text-[35px]">링크 스킬</h1>
        {/* 프리셋 */}
        <div className="flex flex-col space-y-1 ">
          <h3 className="text-center">프리셋</h3>
          <div className="flex items-center space-x-3 mx-auto">
            <button
              onClick={() => setLinkPreset(1)}
              className={`w-[35px] p-1 rounded-lg text-[15px] shadow-md ${
                linkPreset === 1
                  ? ` font-bold scale-110 ${
                      darkTheme ? "bg-purple-500" : "bg-green-100"
                    }`
                  : `${darkTheme ? "bg-gray-500" : "bg-gray-200"}`
              }  transition-all`}
            >
              1
            </button>
            <button
              onClick={() => setLinkPreset(2)}
              className={`w-[35px] p-1 rounded-lg text-[15px] shadow-md ${
                linkPreset === 2
                  ? ` font-bold scale-110 ${
                      darkTheme ? "bg-purple-500" : "bg-green-100"
                    }`
                  : `${darkTheme ? "bg-gray-500" : "bg-gray-200"}`
              }  transition-all`}
            >
              2
            </button>
            <button
              onClick={() => setLinkPreset(3)}
              className={`w-[35px] p-1 rounded-lg text-[15px] shadow-md ${
                linkPreset === 3
                  ? ` font-bold scale-110 ${
                      darkTheme ? "bg-purple-500" : "bg-green-100"
                    }`
                  : `${darkTheme ? "bg-gray-500" : "bg-gray-200"}`
              }   transition-all`}
            >
              3
            </button>
          </div>
        </div>
      </div>
      {/* 링크.map() */}
      <div
        className={`grid grid-cols-5 md:grid-cols-2 md:p-3 lg:grid-cols-3 lg:mx-auto gap-2 lg:gap-4  rounded-md shadow-md py-2 lg:py-4 mt-5 ${
          darkTheme ? "bg-gray-500 textShadow" : "bg-gray-50"
        }`}
      >
        {preset.map((item) => (
          <div key={item.skill_name} className="relative">
            {width < 768 ? (
              <img
                onMouseOver={() => onMouseOver(event, item.skill_name)}
                onMouseLeave={() => setHover("")}
                className="mx-auto"
                key={item.skill_name}
                src={item.skill_icon}
              />
            ) : (
              <div className="flex items-center space-x-3 border-[1px] border-black rounded-md shadow-md px-3 py-1">
                <img
                  onMouseOver={() => onMouseOver(event, item.skill_name)}
                  onMouseLeave={() => setHover("")}
                  className="w-[32px] h-[32px]"
                  key={item.skill_name}
                  src={item.skill_icon}
                />
                <div className="flex flex-col w-full">
                  <span>Lv.{item.skill_level}</span>
                  <div className="border-dashed border-b-[2px] border-gray-400 px-2"></div>
                  <span>{item.skill_name}</span>
                </div>
              </div>
            )}

            <div
              className={`w-[240px] 3sm:w-[300px] text-white bg-gray-800 rounded-md p-2 absolute  ${
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
        ))}
      </div>
    </div>
  );
}
