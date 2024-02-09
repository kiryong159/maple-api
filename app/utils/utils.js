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
