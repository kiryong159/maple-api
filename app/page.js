import HomeClient from "./homeClient";

export default function Home() {
  const Apikey = process.env.API_KEY;
  return (
    <div>
      <HomeClient Apikey={Apikey} />
    </div>
  );
}
