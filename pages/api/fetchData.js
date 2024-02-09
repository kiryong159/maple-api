export default async function fetchData(Value, Apikey, ocid, date) {
  const data = await fetch(
    `https://open.api.nexon.com/maplestory/v1/character/${Value}?ocid=${ocid}&date=${date}`,
    {
      method: "GET",
      headers: { accept: "application/json", "x-nxopen-api-key": Apikey },
    }
  ).then((r) => r.json());
  return data;
}
