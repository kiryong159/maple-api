export default async function fetchData(Value, Apikey, ocid, date, skill) {
  if (skill === 0) {
    /* 일반 */
    const data = await fetch(
      `https://open.api.nexon.com/maplestory/v1/character/${Value}?ocid=${ocid}&date=${date}`,
      {
        method: "GET",
        headers: { accept: "application/json", "x-nxopen-api-key": Apikey },
      }
    ).then((r) => r.json());
    return data;
  }
  if (skill === 2) {
    /* 유니온 */
    const data = await fetch(
      `https://open.api.nexon.com/maplestory/v1/user/${Value}?ocid=${ocid}&date=${date}`,
      {
        method: "GET",
        headers: { accept: "application/json", "x-nxopen-api-key": Apikey },
      }
    ).then((r) => r.json());
    return data;
  }
  if (skill === 5 || skill === 6) {
    /* 5차.6차 스킬 */
    const data = await fetch(
      `https://open.api.nexon.com/maplestory/v1/character/${Value}?ocid=${ocid}&date=${date}&character_skill_grade=${skill}`,
      {
        method: "GET",
        headers: { accept: "application/json", "x-nxopen-api-key": Apikey },
      }
    ).then((r) => r.json());
    return data;
  }
}
