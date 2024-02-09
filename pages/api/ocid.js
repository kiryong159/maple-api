export default async function getocid(Name, Apikey) {
  const ocid = await fetch(
    `https://open.api.nexon.com/maplestory/v1/id?character_name=${Name}`,
    {
      method: "GET",
      headers: { Accept: "application/json", "x-nxopen-api-key": Apikey },
    }
  ).then((r) => r.json());

  return ocid.ocid;
}
