export function equipArrChanger(item) {
  const d = item;
  const 모자 = d.find((item) => item.item_equipment_slot === "모자");
  const 눈장식 = d.find((item) => item.item_equipment_slot === "눈장식");
  const 상의 = d.find((item) => item.item_equipment_slot === "상의");
  const 하의 = d.find((item) => item.item_equipment_slot === "하의");
  const 신발 = d.find((item) => item.item_equipment_slot === "신발");
  const 장갑 = d.find((item) => item.item_equipment_slot === "장갑");
  const 망토 = d.find((item) => item.item_equipment_slot === "망토");
  const 보조무기 = d.find((item) => item.item_equipment_slot === "보조무기");
  const 무기 = d.find((item) => item.item_equipment_slot === "무기");
  const 반지2 = d.find((item) => item.item_equipment_slot === "반지2");
  const 반지3 = d.find((item) => item.item_equipment_slot === "반지3");
  const 반지4 = d.find((item) => item.item_equipment_slot === "반지4");
  const 벨트 = d.find((item) => item.item_equipment_slot === "벨트");
  const 어깨장식 = d.find((item) => item.item_equipment_slot === "어깨장식");
  const 포켓 = d.find((item) => item.item_equipment_slot === "포켓 아이템");
  const 심장 = d.find((item) => item.item_equipment_slot === "기계 심장");
  const 뱃지 = d.find((item) => item.item_equipment_slot === "뱃지");
  const 엠블렘 = d.find((item) => item.item_equipment_slot === "엠블렘");
  const 얼굴장식 = d.find((item) => item.item_equipment_slot === "얼굴장식");
  const 귀고리 = d.find((item) => item.item_equipment_slot === "귀고리");
  const 반지1 = d.find((item) => item.item_equipment_slot === "반지1");
  const 펜던트 = d.find((item) => item.item_equipment_slot === "펜던트");
  const 훈장 = d.find((item) => item.item_equipment_slot === "훈장");
  const 펜던트2 = d.find((item) => item.item_equipment_slot === "펜던트2");

  const newArr = [
    모자,
    눈장식,
    상의,
    하의,
    신발,
    장갑,
    망토,
    보조무기,
    무기,
    반지2,
    반지3,
    반지4,
    벨트,
    어깨장식,
    포켓,
    심장,
    뱃지,
    엠블렘,
    얼굴장식,
    귀고리,
    반지1,
    펜던트,
    훈장,
    펜던트2,
  ];

  return newArr;
}
