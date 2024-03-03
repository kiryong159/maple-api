export default function Potential({ potentialData }) {
  const potential_grade = potentialData.potential_option_grade;
  const potential_1 = potentialData.potential_option_1;
  const potential_2 = potentialData.potential_option_2;
  const potential_3 = potentialData.potential_option_3;
  const addi_grade = potentialData.additional_potential_option_grade;
  const addi_1 = potentialData.additional_potential_option_1;
  const addi_2 = potentialData.additional_potential_option_2;
  const addi_3 = potentialData.additional_potential_option_3;

  const potentialCheck = Boolean(
    potential_1 === null && potential_2 === null && potential_3 === null
  );
  const addiCheck = Boolean(
    addi_1 === null && addi_2 === null && addi_3 === null
  );

  const excepCheck = Boolean(
    potentialData.item_exceptional_option.attack_power === "0"
  );
  return (
    <>
      {potentialCheck ? (
        ""
      ) : (
        <div>
          <div className="border-b border-gray-300 px-2"></div>
          <div className="flex flex-col py-3 px-3">
            <span
              className={`${
                potential_grade === "레전드리"
                  ? "text-green-400"
                  : potential_grade === "유니크"
                  ? "text-yellow-500"
                  : potential_grade === "에픽"
                  ? "text-purple-400"
                  : potential_grade === "레어"
                  ? "text-blue-600"
                  : "text-black"
              }`}
            >
              잠재옵션
            </span>
            <span>{potential_1}</span>
            <span>{potential_2}</span>
            <span>{potential_3}</span>
          </div>
        </div>
      )}
      {addiCheck ? (
        ""
      ) : (
        <div>
          <div className="border-b border-gray-300 px-2"></div>
          <div className="flex flex-col py-3 px-3">
            <span
              className={`${
                addi_grade === "레전드리"
                  ? "text-green-400"
                  : addi_grade === "유니크"
                  ? "text-yellow-500"
                  : addi_grade === "에픽"
                  ? "text-purple-400"
                  : addi_grade === "레어"
                  ? "text-blue-600"
                  : "text-black"
              }`}
            >
              에디셔널 잠재옵션
            </span>
            <span>{addi_1}</span>
            <span>{addi_2}</span>
            <span>{addi_3}</span>
          </div>
        </div>
      )}
      {excepCheck ? (
        ""
      ) : (
        <div>
          <div className="border-b border-gray-300 px-2"></div>
          <div className="flex flex-col py-3 px-3">
            <span className="text-red-600">익셉셔널</span>
            <span>올스텟 : +20</span>
            <span>최대 HP / 최대 MP : +1000</span>
            <span>공격력 / 마력 : +15</span>
          </div>
        </div>
      )}
    </>
  );
}
