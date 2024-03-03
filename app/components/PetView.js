export default function PetView({ petData, petNo, darkTheme }) {
  let petName;
  let petIcon;
  let petEquipCheck;
  let petEquipIcon;
  let petEquipName;
  let petEquipAttack;
  let petEquipMagicPower;
  let petDescription;

  if (petNo === "1") {
    petName =
      petData.pet_1_appearance === null
        ? petData.pet_1_name
        : petData.pet_1_appearance;
    petIcon =
      petData.pet_1_appearance_icon === null
        ? petData.pet_1_icon
        : petData.pet_1_appearance_icon;
    petEquipCheck = petData.pet_1_equipment.item_name === null;
    petEquipIcon = petEquipCheck ? "" : petData.pet_1_equipment.item_icon;
    petEquipName = petEquipCheck ? "" : petData.pet_1_equipment.item_name;
    petEquipAttack = petEquipCheck
      ? ""
      : petData.pet_1_equipment.item_option[0].option_type.includes("마력")
      ? "0"
      : petData.pet_1_equipment.item_option[0].option_value;
    petEquipMagicPower = petEquipCheck
      ? ""
      : petData.pet_1_equipment.item_option.length === 1
      ? petData.pet_1_equipment.item_option[0].option_value
      : petData.pet_1_equipment.item_option[1].option_value;
    petDescription = petData.pet_1_description;
  }
  if (petNo === "2") {
    petName =
      petData.pet_2_appearance === null
        ? petData.pet_2_name
        : petData.pet_2_appearance;
    petIcon =
      petData.pet_2_appearance_icon === null
        ? petData.pet_2_icon
        : petData.pet_2_appearance_icon;
    petEquipCheck = petData.pet_2_equipment.item_name === null;
    petEquipIcon = petEquipCheck ? "" : petData.pet_2_equipment.item_icon;
    petEquipName = petEquipCheck ? "" : petData.pet_2_equipment.item_name;
    petEquipAttack = petEquipCheck
      ? ""
      : petData.pet_2_equipment.item_option[0].option_type.includes("마력")
      ? "0"
      : petData.pet_2_equipment.item_option[0].option_value;
    petEquipMagicPower = petEquipCheck
      ? ""
      : petData.pet_2_equipment.item_option.length === 1
      ? petData.pet_2_equipment.item_option[0].option_value
      : petData.pet_2_equipment.item_option[1].option_value;
    petDescription = petData.pet_2_description;
  }
  if (petNo === "3") {
    petName =
      petData.pet_3_appearance === null
        ? petData.pet_3_name
        : petData.pet_3_appearance;
    petIcon =
      petData.pet_3_appearance_icon === null
        ? petData.pet_3_icon
        : petData.pet_3_appearance_icon;
    petEquipCheck = petData.pet_3_equipment.item_name === null;
    petEquipIcon = petEquipCheck ? "" : petData.pet_3_equipment.item_icon;
    petEquipName = petEquipCheck ? "" : petData.pet_3_equipment.item_name;
    petEquipAttack = petEquipCheck
      ? ""
      : petData.pet_3_equipment.item_option[0].option_type.includes("마력")
      ? "0"
      : petData.pet_3_equipment.item_option[0].option_value;
    petEquipMagicPower = petEquipCheck
      ? ""
      : petData.pet_3_equipment.item_option.length === 1
      ? petData.pet_3_equipment.item_option[0].option_value
      : petData.pet_3_equipment.item_option[1].option_value;
    petDescription = petData.pet_3_description;
  }

  return (
    <div
      className={`flex flex-col items-center py-3 ${
        darkTheme ? "textShadow" : ""
      }`}
    >
      <div className="text-[18px] font-bold">{petName}</div>
      <img src={petIcon} />
      {petEquipCheck ? (
        ""
      ) : (
        <div className="border-b border-gray-300 px-3 mt-2 w-full"></div>
      )}
      {/* 펫장비 */}
      {petEquipCheck ? (
        ""
      ) : (
        <div className="flex items-center w-[100%] ">
          <img className="w-[15%] mx-auto " src={petEquipIcon} />
          <div className="flex flex-col w-[75%] py-1 px-2">
            <h1 className="font-bold">{petEquipName}</h1>
            <span>공격력 : {petEquipAttack}</span>
            <span>마력 : {petEquipMagicPower}</span>
          </div>
        </div>
      )}
      <div className="border-b border-gray-300 px-3 mt-2 w-full"></div>
      <div className="flex flex-col py-3 px-2">
        <span>{petDescription}</span>
      </div>
    </div>
  );
}
