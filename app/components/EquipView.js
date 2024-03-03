import EquipStat from "./EquipStat";
import Potential from "./potential";
import ItemDescription from "./itemDescription";

export default function EquipView({ equipPresetData, darkTheme }) {
  return (
    <div className={`${darkTheme ? "textShadow" : ""}`}>
      {/* 아이템 이름 및 사진 */}
      <div className="flex flex-col items-center py-3 space-y-1">
        {equipPresetData.starforce === "0" ? (
          ""
        ) : (
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            x {equipPresetData.starforce}
          </div>
        )}
        <p className="text-[18px] font-bold">{`${equipPresetData.item_name} ${
          equipPresetData.scroll_upgrade === "0"
            ? ""
            : ` (+${equipPresetData.scroll_upgrade})`
        }`}</p>
        <p className="text-[13px]">
          {equipPresetData.potential_option_grade === null
            ? ""
            : `(${equipPresetData.potential_option_grade} 아이템)`}
        </p>
        <img src={equipPresetData.item_icon} />
      </div>
      <div className="border-b border-gray-300 px-2"></div>
      {/* 장비 스텟 */}
      <div className="flex flex-col py-3 px-3 ">
        <p>{`장비분류 : ${equipPresetData.item_equipment_part}`}</p>
        <EquipStat Stat="STR" equipData={equipPresetData} />
        <EquipStat Stat="DEX" equipData={equipPresetData} />
        <EquipStat Stat="INT" equipData={equipPresetData} />
        <EquipStat Stat="LUK" equipData={equipPresetData} />
        <EquipStat Stat="HP" equipData={equipPresetData} />
        <EquipStat Stat="MP" equipData={equipPresetData} />
        <EquipStat Stat="공격력" equipData={equipPresetData} />
        <EquipStat Stat="마력" equipData={equipPresetData} />
        <EquipStat Stat="보공" equipData={equipPresetData} Percent="Y" />
        <EquipStat Stat="방무" equipData={equipPresetData} Percent="Y" />
        <EquipStat Stat="방어력" equipData={equipPresetData} />
        <EquipStat Stat="데미지" equipData={equipPresetData} Percent="Y" />
        <EquipStat Stat="올스텟" equipData={equipPresetData} Percent="Y" />
        <p className="">
          {equipPresetData.golden_hammer_flag === "적용"
            ? "황금망치 재련 적용"
            : ""}
        </p>
        <p className="text-yellow-500">
          {equipPresetData.cuttable_count === "255"
            ? ""
            : "가위 사용 가능 횟수 : " + equipPresetData.cuttable_count + "회"}
        </p>
      </div>
      {/* 잠재 */}
      <Potential potentialData={equipPresetData} />
      <ItemDescription itemData={equipPresetData} />
    </div>
  );
}
