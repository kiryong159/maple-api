export function ForceStat(SYMData, character_class) {
  if (
    character_class === "히어로" ||
    character_class === "팔라딘" ||
    character_class === "다크나이트" ||
    character_class === "소울마스터" ||
    character_class === "아란" ||
    character_class === "데몬슬레이어" ||
    character_class === "미하일" ||
    character_class === "카이저" ||
    character_class === "제로" ||
    character_class === "블래스터" ||
    character_class === "아델" ||
    character_class === "핑크빈" ||
    character_class === "은월" ||
    character_class === "스트라이커" ||
    character_class === "아크" ||
    character_class === "캐논슈터" ||
    character_class === "바이퍼"
  ) {
    if (SYMData.symbol_str.length > 3) {
      const STR =
        SYMData.symbol_str.slice(0, 1) + "," + SYMData.symbol_str.slice(1);
      return STR;
    }
    return SYMData.symbol_str;
  }
  if (character_class === "데몬어벤져") {
    if (SYMData.symbol_hp.length > 4) {
      const HP =
        SYMData.symbol_hp.slice(0, 2) + "," + SYMData.symbol_hp.slice(2);
      return HP;
    }
    if (SYMData.symbol_hp.length > 3) {
      const HP =
        SYMData.symbol_hp.slice(0, 1) + "," + SYMData.symbol_hp.slice(1);
      return HP;
    }
    return SYMData.symbol_hp;
  }
  if (
    character_class === "아크메이지(썬,콜)" ||
    character_class === "아크메이지(불,독)" ||
    character_class === "비숍" ||
    character_class === "플레임위자드" ||
    character_class === "에반" ||
    character_class === "배틀메이지" ||
    character_class === "루미너스" ||
    character_class === "키네시스" ||
    character_class === "일리움" ||
    character_class === "라라"
  ) {
    if (SYMData.symbol_int.length > 3) {
      const INT =
        SYMData.symbol_int.slice(0, 1) + "," + SYMData.symbol_int.slice(1);
      return INT;
    }
    return SYMData.symbol_int;
  }
  if (
    character_class === "보우마스터" ||
    character_class === "신궁" ||
    character_class === "윈드브레이커" ||
    character_class === "와일드헌터" ||
    character_class === "메르세데스" ||
    character_class === "패스파인더" ||
    character_class === "카인" ||
    character_class === "메카닉" ||
    character_class === "엔젤릭버스터" ||
    character_class === "캡틴"
  ) {
    if (SYMData.symbol_dex.length > 3) {
      const DEX =
        SYMData.symbol_dex.slice(0, 1) + "," + SYMData.symbol_dex.slice(1);
      return DEX;
    }
    return SYMData.symbol_dex;
  }
  if (
    character_class === "나이트로드" ||
    character_class === "섀도어" ||
    character_class === "나이트워커" ||
    character_class === "듀얼블레이더" ||
    character_class === "카데나" ||
    character_class === "호영" ||
    character_class === "칼리" ||
    character_class === "팬텀" ||
    character_class === "제논"
  ) {
    if (SYMData.symbol_luk.length > 3) {
      const DEX =
        SYMData.symbol_luk.slice(0, 1) + "," + SYMData.symbol_luk.slice(1);
      return DEX;
    }
    return SYMData.symbol_luk;
  }
}

export function SymbolForcePlus(SYMData) {
  const SYMData0 = SYMData[0] ? SYMData[0].symbol_force : null;
  const SYMData1 = SYMData[1] ? SYMData[1].symbol_force : null;
  const SYMData2 = SYMData[2] ? SYMData[2].symbol_force : null;
  const SYMData3 = SYMData[3] ? SYMData[3].symbol_force : null;
  const SYMData4 = SYMData[4] ? SYMData[4].symbol_force : null;
  const SYMData5 = SYMData[5] ? SYMData[5].symbol_force : null;

  const plus = String(
    Number(SYMData0) +
      Number(SYMData1) +
      Number(SYMData2) +
      Number(SYMData3) +
      Number(SYMData4) +
      Number(SYMData5)
  );
  const force = plus.length > 3 ? plus.slice(0, 1) + "," + plus.slice(1) : plus;
  return force;
}

