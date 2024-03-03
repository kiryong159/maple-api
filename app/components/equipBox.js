"use client";

import { useRecoilState } from "recoil";
import { EquipAtom } from "../atom";

export default function EquipBox({ equipData, equipNum }) {
  const [equipNumAtom, setEquipNumAtom] = useRecoilState(EquipAtom);

  const onClick = () => {
    setEquipNumAtom(Number(equipNum));
  };
  return (
    <>
      {equipData === undefined ? (
        <div className="flex border-[2px] rounded-md shadow-md items-center justify-center border-gray-300 "></div>
      ) : (
        <div
          onClick={onClick}
          className={`flex border-[2px] rounded-md shadow-md items-center justify-center  hover:cursor-pointer ${
            equipData.potential_option_grade === "레전드리"
              ? "border-green-400"
              : equipData.potential_option_grade === "유니크"
              ? "border-yellow-400"
              : equipData.potential_option_grade === "에픽"
              ? "border-purple-500"
              : equipData.potential_option_grade === "레어"
              ? "border-blue-500"
              : "border-gray-400"
          }`}
        >
          <img
            src={
              equipData.item_icon ? equipData.item_icon : equipData.title_icon
            }
          />
        </div>
      )}
    </>
  );
}
