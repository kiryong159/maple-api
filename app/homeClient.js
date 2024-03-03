"use client";
import fetchData from "@/pages/api/fetchData";
import getocid from "@/pages/api/ocid";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { DarkThemeAtom, EquipAtom } from "./atom";
import {
  DayCalc,
  ForceStat,
  SymbolForcePlus,
  SymbolStatPlus,
  powerChanger,
  equipArrChanger,
} from "./utils/utils";

import StatBox from "./components/StatBox";
import EquipView from "./components/EquipView";
import BottomEquipView from "./components/BottomEquipVIew";
import AndroidView from "./components/AndroidView";
import PetView from "./components/PetView";
import Vmatrix from "./components/Vmatrix";
import HexaSkill from "./components/Hexaskill";
import LinkSkill from "./components/LinkSkill";
import UnionRaider from "./components/UnionRaider";
import Artifact from "./components/Artifact";
import Petcomponents from "./components/PetComponent";

export default function HomeClient({ Apikey }) {
  const [baseData, setBaseData] = useState({});
  const [popData, setPopData] = useState({});
  const [statData, setStatData] = useState({});
  const [hyperStatData, setHyperStatData] = useState({});
  const [abilityData, setAbilityData] = useState({});
  const [equipPresetNull, setEquipPresetNull] = useState([]);
  const [equipPresetData1, setEquipPresetData1] = useState([]);
  const [equipPresetData2, setEquipPresetData2] = useState([]);
  const [equipPresetData3, setEquipPresetData3] = useState([]);
  const [equipTitleData, setEquipTitleData] = useState({});
  const [symbolData, setSymbolData] = useState({});
  const [androidData, setAndroidData] = useState({});
  const [petData, setPetData] = useState({});
  const [VskillData, setVskillData] = useState({});
  const [HskillData, setHskillData] = useState({});
  const [HexaStatData, setHexaStatData] = useState({});
  const [linkSkillData, setLinkSkillData] = useState({});
  const [unionData, setUnionData] = useState({});
  const [unionRaiderData, setUnionRaiderData] = useState({});
  const [artifactData, setArtifactData] = useState({});

  const [equipmentPreset, setEquipmentPreset] = useState(null);
  const [abilityPreset, setAbilityPreset] = useState(null);
  const [nav, setNav] = useState("장비");
  const [hyperOn, setHyperOn] = useState(false);
  const [hyperPreset, setHyperPreset] = useState(1);
  const { register, handleSubmit, formState, reset } = useForm();
  const [equipNumAtom, setEquipNumAtom] = useRecoilState(EquipAtom);
  const [darkThemeAtom, setDarkThemeAtom] = useRecoilState(DarkThemeAtom);
  const [loading, setLoading] = useState(false);
  const [searchForm, setSearchForm] = useState(true);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const days = date.getDate() - 1;
  const prevLastDate = new Date(year, month - 1, 0);
  const prevLastDay = prevLastDate.getDate();
  const combineDay =
    days === 0
      ? month === 1
        ? `${year - 1}-${String(month + 11).padStart(2, "0")}-${String(
            prevLastDay
          ).padStart(2, "0")}`
        : `${year}-${String(month - 1).padStart(2, "0")}-${String(
            prevLastDay
          ).padStart(2, "0")}`
      : `${year}-${String(month).padStart(2, "0")}-${String(days).padStart(
          2,
          "0"
        )}`;

  const combineDayM1 = DayCalc(year, month, date.getDate() - 2, prevLastDay);
  const combineDayM2 = DayCalc(year, month, date.getDate() - 3, prevLastDay);
  const combineDayM3 = DayCalc(year, month, date.getDate() - 4, prevLastDay);
  const combineDayM4 = DayCalc(year, month, date.getDate() - 5, prevLastDay);
  const combineDayM5 = DayCalc(year, month, date.getDate() - 6, prevLastDay);
  const combineDayM6 = DayCalc(year, month, date.getDate() - 7, prevLastDay);

  const onValid = async (data) => {
    setEquipNumAtom(null);
    const Name = data.Name;
    const ocid = await getocid(Name, Apikey);
    const baseInfo = await fetchData("basic", Apikey, ocid, combineDay, 0).then(
      (r) => setBaseData(r)
    );

    const pop = await fetchData("popularity", Apikey, ocid, combineDay, 0).then(
      (r) => {
        setPopData(r), setLoading(true), setSearchForm(false);
      }
    );
    const stat = await fetchData("stat", Apikey, ocid, combineDay, 0).then(
      (r) => setStatData(r)
    );
    const hyperStat = await fetchData(
      "hyper-stat",
      Apikey,
      ocid,
      combineDay,
      0
    ).then((r) => setHyperStatData(r));

    const ability = await fetchData(
      "ability",
      Apikey,
      ocid,
      combineDay,
      0
    ).then((r) => {
      setAbilityData(r), setAbilityPreset(Number(r.preset_no));
    });
    const getEquipment = await fetchData(
      "item-equipment",
      Apikey,
      ocid,
      combineDay,
      0
    ).then((r) => {
      setEquipPresetData1(equipArrChanger(r.item_equipment_preset_1));
      setEquipPresetData2(equipArrChanger(r.item_equipment_preset_2));
      setEquipPresetData3(equipArrChanger(r.item_equipment_preset_3));
      setEquipPresetNull(equipArrChanger(r.item_equipment));
      setEquipTitleData(r.title);
      setEquipmentPreset(Number(r.preset_no));
    });
    const getSymbol = await fetchData(
      "symbol-equipment",
      Apikey,
      ocid,
      combineDay,
      0
    ).then((r) => {
      setSymbolData(r);
    });
    const getAndroid = await fetchData(
      "android-equipment",
      Apikey,
      ocid,
      combineDay,
      0
    ).then((r) => {
      setAndroidData(r);
    });
    const getPet = await fetchData(
      "pet-equipment",
      Apikey,
      ocid,
      combineDay,
      0
    ).then((r) => {
      setPetData(r);
    });

    const getVskill = await fetchData(
      "skill",
      Apikey,
      ocid,
      combineDay,
      5
    ).then((r) => setVskillData(r));

    const getHskill = await fetchData(
      "skill",
      Apikey,
      ocid,
      combineDay,
      6
    ).then((r) => setHskillData(r));

    const getHexaStat = await fetchData(
      "hexamatrix-stat",
      Apikey,
      ocid,
      combineDay,
      0
    ).then((r) => setHexaStatData(r));

    const getLinkSkill = await fetchData(
      "link-skill",
      Apikey,
      ocid,
      combineDay,
      0
    ).then((r) => setLinkSkillData(r));

    const getUnion = await fetchData("union", Apikey, ocid, combineDay, 2).then(
      (r) => setUnionData(r)
    );

    const getUnionRaider = await fetchData(
      "union-raider",
      Apikey,
      ocid,
      combineDay,
      2
    ).then((r) => setUnionRaiderData(r));

    const getArtifact = await fetchData(
      "union-artifact",
      Apikey,
      ocid,
      combineDay,
      2
    ).then((r) => setArtifactData(r));

    await Promise.all([
      baseInfo,
      pop,
      stat,
      hyperStat,
      ability,
      getEquipment,
      getSymbol,
      getAndroid,
      getPet,
      getVskill,
      getHskill,
      getHexaStat,
      getLinkSkill,
      getUnion,
      getUnionRaider,
      getArtifact,
    ])
      .then(setLoading(false))
      .then(reset());
  };

  const resetBtn = () => {
    setSearchForm(true);
    setBaseData({});
    setPopData({});
    setStatData({});
    setHyperStatData({});
    setAbilityData({});
    setEquipPresetData1([]);
    setEquipPresetData2([]);
    setEquipPresetData3([]);
    setEquipPresetNull([]);
    setEquipTitleData({});
    setSymbolData({});
    setAndroidData({});
    setPetData({});
    setVskillData({});
    setHskillData({});
    setHexaStatData({});
    setLinkSkillData({});
    setUnionData({});
    setUnionRaiderData({});
    setArtifactData({});
    setEquipmentPreset(null);
    setAbilityPreset(null);
    setNav("장비");
    setHyperOn(false);
    setEquipNumAtom(null);
  };
  return (
    <body
      className={
        darkThemeAtom ? "bg-gray-500 text-gray-50" : "bg-white text-black"
      }
    >
      {searchForm === true ? (
        <div className="bg-image w-[315px] h-[450px] 3sm:w-[370px] md:w-[760px] lg:w-[1019px] lg:h-[700px] flex flex-col mx-auto p-5">
          <h1 className="mx-auto mt-[70px] font-bold text-[30px]">
            메이플 캐릭터 검색
          </h1>
          <form
            className="mx-auto mt-[15px] space-x-3"
            onSubmit={handleSubmit(onValid)}
          >
            <input
              {...register("Name", { required: "캐릭터 이름을 입력해주세요" })}
              className="px-2 py-1 rounded-md shadow-md text-black w-[75%]"
              placeholder="캐릭터 이름을 입력해주세요"
              type="text"
            />
            <button className="shadow-md border-[1px] w-[20%] border-black  rounded-md px-2 py-1">
              검색
            </button>
          </form>
          {formState.errors.Name ? (
            <div className="mx-auto text-[14px] font-bold mt-[10px] text-red-500 ">
              {formState.errors.Name.message}
            </div>
          ) : null}
          {baseData.error ? (
            <div className="p-3">
              <p className="text-red-500 font-bold mt-[10px] text-[20px]">
                정보를 불러올수 없습니다.{" "}
              </p>
              <ul className="px-2 text-[15px]">
                <li>1. 없는 캐릭터</li>
                <li>2. 대소문자 구분 필요</li>
                <li className="whitespace-pre">
                  3. 23년 12월 21일 이후 접속 캐릭터가 아님.
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      ) : loading ? (
        <div className="bg-loading-image text-black w-[315px] 3sm:w-[370px] md:w-[760px] md:h-[450px] lg:w-[1019px] lg:h-[500px] flex flex-col items-center mx-auto mt-[50px] py-10">
          <span className="loader mx-auto my-auto"></span>
          <span className="relative bottom-[60px] md:bottom-[170px] lg:bottom-[200px] ">
            Loading...
          </span>
          <span className="relative md:bottom-[70px] lg:bottom-[140px]">
            {" "}
            정보를 가져오고 있습니다.
          </span>
        </div>
      ) : baseData.error ? (
        <div className="bg-notFound-image w-[315px] 3sm:w-[370px] md:w-[760px] lg:w-[1019px] mt-[50px] py-10 mx-auto p-3 rounded-md flex flex-col items-center">
          <p className="text-red-500 font-bold mt-[100px] text-[20px] lg:text-[30px]">
            정보를 불러올수 없습니다.{" "}
          </p>
          <ul className="px-2 text-[15px] lg:text-[25px] mb-[10px] text-black">
            <li>1. 없는 캐릭터</li>
            <li>2. 대소문자 구분 필요</li>
            <li className="whitespace-pre">
              3. 23년 12월 21일 이후 접속 캐릭터가 아님.
            </li>
          </ul>
          <button
            className="mb-[50px]  text-black"
            onClick={() => {
              setSearchForm(true), setBaseData({});
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div
          className={`w-[315px]  3sm:w-[370px] md:w-[760px] lg:w-[1019px] mx-auto mb-[50px] ${
            darkThemeAtom ? "bg-gray-500" : "bg-white"
          }`}
        >
          {/* 리셋버튼 / 테마 버튼 */}
          <div
            className={`fixed top-0 left-0 z-20 py-1 h-[40px] w-full ml-0 mr-0 ${
              darkThemeAtom ? "bg-gray-500" : "bg-white"
            }`}
          >
            <div className="flex justify-center items-center w-full space-x-5">
              <button className="" onClick={resetBtn}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </button>
              {darkThemeAtom === false ? (
                <button onClick={() => setDarkThemeAtom(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#74b9ff"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </button>
              ) : (
                <button onClick={() => setDarkThemeAtom(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#feca57"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
          {/* 기본정보 */}
          <div
            className={`w-[315px] md:w-[400px] p-3 mt-[40px] shadow-md rounded-md mx-auto flex space-x-5 ${
              darkThemeAtom ? "bg-gray-400 textShadow" : "bg-green-50"
            }`}
          >
            <img
              className="rounded-md"
              src={baseData.character_image}
              alt="chaImg"
            />
            <div className="flex flex-col md:text-[18px] ">
              <div className="flex items-center space-x-2">
                {/* 서버/이름/직업 */}
                <img src={`/image/server/${baseData.world_name}.webp`} />
                <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-1">
                  <span className={`font-bold md:text-[18px]`}>
                    {baseData.character_name}
                  </span>
                  <span className=" text-[12px] md:text-[14px]">
                    ({baseData.character_class})
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                {/* 레벨 */}
                <span>레벨 :</span>
                <span>
                  {baseData.character_level} ({baseData.character_exp_rate}%)
                </span>
              </div>
              <div className="flex space-x-2">
                {/* 길드 */}
                <span>길드 :</span>
                <span>
                  {baseData.character_guild_name === null
                    ? "길드없음"
                    : baseData.character_guild_name}
                </span>
              </div>
              <div className="flex space-x-2">
                {/* 인기도 */}
                <span>인기도 :</span>
                <span>{popData.popularity}</span>
              </div>
            </div>
          </div>
          {/* 네비 */}
          <div className="mt-[15px] p-1 pb-3 grid grid-cols-4 border-b-2 border-b-gray-200 lg:text-[20px]">
            <button
              className={`${
                nav === "장비"
                  ? `font-bold rounded-md shadow-md  transition-all p-1 ${
                      darkThemeAtom
                        ? "bg-purple-400 textShadow"
                        : "bg-green-300 "
                    }`
                  : "p-1"
              }`}
              onClick={() => setNav("장비")}
            >
              장비
            </button>
            <button
              className={`${
                nav === "스텟"
                  ? `font-bold rounded-md shadow-md  transition-all p-1 ${
                      darkThemeAtom
                        ? "bg-purple-400 textShadow"
                        : "bg-green-300"
                    }`
                  : ""
              }`}
              onClick={() => setNav("스텟")}
            >
              스텟
            </button>
            <button
              className={`${
                nav === "스킬/심볼"
                  ? `font-bold rounded-md shadow-md  transition-all p-1 ${
                      darkThemeAtom
                        ? "bg-purple-400 textShadow"
                        : "bg-green-300"
                    }`
                  : ""
              }`}
              onClick={() => setNav("스킬/심볼")}
            >
              스킬/심볼
            </button>
            <button
              className={`${
                nav === "유니온"
                  ? `font-bold rounded-md shadow-md  transition-all p-1 ${
                      darkThemeAtom
                        ? "bg-purple-400 textShadow"
                        : "bg-green-300"
                    }`
                  : ""
              }`}
              onClick={() => setNav("유니온")}
            >
              유니온
            </button>
          </div>
          {nav === "장비" ? (
            <div
              className={`mt-3  rounded-md p-2 lg:grid md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-2 lg:gap-2 ${
                darkThemeAtom ? "bg-gray-700" : "bg-blue-50"
              } `}
            >
              {/* 프리셋 버튼 */}
              {equipPresetData1.length !== 0 &&
              equipPresetData2.length !== 0 &&
              equipPresetData3.length !== 0 ? (
                <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4 mb-2 md:col-span-2 lg:col-span-2 px-2">
                  <button
                    className={`rounded-md shadow-sm p-1 ${
                      darkThemeAtom ? "bg-gray-500 textShadow" : "bg-gray-200"
                    } transition-all ${
                      equipmentPreset === 1
                        ? `font-bold scale-105 ${
                            darkThemeAtom
                              ? "bg-purple-500 textShadow"
                              : "bg-green-100 "
                          }`
                        : ""
                    }`}
                    onClick={() => {
                      if (equipmentPreset === 1) {
                        return;
                      }
                      setEquipmentPreset(1);
                      setEquipNumAtom(null);
                    }}
                  >
                    프리셋 1
                  </button>
                  <button
                    className={`rounded-md shadow-sm p-1 ${
                      darkThemeAtom ? "bg-gray-500 textShadow" : "bg-gray-200"
                    } transition-all ${
                      equipmentPreset === 2
                        ? `font-bold scale-105 ${
                            darkThemeAtom
                              ? "bg-purple-500 textShadow"
                              : "bg-green-100 "
                          }`
                        : ""
                    }`}
                    onClick={() => {
                      if (equipmentPreset === 2) {
                        return;
                      }
                      setEquipmentPreset(2);
                      setEquipNumAtom(null);
                    }}
                  >
                    프리셋 2
                  </button>
                  <button
                    className={`rounded-md shadow-sm p-1 ${
                      darkThemeAtom ? "bg-gray-500 textShadow" : "bg-gray-200"
                    } transition-all ${
                      equipmentPreset === 3
                        ? `font-bold scale-105 ${
                            darkThemeAtom
                              ? "bg-purple-500 textShadow"
                              : "bg-green-100 "
                          }`
                        : ""
                    }`}
                    onClick={() => {
                      if (equipmentPreset === 3) {
                        return;
                      }
                      setEquipmentPreset(3);
                      setEquipNumAtom(null);
                    }}
                  >
                    프리셋 3
                  </button>
                </div>
              ) : null}

              {/* 장비 설명창. */}
              <div
                className={`w-full min-h-[300px] bg-gray-50 rounded-md md:row-span-3 md:min-h-[715px] lg:row-span-3 lg:min-h-[720px]   ${
                  darkThemeAtom ? "bg-gray-500" : "bg-white"
                }`}
              >
                {equipNumAtom !== null ? (
                  equipNumAtom === "칭호" ? (
                    <div
                      className={`flex flex-col items-center py-3  ${
                        darkThemeAtom ? "textShadow" : ""
                      }`}
                    >
                      <div className={`text-[18px] font-bold`}>
                        {equipTitleData.title_name}
                      </div>
                      <img src={equipTitleData.title_icon} />
                      <div className="border-b border-gray-300 px-3 mt-2 w-full"></div>
                      <div className="flex flex-col py-3 px-2">
                        <span>{equipTitleData.title_description}</span>
                      </div>
                    </div>
                  ) : equipNumAtom === "안드" ? (
                    equipmentPreset === 1 ? (
                      <AndroidView
                        AndroidData={androidData.android_preset_1}
                        darkTheme={darkThemeAtom}
                      />
                    ) : equipmentPreset === 2 ? (
                      <AndroidView
                        AndroidData={
                          androidData.android_preset_2 === null
                            ? androidData.android_preset_1
                            : androidData.android_preset_2
                        }
                        darkTheme={darkThemeAtom}
                      />
                    ) : equipmentPreset === 3 ? (
                      <AndroidView
                        AndroidData={
                          androidData.android_preset_3 === null
                            ? androidData.android_preset_1
                            : androidData.android_preset_3
                        }
                        darkTheme={darkThemeAtom}
                      />
                    ) : (
                      <AndroidView AndroidData={androidData.android_preset_1} />
                    )
                  ) : equipNumAtom === "펫1" ? (
                    <PetView
                      petData={petData}
                      petNo="1"
                      darkTheme={darkThemeAtom}
                    />
                  ) : equipNumAtom === "펫2" ? (
                    <PetView
                      petData={petData}
                      petNo="2"
                      darkTheme={darkThemeAtom}
                    />
                  ) : equipNumAtom === "펫3" ? (
                    <PetView
                      petData={petData}
                      petNo="3"
                      darkTheme={darkThemeAtom}
                    />
                  ) : equipmentPreset === 1 ? (
                    <EquipView
                      equipPresetData={equipPresetData1[equipNumAtom]}
                      darkTheme={darkThemeAtom}
                    />
                  ) : equipmentPreset === 2 ? (
                    <EquipView
                      equipPresetData={equipPresetData2[equipNumAtom]}
                      darkTheme={darkThemeAtom}
                    />
                  ) : equipmentPreset === 3 ? (
                    <EquipView
                      equipPresetData={equipPresetData3[equipNumAtom]}
                      darkTheme={darkThemeAtom}
                    />
                  ) : (
                    <EquipView
                      equipPresetData={equipPresetNull[equipNumAtom]}
                      darkTheme={darkThemeAtom}
                    />
                  )
                ) : null}
              </div>
              {/* 실제 장비 칸 */}
              {equipPresetData1.length !== 0 &&
              equipPresetData2.length !== 0 &&
              equipPresetData3.length !== 0 ? (
                equipmentPreset === 1 ? (
                  <BottomEquipView
                    equipPresetData={equipPresetData1}
                    titleData={equipTitleData}
                    androidData={androidData.android_preset_1}
                  />
                ) : equipmentPreset === 2 ? (
                  <BottomEquipView
                    equipPresetData={equipPresetData2}
                    titleData={equipTitleData}
                    androidData={
                      androidData.android_preset_2 === null
                        ? androidData.android_preset_1
                        : androidData.android_preset_2
                    }
                  />
                ) : equipmentPreset === 3 ? (
                  <BottomEquipView
                    equipPresetData={equipPresetData3}
                    titleData={equipTitleData}
                    androidData={
                      androidData.android_preset_3 === null
                        ? androidData.android_preset_1
                        : androidData.android_preset_3
                    }
                  />
                ) : null
              ) : (
                <BottomEquipView
                  equipPresetData={equipPresetNull}
                  titleData={equipTitleData}
                  androidData={
                    androidData.android_name === null
                      ? null
                      : androidData.android_preset_1
                  }
                />
              )}
              {/* 펫 */}
              {petData ? (
                <div className="mt-2 bg-transparent grid grid-cols-3 items-center justify-center">
                  {petData.pet_1_name === null ? (
                    <div></div>
                  ) : (
                    <Petcomponents data={petData} petNo="1" />
                  )}
                  {petData.pet_2_name === null ? (
                    <div></div>
                  ) : (
                    <Petcomponents data={petData} petNo="2" />
                  )}
                  {petData.pet_3_name === null ? (
                    <div></div>
                  ) : (
                    <Petcomponents data={petData} petNo="3" />
                  )}
                </div>
              ) : null}
            </div>
          ) : null}
          {nav === "스텟" ? (
            statData.final_stat ? (
              <div
                className={`w-full space-y-2 mt-3 ${
                  darkThemeAtom ? "textShadow" : ""
                }`}
              >
                <h1
                  className={`p-1 font-bold text-[25px] mx-auto text-center rounded-md shadow-md ${
                    darkThemeAtom ? "bg-gray-700" : "bg-blue-200 "
                  }`}
                >
                  전투력 : {powerChanger(statData.final_stat[42].stat_value)}
                </h1>
                {/* 주스텟 */}
                <div
                  className={`grid grid-cols-2 gap-2 py-2  rounded-md shadow-md ${
                    darkThemeAtom ? "bg-gray-600" : "bg-blue-100"
                  }`}
                >
                  <StatBox
                    Name="HP"
                    Value={statData.final_stat[20].stat_value}
                    Percent="N"
                  />
                  <StatBox
                    Name="MP"
                    Value={statData.final_stat[21].stat_value}
                    Percent="N"
                  />
                  <StatBox
                    Name="STR"
                    Value={statData.final_stat[16].stat_value}
                    Percent="N"
                  />
                  <StatBox
                    Name="DEX"
                    Value={statData.final_stat[17].stat_value}
                    Percent="N"
                  />
                  <StatBox
                    Name="INT"
                    Value={statData.final_stat[18].stat_value}
                    Percent="N"
                  />
                  <StatBox
                    Name="LUK"
                    Value={statData.final_stat[19].stat_value}
                    Percent="N"
                  />
                </div>
                {/* 상세 스텟 */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 py-1 rounded-md shadow-md ${
                    darkThemeAtom ? "bg-gray-600" : "bg-blue-100"
                  }`}
                >
                  <StatBox
                    Name="최대 스텟 공격력"
                    Value={statData.final_stat[1].stat_value}
                    Percent="N"
                  />
                  <StatBox
                    Name="데미지"
                    Value={statData.final_stat[2].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="최종 데미지"
                    Value={statData.final_stat[4].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="보스 몬스터 데미지"
                    Value={statData.final_stat[3].stat_value}
                    Percent="Y"
                  />

                  <StatBox
                    Name="방어력 무시"
                    Value={statData.final_stat[5].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="일반 몬스터 데미지"
                    Value={statData.final_stat[32].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="공격력"
                    Value={statData.final_stat[40].stat_value}
                    Percent="N"
                  />
                  <StatBox
                    Name="마력"
                    Value={statData.final_stat[41].stat_value}
                    Percent="N"
                  />
                  <StatBox
                    Name="크리티컬 확률"
                    Value={statData.final_stat[6].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="크리티컬 데미지"
                    Value={statData.final_stat[7].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="재사용 대기시간 감소"
                    Value={`${statData.final_stat[33].stat_value}초 / ${statData.final_stat[34].stat_value}`}
                    Percent="Y"
                  />
                  <StatBox
                    Name="재사용 대기시간 미적용"
                    Value={statData.final_stat[35].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="버프 지속시간"
                    Value={statData.final_stat[30].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="속성 내성 무시"
                    Value={statData.final_stat[36].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="상태이상 추가 데미지"
                    Value={statData.final_stat[37].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="소환수 지속시간 증가"
                    Value={statData.final_stat[43].stat_value}
                    Percent="Y"
                  />
                </div>
                {/* 잡다 스텟 */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 py-1 rounded-md shadow-md ${
                    darkThemeAtom ? "bg-gray-600" : "bg-blue-100"
                  }`}
                >
                  <StatBox
                    Name="메소 획득량"
                    Value={statData.final_stat[29].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="아이템 드롭률"
                    Value={statData.final_stat[28].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="추가 경험치 획득"
                    Value={statData.final_stat[39].stat_value}
                    Percent="Y"
                  />
                  <StatBox
                    Name="스타포스"
                    Value={statData.final_stat[13].stat_value}
                    Percent="N"
                  />

                  <StatBox
                    Name="아케인포스"
                    Value={statData.final_stat[14].stat_value}
                    Percent="N"
                  />

                  <StatBox
                    Name="어센틱포스"
                    Value={statData.final_stat[15].stat_value}
                    Percent="N"
                  />
                  <StatBox
                    Name="상태이상 내성"
                    Value={statData.final_stat[8].stat_value}
                    Percent="N"
                  />
                  <StatBox
                    Name="공격 속도"
                    Value={`${statData.final_stat[31].stat_value}단계`}
                    Percent="N"
                  />
                </div>
                {/* 어빌리티 */}
                <div
                  className={` p-2 rounded-md shadow-sm ${
                    darkThemeAtom ? "bg-gray-700" : "bg-blue-200"
                  }`}
                >
                  <div className="grid grid-cols-2">
                    <h1 className="text-[25px] md:text-[30px] lg:text-[35px] text-center">
                      어빌리티
                    </h1>
                    {/* 프리셋 */}
                    {abilityData.ability_preset_1 === null ? null : (
                      <div className="grid grid-cols-3 gap-2 lg:gap-4 py-2 px-1 mb-1">
                        <button
                          onClick={() => setAbilityPreset(1)}
                          className={`px-1 rounded-lg text-[15px] shadow-md ${
                            abilityPreset === 1
                              ? `font-bold scale-110 ${
                                  darkThemeAtom
                                    ? "bg-purple-500"
                                    : "bg-green-100 "
                                }`
                              : ` ${
                                  darkThemeAtom ? "bg-gray-500" : "bg-gray-200 "
                                }`
                          }  transition-all`}
                        >
                          1
                        </button>
                        <button
                          onClick={() => setAbilityPreset(2)}
                          className={` px-1 rounded-lg text-[15px] shadow-md ${
                            abilityPreset === 2
                              ? `font-bold scale-110 ${
                                  darkThemeAtom
                                    ? "bg-purple-500"
                                    : "bg-green-100 "
                                }`
                              : ` ${
                                  darkThemeAtom ? "bg-gray-500" : "bg-gray-200 "
                                }`
                          }  transition-all`}
                        >
                          2
                        </button>
                        <button
                          onClick={() => setAbilityPreset(3)}
                          className={` px-1 rounded-lg text-[15px] shadow-md ${
                            abilityPreset === 3
                              ? `font-bold scale-110 ${
                                  darkThemeAtom
                                    ? "bg-purple-500"
                                    : "bg-green-100 "
                                }`
                              : ` ${
                                  darkThemeAtom ? "bg-gray-500" : "bg-gray-200 "
                                }`
                          }  transition-all`}
                        >
                          3
                        </button>
                      </div>
                    )}
                  </div>
                  {/* 어빌 능력 표시 */}
                  <div
                    className={`space-y-1 lg:space-y-2 lg:mt-2 ${
                      darkThemeAtom ? "textShadowNone text-black" : ""
                    } `}
                  >
                    {abilityPreset === 1
                      ? abilityData.ability_preset_1.ability_info.map(
                          (item) => (
                            <div
                              key={item.ability_no}
                              className={`text-center rounded-md shadow-sm p-1 px-2 text-[14px] md:w-[75%] md:text-[16px] lg:w-[50%] lg:text-[19px] mx-auto ${
                                item.ability_grade === "레전드리"
                                  ? "bg-green-300"
                                  : item.ability_grade === "유니크"
                                  ? "bg-yellow-200"
                                  : item.ability_grade === "에픽"
                                  ? "bg-purple-400"
                                  : "bg-blue-500"
                              } 
                             `}
                            >
                              {item.ability_value}
                            </div>
                          )
                        )
                      : abilityPreset === 2
                      ? abilityData.ability_preset_2.ability_info.map(
                          (item) => (
                            <div
                              key={item.ability_no}
                              className={`text-center rounded-md shadow-sm p-1 px-2 text-[14px] md:w-[75%] md:text-[16px] lg:w-[50%] lg:text-[19px] mx-auto ${
                                item.ability_grade === "레전드리"
                                  ? "bg-green-300"
                                  : item.ability_grade === "유니크"
                                  ? "bg-yellow-200"
                                  : item.ability_grade === "에픽"
                                  ? "bg-purple-400"
                                  : "bg-blue-500"
                              } `}
                            >
                              {item.ability_value}
                            </div>
                          )
                        )
                      : abilityPreset === 3
                      ? abilityData.ability_preset_3.ability_info.map(
                          (item) => (
                            <div
                              key={item.ability_no}
                              className={`text-center rounded-md shadow-sm p-1 px-2 text-[14px] md:w-[75%] md:text-[16px] lg:w-[50%] lg:text-[19px] mx-auto ${
                                item.ability_grade === "레전드리"
                                  ? "bg-green-300"
                                  : item.ability_grade === "유니크"
                                  ? "bg-yellow-200"
                                  : item.ability_grade === "에픽"
                                  ? "bg-purple-400"
                                  : "bg-blue-500"
                              }`}
                            >
                              {item.ability_value}
                            </div>
                          )
                        )
                      : abilityData.ability_info.map((item) => (
                          <div
                            key={item.ability_no}
                            className={`text-center rounded-md shadow-sm p-1 px-2 text-[14px] lg:w-[50%] lg:text-[19px] mx-auto ${
                              item.ability_grade === "레전드리"
                                ? "bg-green-300"
                                : item.ability_grade === "유니크"
                                ? "bg-yellow-200"
                                : item.ability_grade === "에픽"
                                ? "bg-purple-400"
                                : "bg-blue-500"
                            }`}
                          >
                            {item.ability_value}
                          </div>
                        ))}
                  </div>
                  {/* 잔여 명성치 */}
                  <div className="mt-2 text-[14px]  md:w-[75%] md:text-[16px] lg:w-[50%] lg:text-[20px] mx-auto">
                    <StatBox
                      Name="잔여 명성치"
                      Value={abilityData.remain_fame}
                      Percent="N"
                    />
                  </div>
                </div>
                {/* 하이퍼 스텟 */}
                {hyperOn === true ? (
                  <div className="space-y-2">
                    <div
                      className={` rounded-md shadow-sm text-center font-bold text-[20px] hover:cursor-pointer   ${
                        darkThemeAtom ? "bg-purple-400" : "bg-green-100"
                      }`}
                      onClick={() => setHyperOn((prev) => !prev)}
                    >
                      <div className="p-1 px-3">하이퍼 스텟 닫기</div>
                    </div>
                    {hyperStatData ? (
                      <div
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 py-1  rounded-md shadow-md   ${
                          darkThemeAtom ? "bg-gray-600" : "bg-blue-100"
                        }`}
                      >
                        {hyperPreset === 1 ? (
                          <>
                            {hyperStatData.hyper_stat_preset_1.map(
                              (item, index) => (
                                <StatBox
                                  key={index}
                                  Name={`${item.stat_type}`}
                                  Value={`Lv. ${item.stat_level}`}
                                  Percent="N"
                                />
                              )
                            )}
                          </>
                        ) : hyperPreset === 2 ? (
                          <>
                            {hyperStatData.hyper_stat_preset_2.map(
                              (item, index) => (
                                <StatBox
                                  key={index}
                                  Name={`${item.stat_type}`}
                                  Value={`Lv. ${item.stat_level}`}
                                  Percent="N"
                                />
                              )
                            )}
                          </>
                        ) : (
                          <>
                            {hyperStatData.hyper_stat_preset_3.map(
                              (item, index) => (
                                <StatBox
                                  key={index}
                                  Name={`${item.stat_type}`}
                                  Value={`Lv. ${item.stat_level}`}
                                  Percent="N"
                                />
                              )
                            )}
                          </>
                        )}

                        {/* 잔여P / 프리셋 */}
                        <div className="grid grid-cols-2 p-2 items-center text-center">
                          <div>
                            <span className="font-bold">잔여 포인트 </span>
                            <span>
                              {hyperPreset === 1
                                ? hyperStatData.hyper_stat_preset_1_remain_point
                                : hyperPreset === 2
                                ? hyperStatData.hyper_stat_preset_2_remain_point
                                : hyperStatData.hyper_stat_preset_3_remain_point}
                            </span>
                          </div>

                          <div className="flex flex-col space-y-1">
                            <h3>프리셋</h3>
                            <div className=" space-x-3">
                              <button
                                onClick={() => setHyperPreset(1)}
                                className={`w-[35px] p-1 rounded-lg text-[15px] shadow-md ${
                                  hyperPreset === 1
                                    ? ` font-bold scale-110 ${
                                        darkThemeAtom
                                          ? "bg-purple-500"
                                          : "bg-green-100"
                                      }`
                                    : `${
                                        darkThemeAtom
                                          ? "bg-gray-500"
                                          : "bg-gray-200"
                                      }`
                                }  transition-all`}
                              >
                                1
                              </button>
                              <button
                                onClick={() => setHyperPreset(2)}
                                className={`w-[35px] p-1 rounded-lg text-[15px] shadow-md ${
                                  hyperPreset === 2
                                    ? ` font-bold scale-110 ${
                                        darkThemeAtom
                                          ? "bg-purple-500"
                                          : "bg-green-100"
                                      }`
                                    : `${
                                        darkThemeAtom
                                          ? "bg-gray-500"
                                          : "bg-gray-200"
                                      }`
                                }  transition-all`}
                              >
                                2
                              </button>
                              <button
                                onClick={() => setHyperPreset(3)}
                                className={`w-[35px] p-1 rounded-lg text-[15px] shadow-md ${
                                  hyperPreset === 3
                                    ? ` font-bold scale-110 ${
                                        darkThemeAtom
                                          ? "bg-purple-500"
                                          : "bg-green-100"
                                      }`
                                    : `${
                                        darkThemeAtom
                                          ? "bg-gray-500"
                                          : "bg-gray-200"
                                      }`
                                }  transition-all`}
                              >
                                3
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div
                    className={` rounded-md shadow-sm text-center font-bold text-[20px] hover:cursor-pointer   ${
                      darkThemeAtom ? "bg-purple-400" : "bg-green-100"
                    }`}
                    onClick={() => setHyperOn((prev) => !prev)}
                  >
                    <div className="p-1 px-3">하이퍼 스텟 열기</div>
                  </div>
                )}
              </div>
            ) : null
          ) : null}
          {nav === "스킬/심볼" ? (
            <div
              className={` rounded-md shadow-md py-3 mt-2 mb-[100px] ${
                darkThemeAtom ? "bg-gray-700" : "bg-blue-50"
              } `}
            >
              {/* 6차 */}
              {HskillData.character_skill.length !== 0 ? (
                <HexaSkill
                  Hdata={HskillData.character_skill}
                  Hstat={HexaStatData.character_hexa_stat_core[0]}
                  darkTheme={darkThemeAtom}
                />
              ) : null}
              {/* 5차 */}
              {VskillData.character_skill.length !== 0 ? (
                <Vmatrix VData={VskillData} darkTheme={darkThemeAtom} />
              ) : null}
              {/* 심볼 */}
              {symbolData.character_class && symbolData.symbol.length !== 0 ? (
                <div className={`mt-3 ${darkThemeAtom ? "textShadow" : ""}`}>
                  <div className={`flex flex-col items-center `}>
                    <span
                      className={`text-center text-[20px] md:text-[25px] lg:text-[30px]`}
                    >
                      심볼
                    </span>
                    <div className="space-x-3 text-[16px] md:text-[18px] lg:text-[20px]">
                      <span>
                        ARC : +{SymbolForcePlus(symbolData.symbol.slice(0, 6))}
                      </span>
                      <span>
                        주스텟 : +
                        {SymbolStatPlus(
                          symbolData.symbol.slice(0, 6),
                          baseData.character_class
                        )}
                      </span>
                    </div>
                    <div className="space-x-3 text-[16px] md:text-[18px] lg:text-[20px]">
                      <span>
                        AUT : +{SymbolForcePlus(symbolData.symbol.slice(6))}
                      </span>
                      <span>
                        주스텟 : +
                        {SymbolStatPlus(
                          symbolData.symbol.slice(6),
                          baseData.character_class
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-2 px-2">
                    {/* 아케인 */}
                    {symbolData.symbol.slice(0, 6).map((item) => {
                      const symbolP = Math.round(
                        (item.symbol_growth_count /
                          item.symbol_require_growth_count) *
                          100
                      );
                      return (
                        <div
                          className={`flex flex-col  rounded-md shadow-md my-1 mx-1 py-1   ${
                            darkThemeAtom ? "bg-gray-400" : "bg-purple-100"
                          }`}
                          key={item.symbol_name}
                        >
                          <span className="text-center">
                            {item.symbol_name.slice(8)}
                          </span>
                          <div className="border-b border-gray-300 px-2"></div>
                          <div className="flex py-1 px-3 justify-between lg:justify-normal lg:space-x-5">
                            <div className="flex w-[30%]  items-center justify-center">
                              <img
                                className="scale-125 lg:w-[60%] lg:scale-100"
                                src={item.symbol_icon}
                              ></img>
                            </div>
                            <div className="flex flex-col w-[60%] text-[12px] lg:text-[16px] ">
                              <span className=" ">Lv. {item.symbol_level}</span>
                              <span className="whitespace-pre ">
                                주스텟 :{" "}
                                {ForceStat(item, baseData.character_class)}
                              </span>
                              <span className="">
                                포스 : {item.symbol_force}
                              </span>
                            </div>
                          </div>
                          <div
                            className={`w-[90%] relative  mx-auto rounded-md p-1 transition-all  ${
                              darkThemeAtom ? "bg-gray-200" : "bg-gray-300"
                            } `}
                          >
                            <span
                              className={`${
                                item.symbol_level === 20
                                  ? "w-[100%]"
                                  : symbolP > 100
                                  ? "!w-[100%]"
                                  : `symbolBar-${symbolP}`
                              } absolute bg-gray-700 p-1 rounded-md top-0 left-0 bottom-0 `}
                            ></span>
                          </div>
                          <span className="text-center text-[13px] lg:text-[16px]">
                            성장 :{" "}
                            {item.symbol_level === 20
                              ? "Max"
                              : item.symbol_growth_count +
                                "/" +
                                item.symbol_require_growth_count}
                          </span>
                        </div>
                      );
                    })}
                    {/* 어센틱 */}
                    {symbolData.symbol.slice(6).map((item) => {
                      const symbolP = Math.round(
                        (item.symbol_growth_count /
                          item.symbol_require_growth_count) *
                          100
                      );
                      return (
                        <div
                          className={`flex flex-col  rounded-md shadow-md my-1 mx-1 py-1 ${
                            darkThemeAtom ? "bg-gray-500" : "bg-blue-200"
                          }`}
                          key={item.symbol_name}
                        >
                          <span className="text-center">
                            {item.symbol_name.slice(8)}
                          </span>
                          <div className="border-b border-gray-300 px-2"></div>
                          <div className="flex py-1 px-3 justify-between lg:justify-normal lg:space-x-5">
                            <div className="flex w-[30%]  items-center justify-center">
                              <img
                                className="scale-125 lg:w-[60%] lg:scale-100"
                                src={item.symbol_icon}
                              ></img>
                            </div>
                            <div className="flex flex-col w-[60%] text-[12px] lg:text-[16px] ">
                              <span className=" ">Lv. {item.symbol_level}</span>
                              <span className="whitespace-pre ">
                                주스텟 :{" "}
                                {ForceStat(item, baseData.character_class)}
                              </span>
                              <span className="">
                                포스 : {item.symbol_force}
                              </span>
                            </div>
                          </div>
                          <div
                            className={`w-[90%] relative mx-auto rounded-md p-1 transition-all ${
                              darkThemeAtom ? "bg-gray-200" : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`${
                                item.symbol_level === 11
                                  ? "w-[100%]"
                                  : symbolP > 100
                                  ? "!w-[100%]"
                                  : `symbolBar-${symbolP}`
                              } absolute bg-gray-700 p-1 rounded-md top-0 left-0 bottom-0 `}
                            ></span>
                          </div>
                          <span className="text-center text-[13px] lg:text-[16px]">
                            성장 :{" "}
                            {item.symbol_level === 11
                              ? "Max"
                              : item.symbol_growth_count +
                                "/" +
                                item.symbol_require_growth_count}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
              {/* 링크 */}
              {linkSkillData ? (
                <LinkSkill Data={linkSkillData} darkTheme={darkThemeAtom} />
              ) : null}
            </div>
          ) : null}
          {nav === "유니온" ? (
            unionData.length !== 0 &&
            unionRaiderData.length !== 0 &&
            artifactData.length !== 0 ? (
              <div className={`mt-3 ${darkThemeAtom ? "textShadow" : ""}`}>
                <UnionRaider
                  data={unionData}
                  raiderData={unionRaiderData}
                  darkTheme={darkThemeAtom}
                />
                <Artifact data={artifactData} darkTheme={darkThemeAtom} />
              </div>
            ) : null
          ) : null}
        </div>
      )}
    </body>
  );
}