export function SymbolStatPlus(SYMData, character_class) {
  if (
    character_class === "히어로" ||
    character_class === "팔라딘" ||
    character_class === "다크나이트" ||
    character_class === "소울마스터" ||
    character_class === "아란" ||
    character_class === "데몬슬레이어" ||
    character_class === "미하일" ||
    character_class === "카이저" ||
    character_class === "제로" ||
    character_class === "블래스터" ||
    character_class === "아델" ||
    character_class === "핑크빈" ||
    character_class === "은월" ||
    character_class === "스트라이커" ||
    character_class === "아크" ||
    character_class === "캐논슈터" ||
    character_class === "바이퍼"
  ) {
    const SYMData0 = SYMData[0] ? SYMData[0].symbol_str : null;
    const SYMData1 = SYMData[1] ? SYMData[1].symbol_str : null;
    const SYMData2 = SYMData[2] ? SYMData[2].symbol_str : null;
    const SYMData3 = SYMData[3] ? SYMData[3].symbol_str : null;
    const SYMData4 = SYMData[4] ? SYMData[4].symbol_str : null;
    const SYMData5 = SYMData[5] ? SYMData[5].symbol_str : null;
    const plus = String(
      Number(SYMData0) +
        Number(SYMData1) +
        Number(SYMData2) +
        Number(SYMData3) +
        Number(SYMData4) +
        Number(SYMData5)
    );
    const STR =
      plus.length > 5
        ? plus.slice(0, 3) + "," + plus.slice(3)
        : plus.length > 4
        ? plus.slice(0, 2) + "," + plus.slice(2)
        : plus.length > 3
        ? plus.slice(0, 1) + "," + plus.slice(1)
        : plus;
    return STR;
  }
  if (character_class === "데몬어벤져") {
    const SYMData0 = SYMData[0] ? SYMData[0].symbol_hp : null;
    const SYMData1 = SYMData[1] ? SYMData[1].symbol_hp : null;
    const SYMData2 = SYMData[2] ? SYMData[2].symbol_hp : null;
    const SYMData3 = SYMData[3] ? SYMData[3].symbol_hp : null;
    const SYMData4 = SYMData[4] ? SYMData[4].symbol_hp : null;
    const SYMData5 = SYMData[5] ? SYMData[5].symbol_hp : null;
    const plus = String(
      Number(SYMData0) +
        Number(SYMData1) +
        Number(SYMData2) +
        Number(SYMData3) +
        Number(SYMData4) +
        Number(SYMData5)
    );
    const HP =
      plus.length > 5
        ? plus.slice(0, 3) + "," + plus.slice(3)
        : plus.length > 4
        ? plus.slice(0, 2) + "," + plus.slice(2)
        : plus.length > 3
        ? plus.slice(0, 1) + "," + plus.slice(1)
        : plus;
    return HP;
  }
  if (
    character_class === "아크메이지(썬,콜)" ||
    character_class === "아크메이지(불,독)" ||
    character_class === "비숍" ||
    character_class === "플레임위자드" ||
    character_class === "에반" ||
    character_class === "배틀메이지" ||
    character_class === "루미너스" ||
    character_class === "키네시스" ||
    character_class === "일리움" ||
    character_class === "라라"
  ) {
    const SYMData0 = SYMData[0] ? SYMData[0].symbol_int : null;
    const SYMData1 = SYMData[1] ? SYMData[1].symbol_int : null;
    const SYMData2 = SYMData[2] ? SYMData[2].symbol_int : null;
    const SYMData3 = SYMData[3] ? SYMData[3].symbol_int : null;
    const SYMData4 = SYMData[4] ? SYMData[4].symbol_int : null;
    const SYMData5 = SYMData[5] ? SYMData[5].symbol_int : null;
    const plus = String(
      Number(SYMData0) +
        Number(SYMData1) +
        Number(SYMData2) +
        Number(SYMData3) +
        Number(SYMData4) +
        Number(SYMData5)
    );
    const INT =
      plus.length > 5
        ? plus.slice(0, 3) + "," + plus.slice(3)
        : plus.length > 4
        ? plus.slice(0, 2) + "," + plus.slice(2)
        : plus.length > 3
        ? plus.slice(0, 1) + "," + plus.slice(1)
        : plus;
    return INT;
  }
  if (
    character_class === "보우마스터" ||
    character_class === "신궁" ||
    character_class === "윈드브레이커" ||
    character_class === "와일드헌터" ||
    character_class === "메르세데스" ||
    character_class === "패스파인더" ||
    character_class === "카인" ||
    character_class === "메카닉" ||
    character_class === "엔젤릭버스터" ||
    character_class === "캡틴"
  ) {
    const SYMData0 = SYMData[0] ? SYMData[0].symbol_dex : null;
    const SYMData1 = SYMData[1] ? SYMData[1].symbol_dex : null;
    const SYMData2 = SYMData[2] ? SYMData[2].symbol_dex : null;
    const SYMData3 = SYMData[3] ? SYMData[3].symbol_dex : null;
    const SYMData4 = SYMData[4] ? SYMData[4].symbol_dex : null;
    const SYMData5 = SYMData[5] ? SYMData[5].symbol_dex : null;
    const plus = String(
      Number(SYMData0) +
        Number(SYMData1) +
        Number(SYMData2) +
        Number(SYMData3) +
        Number(SYMData4) +
        Number(SYMData5)
    );
    const DEX =
      plus.length > 5
        ? plus.slice(0, 3) + "," + plus.slice(3)
        : plus.length > 4
        ? plus.slice(0, 2) + "," + plus.slice(2)
        : plus.length > 3
        ? plus.slice(0, 1) + "," + plus.slice(1)
        : plus;
    return DEX;
  }
  if (
    character_class === "나이트로드" ||
    character_class === "섀도어" ||
    character_class === "나이트워커" ||
    character_class === "듀얼블레이더" ||
    character_class === "카데나" ||
    character_class === "호영" ||
    character_class === "칼리" ||
    character_class === "팬텀" ||
    character_class === "제논"
  ) {
    const SYMData0 = SYMData[0] ? SYMData[0].symbol_luk : null;
    const SYMData1 = SYMData[1] ? SYMData[1].symbol_luk : null;
    const SYMData2 = SYMData[2] ? SYMData[2].symbol_luk : null;
    const SYMData3 = SYMData[3] ? SYMData[3].symbol_luk : null;
    const SYMData4 = SYMData[4] ? SYMData[4].symbol_luk : null;
    const SYMData5 = SYMData[5] ? SYMData[5].symbol_luk : null;
    const plus = String(
      Number(SYMData0) +
        Number(SYMData1) +
        Number(SYMData2) +
        Number(SYMData3) +
        Number(SYMData4) +
        Number(SYMData5)
    );
    const LUK =
      plus.length > 5
        ? plus.slice(0, 3) + "," + plus.slice(3)
        : plus.length > 4
        ? plus.slice(0, 2) + "," + plus.slice(2)
        : plus.length > 3
        ? plus.slice(0, 1) + "," + plus.slice(1)
        : plus;
    return LUK;
  }
}

