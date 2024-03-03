import localFont from "next/font/local";
import "./globals.css";
import RecoilRootComponent from "./RecoilRootComponent";

const myFont = localFont({
  src: [
    {
      path: "./Maplestory-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Maplestory-Light.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "메이플 캐릭터 검색",
  description: "메이플 캐릭터 검색",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <RecoilRootComponent>{children}</RecoilRootComponent>
    </html>
  );
}
