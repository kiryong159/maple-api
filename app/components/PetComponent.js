import { useRecoilState } from "recoil";
import { EquipAtom } from "../atom";

export default function Petcomponents({ data, petNo }) {
  const [equipNumAtom, setEquipNumAtom] = useRecoilState(EquipAtom);
  let petImg;
  let petAtom;
  if (petNo === "1") {
    petImg =
      data.pet_1_appearance_icon === null
        ? data.pet_1_icon
        : data.pet_1_appearance_icon;
    petAtom = "펫1";
  }
  if (petNo === "2") {
    petImg =
      data.pet_2_appearance_icon === null
        ? data.pet_2_icon
        : data.pet_2_appearance_icon;
    petAtom = "펫2";
  }
  if (petNo === "3") {
    petImg =
      data.pet_3_appearance_icon === null
        ? data.pet_3_icon
        : data.pet_3_appearance_icon;
    petAtom = "펫3";
  }

  return (
    <div className="flex justify-center items-center p-1 border-[2px] border-gray-400 w-[51px] h-[55px] md:w-[65px] md:h-[58px]  lg:w-[90px] lg:h-[75px] mx-auto rounded-md shadow-md">
      <img
        className="w-[75%] mx-auto hover:cursor-pointer"
        onClick={() => setEquipNumAtom(petAtom)}
        src={`${petImg}`}
      />
    </div>
  );
}