export function DayCalc(year, month, days, prevLastDay) {
  return days > 0
    ? `${year}-${String(month).padStart(2, "0")}-${String(days).padStart(
        2,
        "0"
      )}`
    : days === 0
    ? month === 1
      ? `${year - 1}-${String(month + 11).padStart(2, "0")}-${String(
          prevLastDay
        ).padStart(2, "0")}`
      : `${year}-${String(month - 1).padStart(2, "0")}-${String(
          prevLastDay
        ).padStart(2, "0")}`
    : days < 0
    ? month === 1
      ? `${year - 1}-${String(month + 11).padStart(2, "0")}-${String(
          prevLastDay + days
        ).padStart(2, "0")}`
      : `${year}-${String(month - 1).padStart(2, "0")}-${String(
          prevLastDay + days
        ).padStart(2, "0")}`
    : `${year}-${String(month).padStart(2, "0")}-${String(days).padStart(
        2,
        "0"
      )}`;
}

export function powerChanger(power) {
  if (power.length <= 4) {
    return power;
  }
  if (power.length === 5) {
    const change = `${power.slice(0, 1)}만 ${power.slice(1)} `;
    return change;
  }
  if (power.length === 6) {
    const change = `${power.slice(0, 2)}만 ${power.slice(2)} `;
    return change;
  }
  if (power.length === 7) {
    const change = `${power.slice(0, 3)}만 ${power.slice(3)} `;
    return change;
  }

  if (power.length === 8) {
    const change = `${power.slice(0, 4)}만 ${power.slice(4)} `;
    return change;
  }
  if (power.length === 9) {
    const change = `${power.slice(0, 1)}억 ${power.slice(1, 5)}만 ${power.slice(
      5
    )} `;
    return change;
  }
  if (power.length === 10) {
    const change = `${power.slice(0, 2)}억 ${power.slice(2, 6)}만 ${power.slice(
      6
    )} `;
    return change;
  }
}

export function equipArrChanger(item) {
  if (item === undefined) return;
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

  let newArr = [
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

  const filterArr = newArr.filter((item) => item === undefined);
  newArr = filterArr.length === 24 ? [] : newArr;
  return newArr;
}
