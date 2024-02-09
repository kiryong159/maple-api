"use client";
import fetchData from "@/pages/api/fetchData";
import getocid from "@/pages/api/ocid";
import powerChanger from "@/pages/api/power";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ForceStat, SymbolForcePlus, SymbolStatPlus } from "./utils/utils";
import {
  baseData,
  ocid,
  popData,
  statData,
  hyperStatData,
  abilityData,
  equipPresetData1,
  equipPresetData2,
  equipPresetData3,
  equipTitleData,
  symbolData,
  androidData,
  petData,
  VskillData,
} from "./components/localDb";
import StatBox from "./components/StatBox";
import { useRecoilState } from "recoil";
import { EquipAtom } from "./atom";

import EquipView from "./components/EquipView";
import BottomEquipView from "./components/BottomEquipVIew";
import { equipArrChanger } from "@/pages/api/equipArrChanger";
import AndroidView from "./components/AndroidView";
import PetView from "./components/PetView";
import Vmatrix from "./components/Vmatrix";

export default function HomeClient({ Apikey }) {
  /*   const [baseData, setBaseData] = useState({});
  const [popData, setPopData] = useState({});
  const [statData, setStatData] = useState({});
  const [hyperStatData, setHyperStatData] = useState({});
  const [abilityData, setAbilityData] = useState({});
  const [equipPresetData1, setEquipPresetData1] = useState([]);
  const [equipPresetData2, setEquipPresetData2] = useState([]);
  const [equipPresetData3, setEquipPresetData3] = useState([]);
  const [equipTitleData, setEquipTitleData] = useState({});
  const [symbolData, setSymbolData] = useState({});
  const [androidData, setAndroidData] = useState({});
  const [petData, setPetData] = useState({}); */

  const [equipmentPreset, setEquipmentPreset] = useState(1);
  const [abilityPreset, setAbilityPreset] = useState(1);
  const [nav, setNav] = useState("장비");
  const [hyperOn, setHyperOn] = useState(false);
  const [hyperPreset, setHyperPreset] = useState(1);
  const { register, handleSubmit, formState } = useForm();
  const [equipNumAtom, setEquipNumAtom] = useRecoilState(EquipAtom);
  const [loading, setLoading] = useState(false);
  const [searchForm, setSearchForm] = useState(false);

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const days = String(date.getDate() - 1).padStart(2, "0");
  const combineDay = `${year}-${month}-${days}`;

  /*   console.log("베이스", baseData);
  console.log("인기도", popData);
  console.log("스텟", statData);
  console.log("하이퍼스텟", hyperStatData);
  console.log("어빌리티", abilityData);
  console.log("장비프리셋1", equipPresetData1);
  console.log("장비프리셋2", equipPresetData2);
  console.log("장비프리셋3", equipPresetData3);
  console.log("칭호", equipTitleData); 
  console.log("심볼", symbolData, symbolData2); 
  console.log("안드", androidData);
  console.log("펫", petData);
  console.log("V", VskillData);*/

  const onValid = async (data) => {
    setLoading(true);
    setSearchForm(false);
    setEquipNumAtom(null);
    const Name = data.Name;
    const ocid = await getocid(Name, Apikey);
    const baseInfo = await fetchData("basic", Apikey, ocid, combineDay).then(
      (r) => setBaseData(r)
    );
    const pop = await fetchData("popularity", Apikey, ocid, combineDay).then(
      (r) => setPopData(r)
    );
    const stat = await fetchData("stat", Apikey, ocid, combineDay).then((r) =>
      setStatData(r)
    );
    const hyperStat = await fetchData(
      "hyper-stat",
      Apikey,
      ocid,
      combineDay
    ).then((r) => setHyperStatData(r));

    const ability = await fetchData("ability", Apikey, ocid, combineDay).then(
      (r) => {
        setAbilityData(r), setAbilityPreset(Number(r.preset_no));
      }
    );
    const getEquipment = await fetchData(
      "item-equipment",
      Apikey,
      ocid,
      combineDay
    ).then((r) => {
      setEquipPresetData1(equipArrChanger(r.item_equipment_preset_1));
      setEquipPresetData2(equipArrChanger(r.item_equipment_preset_2));
      setEquipPresetData3(equipArrChanger(r.item_equipment_preset_3));
      setEquipTitleData(r.title);
      setEquipmentPreset(Number(r.preset_no));
    });
    const getSymbol = await fetchData(
      "symbol-equipment",
      Apikey,
      ocid,
      combineDay
    ).then((r) => {
      setSymbolData(r);
    });
    const getAndroid = await fetchData(
      "android-equipment",
      Apikey,
      ocid,
      combineDay
    ).then((r) => {
      setAndroidData(r);
    });
    const getPet = await fetchData(
      "pet-equipment",
      Apikey,
      ocid,
      combineDay
    ).then((r) => {
      setPetData(r);
    });
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
    ]).then(setLoading(false));
  };

  const 딸깍 = async () => {};

  return (
    <>
      {searchForm === true ? (
        <div className="bg-image w-[315px] h-[450px] flex flex-col mx-auto p-5">
          <h1 className="mx-auto mt-[70px] font-bold text-[30px]">
            메이플 캐릭터 검색 맛쪼니
          </h1>
          <form
            className="mx-auto mt-[15px] space-x-3"
            onSubmit={handleSubmit(onValid)}
          >
            <input
              {...register("Name", { required: "캐릭터 이름을 입력해주세요" })}
              className="px-2 py-1 rounded-md shadow-md"
              placeholder="캐릭터 이름을 입력해주세요"
              type="text"
            />
            <button className="shadow-md  rounded-md px-2 py-1">검색</button>
          </form>
          {formState.errors.Name ? (
            <div className="mx-auto text-[12px] font-bold mt-[10px] text-red-500">
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
        <div className="bg-loading-image w-[315px] flex flex-col items-center mx-auto mt-[50px] py-10">
          <span className="loader mx-auto"></span>
          <span className="relative bottom-[60px]">Loading...</span>
          <span className=""> 정보를 가져오고 있습니다.</span>
        </div>
      ) : (
        <div className="max-w-[315px] w-[315px] mx-auto mb-[50px]">
          <button onClick={딸깍}>딸깍</button>
          {/* 기본정보 */}
          <div className="w-[315px] p-3 mt-[50px] bg-gray-200 mx-auto flex space-x-5">
            <img
              className="rounded-md shadow-sm"
              src={baseData.character_image}
              alt="chaImg"
            />
            <div className="flex flex-col ">
              <div className="flex items-center space-x-2">
                {/* 서버/이름/직업 */}
                <img src={`/image/server/${baseData.world_name}.webp`} />
                <h1 className="font-bold text-[20px]">
                  {baseData.character_name}
                  <span
                    className={
                      baseData.character_class.length > 7
                        ? "text-[13px]"
                        : baseData.character_class.length > 5
                        ? "text-[17px]"
                        : "text-[20px]"
                    }
                  >
                    ({baseData.character_class})
                  </span>
                </h1>
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
                <span>{baseData.character_guild_name}</span>
              </div>
              <div className="flex space-x-2">
                {/* 인기도 */}
                <span>인기도 :</span>
                <span>{popData.popularity}</span>
              </div>
            </div>
          </div>
          {/* 네비 */}
          <div className="mt-[15px] p-1 pb-3 grid grid-cols-5 border-b-2 border-b-gray-200">
            <button
              className={`${
                nav === "장비"
                  ? " font-bold rounded-md shadow-md bg-green-300 transition-all p-1 "
                  : "p-1"
              }`}
              onClick={() => setNav("장비")}
            >
              장비
            </button>
            <button
              className={`${
                nav === "스텟"
                  ? " font-bold rounded-md shadow-md bg-green-300 transition-all p-1"
                  : ""
              }`}
              onClick={() => setNav("스텟")}
            >
              스텟
            </button>
            <button
              className={`${
                nav === "스킬/심볼"
                  ? " font-bold rounded-md shadow-md bg-green-300 transition-all text-[16px]"
                  : ""
              }`}
              onClick={() => setNav("스킬/심볼")}
            >
              스킬/심볼
            </button>
            <button
              className={`${
                nav === "등등"
                  ? " font-bold rounded-md shadow-md bg-green-300 transition-all p-1"
                  : ""
              }`}
              onClick={() => setNav("등등")}
            >
              등등
            </button>
            <button
              className={`${
                nav === "기타"
                  ? " font-bold rounded-md shadow-md bg-green-300 transition-all p-1"
                  : ""
              }`}
              onClick={() => setNav("기타")}
            >
              기타
            </button>
          </div>
          {nav === "장비" ? (
            <div className="mt-3 bg-gray-400 rounded-md shadow-md p-2 ">
              {/* 프리셋 버튼 */}
              <div className="grid grid-cols-3 gap-2 mb-2">
                <button
                  className={`rounded-md shadow-sm p-1 bg-gray-200 transition-all ${
                    equipmentPreset === 1
                      ? " bg-green-100 font-bold scale-105"
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
                  className={`rounded-md shadow-sm p-1 bg-gray-200 transition-all ${
                    equipmentPreset === 2
                      ? " bg-green-100 font-bold scale-105"
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
                  className={`rounded-md shadow-sm p-1 bg-gray-200 transition-all ${
                    equipmentPreset === 3
                      ? " bg-green-100 font-bold scale-105"
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
              <div className="w-full min-h-[300px] bg-gray-200 rounded-md">
                {/* 장비 설명창. */}
                {equipNumAtom !== null ? (
                  equipNumAtom === "칭호" ? (
                    <div className="flex flex-col items-center py-3">
                      <div className="text-[18px] font-bold">
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
                      <AndroidView AndroidData={androidData.android_preset_1} />
                    ) : equipmentPreset === 2 ? (
                      <AndroidView
                        AndroidData={
                          androidData.android_preset_2 === null
                            ? androidData.android_preset_1
                            : androidData.android_preset_2
                        }
                      />
                    ) : equipmentPreset === 3 ? (
                      <AndroidView
                        AndroidData={
                          androidData.android_preset_3 === null
                            ? androidData.android_preset_1
                            : androidData.android_preset_3
                        }
                      />
                    ) : null
                  ) : equipNumAtom === "펫1" ? (
                    <PetView petData={petData} petNo="1" />
                  ) : equipNumAtom === "펫2" ? (
                    <PetView petData={petData} petNo="2" />
                  ) : equipNumAtom === "펫3" ? (
                    <PetView petData={petData} petNo="3" />
                  ) : equipmentPreset === 1 ? (
                    <EquipView
                      equipPresetData={equipPresetData1[equipNumAtom]}
                    />
                  ) : equipmentPreset === 2 ? (
                    <EquipView
                      equipPresetData={equipPresetData2[equipNumAtom]}
                    />
                  ) : equipmentPreset === 3 ? (
                    <EquipView
                      equipPresetData={equipPresetData3[equipNumAtom]}
                    />
                  ) : null
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
              ) : null}
              {/* 없으면 div없애야함 */}
              {petData ? (
                <div className="mt-2 bg-transparent grid grid-cols-3 items-center justify-center">
                  {petData.pet_1_name === null ? (
                    <div></div>
                  ) : (
                    <div className="p-2 border border-gray-300 w-[50%] mx-auto rounded-md shadow-md">
                      <img
                        className="w-[100%] mx-auto hover:cursor-pointer"
                        onClick={() => setEquipNumAtom("펫1")}
                        src={petData.pet_1_appearance_icon}
                      />
                    </div>
                  )}
                  {petData.pet_2_name === null ? (
                    <div></div>
                  ) : (
                    <div className="p-2 border border-gray-300 w-[50%] mx-auto rounded-md shadow-md">
                      <img
                        className="w-[100%] mx-auto hover:cursor-pointer"
                        onClick={() => setEquipNumAtom("펫2")}
                        src={petData.pet_2_appearance_icon}
                      />
                    </div>
                  )}
                  {petData.pet_3_name === null ? (
                    <div></div>
                  ) : (
                    <div className="p-2 border border-gray-300 w-[50%] mx-auto rounded-md shadow-md">
                      <img
                        className="w-[100%] mx-auto hover:cursor-pointer"
                        onClick={() => setEquipNumAtom("펫3")}
                        src={petData.pet_3_appearance_icon}
                      />
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          ) : null}
          {nav === "스텟" ? (
            statData.final_stat ? (
              <div className="w-full space-y-2 mt-3">
                <h1 className="p-1 bg-blue-200 font-bold text-[25px] mx-auto text-center rounded-md shadow-md">
                  전투력 : {powerChanger(statData.final_stat[42].stat_value)}
                </h1>
                {/* 주스텟 */}
                <div className="grid grid-cols-2 gap-2 py-2 bg-blue-50 rounded-md shadow-md">
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
                <div className="grid grid-cols-1 gap-2 py-1 bg-blue-100 rounded-md shadow-md">
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
                <div className="grid grid-cols-1 gap-2 py-1 bg-blue-100 rounded-md shadow-md">
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
                <div className="bg-blue-200 p-2 rounded-md shadow-sm">
                  <div className="grid grid-cols-2 ">
                    <h1 className="text-[25px] text-center">어빌리티</h1>
                    {/* 프리셋 */}
                    <div className="grid grid-cols-3 gap-2 py-2 px-1 mb-1">
                      <button
                        onClick={() => setAbilityPreset(1)}
                        className={`px-1 rounded-lg text-[15px] shadow-md ${
                          abilityPreset === 1
                            ? "bg-green-50 font-bold scale-110"
                            : ""
                        }  transition-all`}
                      >
                        1
                      </button>
                      <button
                        onClick={() => setAbilityPreset(2)}
                        className={` px-1 rounded-lg text-[15px] shadow-md ${
                          abilityPreset === 2
                            ? "bg-green-50 font-bold scale-110"
                            : ""
                        }  transition-all`}
                      >
                        2
                      </button>
                      <button
                        onClick={() => setAbilityPreset(3)}
                        className={` px-1 rounded-lg text-[15px] shadow-md ${
                          abilityPreset === 3
                            ? "bg-green-50 font-bold scale-110"
                            : ""
                        }  transition-all`}
                      >
                        3
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {abilityPreset === 1
                      ? abilityData.ability_preset_1.ability_info.map(
                          (item) => (
                            <div
                              key={item.ability_no}
                              className={`text-center rounded-md shadow-sm p-1 px-2 text-[14px] ${
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
                              className={`text-center rounded-md shadow-sm p-1 px-2 text-[14px] ${
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
                      : abilityData.ability_preset_3.ability_info.map(
                          (item) => (
                            <div
                              key={item.ability_no}
                              className={`text-center rounded-md shadow-sm p-1 px-2 text-[14px] ${
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
                        )}
                  </div>
                  <div className="mt-2">
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
                      className="bg-green-100 rounded-md shadow-sm text-center font-bold text-[20px] hover:cursor-pointer"
                      onClick={() => setHyperOn((prev) => !prev)}
                    >
                      <div className="p-1 px-3">하이퍼 스텟 닫기</div>
                    </div>
                    {hyperStatData ? (
                      <div className="grid grid-cols-1 gap-2 py-1 bg-blue-100 rounded-md shadow-md">
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
                                    ? "bg-green-50 font-bold scale-110"
                                    : ""
                                }  transition-all`}
                              >
                                1
                              </button>
                              <button
                                onClick={() => setHyperPreset(2)}
                                className={`w-[35px] p-1 rounded-lg text-[15px] shadow-md ${
                                  hyperPreset === 2
                                    ? "bg-green-50 font-bold scale-110"
                                    : ""
                                }  transition-all`}
                              >
                                2
                              </button>
                              <button
                                onClick={() => setHyperPreset(3)}
                                className={`w-[35px] p-1 rounded-lg text-[15px] shadow-md ${
                                  hyperPreset === 3
                                    ? "bg-green-50 font-bold scale-110"
                                    : ""
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
                    className="bg-green-100 rounded-md shadow-sm text-center font-bold text-[20px] hover:cursor-pointer"
                    onClick={() => setHyperOn((prev) => !prev)}
                  >
                    <div className="p-1 px-3">하이퍼 스텟 열기</div>
                  </div>
                )}
              </div>
            ) : null
          ) : null}
          {nav === "스킬/심볼" ? (
            <div className="bg-green-50 rounded-md shadow-md py-3 mt-2">
              {/* 스킬 넣으면 됨*/}
              {VskillData ? <Vmatrix VData={VskillData} /> : null}
              {symbolData.character_class ? (
                <div>
                  <div className="flex flex-col items-center">
                    <div className="space-x-3">
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
                    <div className="space-x-3">
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
                  <div className="grid grid-cols-2 mt-2">
                    {symbolData.symbol.slice(0, 6).map((item) => (
                      <div
                        className="flex flex-col bg-purple-50 rounded-md shadow-sm my-1 mx-1 py-1"
                        key={item.symbol_name}
                      >
                        <span className="text-center">
                          {item.symbol_name.slice(8)}
                        </span>
                        <div className="border-b border-gray-300 px-2"></div>
                        <div className="flex py-1 px-3 justify-between">
                          <div className="flex w-[30%] items-center">
                            <img
                              className="scale-125"
                              src={item.symbol_icon}
                            ></img>
                          </div>
                          <div className="flex flex-col w-[60%] text-[13px] ">
                            <span className="text-[12px]">
                              Lv. {item.symbol_level}
                            </span>
                            <span className="whitespace-pre text-[12px]">
                              주스텟 :{" "}
                              {ForceStat(item, baseData.character_class)}
                            </span>
                            <span className="text-[12px]">
                              포스 : {item.symbol_force}
                            </span>
                          </div>
                        </div>
                        <span className="text-center text-[13px]">
                          성장 :{" "}
                          {item.symbol_level === 20
                            ? "Max"
                            : item.symbol_growth_count +
                              "/" +
                              item.symbol_require_growth_count}
                        </span>
                      </div>
                    ))}
                    {symbolData.symbol.slice(6).map((item) => (
                      <div
                        className="flex flex-col bg-blue-50 rounded-md shadow-sm my-1 mx-1 py-1"
                        key={item.symbol_name}
                      >
                        <span className="text-center">
                          {item.symbol_name.slice(8)}
                        </span>
                        <div className="border-b border-gray-300 px-2"></div>
                        <div className="flex py-1 px-3 justify-between">
                          <div className="flex w-[30%] items-center">
                            <img
                              className="scale-125"
                              src={item.symbol_icon}
                            ></img>
                          </div>
                          <div className="flex flex-col w-[60%] text-[13px] ">
                            <span className="text-[12px]">
                              Lv. {item.symbol_level}
                            </span>
                            <span className="whitespace-pre text-[12px]">
                              주스텟 :{" "}
                              {ForceStat(item, baseData.character_class)}
                            </span>
                            <span className="text-[12px]">
                              포스 : {item.symbol_force}
                            </span>
                          </div>
                        </div>
                        <span className="text-center text-[13px]">
                          성장 :{" "}
                          {item.symbol_level === 11
                            ? "Max"
                            : item.symbol_growth_count +
                              "/" +
                              item.symbol_require_growth_count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
