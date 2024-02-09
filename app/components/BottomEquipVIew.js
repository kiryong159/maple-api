import { useRecoilState } from "recoil";
import { EquipAtom } from "../atom";
import EquipBox from "./equipBox";

export default function BottomEquipView({
  equipPresetData,
  titleData,
  androidData,
}) {
  const [equipNumAtom, setEquipNumAtom] = useRecoilState(EquipAtom);

  return (
    <div className="w-full h-[400px] grid grid-cols-5 gap-2 grid-rows-6 my-3 p-1">
      <EquipBox equipData={equipPresetData[11]} equipNum="11" />
      <div></div>
      <EquipBox equipData={equipPresetData[0]} equipNum="0" />
      <div></div>
      <EquipBox equipData={equipPresetData[17]} equipNum="17" />
      <EquipBox equipData={equipPresetData[10]} equipNum="10" />
      <EquipBox equipData={equipPresetData[23]} equipNum="23" />
      <EquipBox equipData={equipPresetData[18]} equipNum="18" />
      <div></div>
      <EquipBox equipData={equipPresetData[16]} equipNum="16" />
      <EquipBox equipData={equipPresetData[9]} equipNum="9" />
      <EquipBox equipData={equipPresetData[21]} equipNum="21" />
      <EquipBox equipData={equipPresetData[1]} equipNum="1" />
      <EquipBox equipData={equipPresetData[19]} equipNum="19" />
      <EquipBox equipData={equipPresetData[22]} equipNum="22" />
      <EquipBox equipData={equipPresetData[20]} equipNum="20" />
      <EquipBox equipData={equipPresetData[8]} equipNum="8" />
      <EquipBox equipData={equipPresetData[2]} equipNum="2" />
      <EquipBox equipData={equipPresetData[13]} equipNum="13" />
      <EquipBox equipData={equipPresetData[7]} equipNum="7" />
      <EquipBox equipData={equipPresetData[14]} equipNum="14" />
      <EquipBox equipData={equipPresetData[12]} equipNum="12" />
      <EquipBox equipData={equipPresetData[3]} equipNum="3" />
      <EquipBox equipData={equipPresetData[5]} equipNum="5" />
      <EquipBox equipData={equipPresetData[6]} equipNum="6" />
      {titleData === null ? (
        <div></div>
      ) : (
        <div
          onClick={() => setEquipNumAtom("칭호")}
          className={`flex border-[1px] rounded-md shadow-sm items-center justify-center  hover:cursor-pointer border-gray-300}`}
        >
          <img src={titleData.title_icon} />
        </div>
      )}
      <div></div>
      <EquipBox equipData={equipPresetData[4]} equipNum="4" />
      {androidData === null ? (
        <div></div>
      ) : (
        <div
          onClick={() => setEquipNumAtom("안드")}
          className="flex border-[1px] rounded-md shadow-sm items-center justify-center  hover:cursor-pointer border-gray-300"
        >
          <img src={androidData.android_icon} />
        </div>
      )}

      {equipPresetData[15] === undefined ? (
        <div></div>
      ) : (
        <EquipBox equipData={equipPresetData[15]} equipNum="15" />
      )}
    </div>
  );
}
