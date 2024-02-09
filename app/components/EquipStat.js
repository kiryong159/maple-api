export default function EquipStat({ Stat, equipData, Percent }) {
  let totalStat;
  let baseStat;
  let addStat;
  let etcStat;
  let starForceStat;

  if (Stat === "STR") {
    totalStat = equipData.item_total_option.str;
    addStat = equipData.item_add_option.str;
    etcStat = equipData.item_etc_option.str;
    starForceStat = equipData.item_starforce_option.str;
    baseStat = equipData.item_base_option.str;
  }

  if (Stat === "DEX") {
    totalStat = equipData.item_total_option.dex;
    addStat = equipData.item_add_option.dex;
    etcStat = equipData.item_etc_option.dex;
    starForceStat = equipData.item_starforce_option.dex;
    baseStat = equipData.item_base_option.dex;
  }
  if (Stat === "INT") {
    totalStat = equipData.item_total_option.int;
    addStat = equipData.item_add_option.int;
    etcStat = equipData.item_etc_option.int;
    starForceStat = equipData.item_starforce_option.int;
    baseStat = equipData.item_base_option.int;
  }
  if (Stat === "LUK") {
    totalStat = equipData.item_total_option.luk;
    addStat = equipData.item_add_option.luk;
    etcStat = equipData.item_etc_option.luk;
    starForceStat = equipData.item_starforce_option.luk;
    baseStat = equipData.item_base_option.luk;
  }

  if (Stat === "공격력") {
    totalStat = equipData.item_total_option.attack_power;
    addStat = equipData.item_add_option.attack_power;
    etcStat = equipData.item_etc_option.attack_power;
    starForceStat = equipData.item_starforce_option.attack_power;
    baseStat = equipData.item_base_option.attack_power;
  }

  if (Stat === "마력") {
    totalStat = equipData.item_total_option.magic_power;
    addStat = equipData.item_add_option.magic_power;
    etcStat = equipData.item_etc_option.magic_power;
    starForceStat = equipData.item_starforce_option.magic_power;
    baseStat = equipData.item_base_option.magic_power;
  }
  if (Stat === "HP") {
    totalStat = equipData.item_total_option.max_hp;
    addStat = equipData.item_add_option.max_hp;
    etcStat = equipData.item_etc_option.max_hp;
    starForceStat = equipData.item_starforce_option.max_hp;
    baseStat = equipData.item_base_option.max_hp;
  }

  if (Stat === "MP") {
    totalStat = equipData.item_total_option.max_mp;
    addStat = equipData.item_add_option.max_mp;
    etcStat = equipData.item_etc_option.max_mp;
    starForceStat = equipData.item_starforce_option.max_mp;
    baseStat = equipData.item_base_option.max_mp;
  }
  if (Stat === "점프력") {
    totalStat = equipData.item_total_option.jump;
    addStat = equipData.item_add_option.jump;
    etcStat = equipData.item_etc_option.jump;
    starForceStat = equipData.item_starforce_option.jump;
    baseStat = equipData.item_base_option.jump;
  }
  if (Stat === "이동속도") {
    totalStat = equipData.item_total_option.speed;
    addStat = equipData.item_add_option.speed;
    etcStat = equipData.item_etc_option.speed;
    starForceStat = equipData.item_starforce_option.speed;
    baseStat = equipData.item_base_option.speed;
  }
  if (Stat === "방어력") {
    totalStat = equipData.item_total_option.armor;
    addStat = equipData.item_add_option.armor;
    etcStat = equipData.item_etc_option.armor;
    starForceStat = equipData.item_starforce_option.armor;
    baseStat = equipData.item_base_option.armor;
  }
  if (Stat === "올스텟") {
    totalStat = equipData.item_total_option.all_stat;
    addStat = equipData.item_add_option.all_stat;
    etcStat = equipData.item_etc_option.all_stat;
    starForceStat = equipData.item_starforce_option.all_stat;
    baseStat = equipData.item_base_option.all_stat;
  }
  if (Stat === "보공") {
    totalStat = equipData.item_total_option.boss_damage;
    addStat = equipData.item_add_option.boss_damage;
    etcStat = equipData.item_etc_option.boss_damage;
    starForceStat = equipData.item_starforce_option.boss_damage;
    baseStat = equipData.item_base_option.boss_damage;
  }
  if (Stat === "데미지") {
    totalStat = equipData.item_total_option.damage;
    addStat = equipData.item_add_option.damage;
    etcStat = equipData.item_etc_option.damage;
    starForceStat = equipData.item_starforce_option.damage;
    baseStat = equipData.item_base_option.damage;
  }
  if (Stat === "방무") {
    totalStat = equipData.item_total_option.ignore_monster_armor;
    addStat = equipData.item_add_option.ignore_monster_armor;
    etcStat = equipData.item_etc_option.ignore_monster_armor;
    starForceStat = equipData.item_starforce_option.ignore_monster_armor;
    baseStat = equipData.item_base_option.ignore_monster_armor;
  }
  if (Stat === "최대 HP") {
    totalStat = equipData.item_total_option.max_hp_rate;
    addStat = equipData.item_add_option.max_hp_rate;
    etcStat = equipData.item_etc_option.max_hp_rate;
    starForceStat = equipData.item_starforce_option.max_hp_rate;
    baseStat = equipData.item_base_option.max_hp_rate;
  }
  if (Stat === "최대 HP") {
    totalStat = equipData.item_total_option.max_mp_rate;
    addStat = equipData.item_add_option.max_mp_rate;
    etcStat = equipData.item_etc_option.max_mp_rate;
    starForceStat = equipData.item_starforce_option.max_mp_rate;
    baseStat = equipData.item_base_option.max_mp_rate;
  }

  const statCheck = Boolean(
    (addStat === "0" || addStat === undefined) &&
      (etcStat === "0" || etcStat === undefined) &&
      (starForceStat === "0" || starForceStat === undefined)
  );
  const baseStatCheck = baseStat === undefined ? "0" : baseStat;
  const addStatCheck = Boolean(addStat === "0" || addStat === undefined)
    ? ""
    : ` +${addStat}`;

  const etcStatCheck = Boolean(etcStat === "0" || etcStat === undefined)
    ? ""
    : ` +${etcStat}`;

  const starForceStatCheck = Boolean(
    starForceStat === "0" || starForceStat === undefined
  )
    ? ""
    : ` +${starForceStat}`;
  return (
    <p>
      {totalStat === "0" ? (
        ""
      ) : (
        <>
          <span>
            {Stat} : +{Percent === "Y" ? totalStat + "%" : totalStat}
          </span>{" "}
          {statCheck ? (
            ""
          ) : (
            <>
              <span>
                (
                <span>
                  {Percent === "Y"
                    ? baseStatCheck === ""
                      ? ""
                      : baseStatCheck + "%"
                    : baseStatCheck}
                </span>
                <span className="text-green-600">
                  {Percent === "Y"
                    ? addStatCheck === ""
                      ? ""
                      : addStatCheck + "%"
                    : addStatCheck}
                </span>
                <span className="text-blue-600">{etcStatCheck}</span>
                <span className="text-yellow-500">{starForceStatCheck}</span>)
              </span>
            </>
          )}
        </>
      )}
    </p>
  );
}
