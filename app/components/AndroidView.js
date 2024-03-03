export default function AndroidView({ AndroidData, darkTheme }) {
  return (
    <div
      className={`flex flex-col items-center py-3   ${
        darkTheme ? "textShadow" : ""
      } `}
    >
      <div className={`text-[18px] font-bold`}>{AndroidData.android_name}</div>
      <img src={AndroidData.android_icon} />
      <div className="border-b border-gray-300 px-3 mt-2 w-full"></div>
      <div className="flex flex-col py-3 px-2">
        <span>{AndroidData.android_description}</span>
      </div>
    </div>
  );
}
