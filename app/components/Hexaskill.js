import { useEffect, useState } from "react";

export default function HexaSkill({ Hdata, Hstat, darkTheme }) {
  const [hover, setHover] = useState("");
  const [mouseX, setMouseX] = useState();

  const [width, setWidth] = useState();

  //console.log("마우스", mouseX);
  //console.log("윈도우", window.innerWidth);
  const onMouseOver = (event, skillName) => {
    setMouseX(event.clientX);
    setHover(skillName);
  };

  /* 화면크기 받아오기 */
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
        6차 스킬
      </h1>
      <div
        className={`bg-gray-50  rounded-md shadow-md  md:grid md:grid-cols-2 lg:grid-cols-2 pb-[20px] ${
          darkTheme ? "bg-gray-500" : "bg-gray-50"
        }`}
      >
        {/* 6차스킬 map */}
        <div
          className={`w-full flex flex-wrap gap-[6px] mt-[20px] pt-3 p-1 3sm:pl-7 md:pl-10 lg:pl-5 lg:py-2 ${
            width !== undefined && width < 1024
              ? width >= 768
                ? Hdata.length <= 7
                  ? "HmatrixMd "
                  : "Hmatrix "
                : "Hmatrix mt-[10px]"
              : Hdata.length <= 11
              ? "HmatrixLg2 "
              : "HmatrixLg "
          }`}
        >
          {Hdata.map((item) => {
            const fillcolor = item.skill_description.includes(
              "10레벨 : 몬스터 방어율 무시 20% 증가"
            )
              ? "#EDBCFB"
              : item.skill_name.includes("강화")
              ? "#D1ECFF"
              : item.skill_name.includes("VI")
              ? "#FFD3ED"
              : "#D6D6D6";
            return (
              <div className={`relative `} key={item.skill_name}>
                <svg
                  width={70}
                  height={70}
                  className="relative rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-10.1 -10.1 20.2 20.2"
                >
                  <path
                    d="M 10 0 L 5 -10 L -5 -10 L -10 0 L -5 10 L 5 10 L 10 0"
                    stroke="#000"
                    strokeWidth="0.1"
                    fill={fillcolor}
                  />
                </svg>
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
                {/* 툴팁 */}
                <div
                  className={`w-[260px] 3sm:w-[300px]  text-white bg-gray-800 rounded-md p-2 absolute  ${
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
        <div className="border-b border-gray-300 px-2 mt-3 md:hidden lg:hidden"></div>
        {/*  핵사 스텟 */}
        <div className="flex flex-col  py-3 px-2 rounded-md justify-center">
          <h1 className="text-center text-[25px] mb-2 ">핵사 스텟</h1>
          {Hstat === undefined ? (
            <span className="p-1 px-3 bg-purple-100 rounded-md shadow-md  text-center text-black">
              핵사 스텟이 없어요
            </span>
          ) : (
            <div className="flex flex-col rounded-md  space-y-2">
              <span className="p-1 px-3 bg-purple-100 rounded-md shadow-md text-black ">
                {Hstat.main_stat_name} Lv.{Hstat.main_stat_level}
              </span>
              <span className="p-1 px-3 bg-blue-100 rounded-md shadow-md text-black">
                {Hstat.sub_stat_name_1} Lv.{Hstat.sub_stat_level_1}
              </span>
              <span className="p-1 px-3 bg-blue-100 rounded-md shadow-md text-black">
                {Hstat.sub_stat_name_2} Lv.{Hstat.sub_stat_level_2}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
