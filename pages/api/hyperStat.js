export default async function getHyperStat(Apikey, ocid, date) {
  const data = await fetch(
    `https://open.api.nexon.com/maplestory/v1/character/hyper-stat?ocid=${ocid}&date=${date}`,
    {
      method: "GET",
      headers: { accept: "application/json", "x-nxopen-api-key": Apikey },
    }
  ).then((r) => r.json());
  return data;
}
