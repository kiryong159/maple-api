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

  if (skill === 8) {
    /* 일반월드 랭킹 */
    const data = await fetch(
      `https://open.api.nexon.com/maplestory/v1/ranking/${Value}?date=${date}&world_type=0`,
      {
        method: "GET",
        headers: { accept: "application/json", "x-nxopen-api-key": Apikey },
      }
    );
    return data;
  }
  if (skill === 9) {
    /* 리부트 랭킹 */
    const data = await fetch(
      `https://open.api.nexon.com/maplestory/v1/ranking/${Value}?date=${date}&world_type=1`,
      {
        method: "GET",
        headers: { accept: "application/json", "x-nxopen-api-key": Apikey },
      }
    );
    return data;
  }
  if (skill === 10) {
    /* 유니온,시드 랭킹 */
    const data = await fetch(
      `https://open.api.nexon.com/maplestory/v1/ranking/${Value}?date=${date}`,
      {
        method: "GET",
        headers: { accept: "application/json", "x-nxopen-api-key": Apikey },
      }
    );
    return data;
  }

  if (skill === 11) {
    /* 길드 랭킹 */
    const data = await fetch(
      `https://open.api.nexon.com/maplestory/v1/ranking/${Value}?date=${date}&ranking_type=2`,
      {
        method: "GET",
        headers: { accept: "application/json", "x-nxopen-api-key": Apikey },
      }
    );
    return data;
  }

  if (skill === 12) {
    /* 무릉 랭킹 */
    const data = await fetch(
      `https://open.api.nexon.com/maplestory/v1/ranking/${Value}?date=${date}&difficulty=1`,
      {
        method: "GET",
        headers: { accept: "application/json", "x-nxopen-api-key": Apikey },
      }
    );
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
