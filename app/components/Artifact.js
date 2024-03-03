export default function Artifact({ data, darkTheme }) {
  return (
    <>
      {data.union_artifact_effect.length === 0 ? null : (
        <>
          <div
            className={`rounded-md shadow-md p-2 mt-5 ${
              darkTheme ? "bg-gray-700" : "bg-blue-50"
            }`}
          >
            <h1 className="text-[23px] md:text-[28px] lg:text-[33px] text-center my-3">
              아티팩트
            </h1>
            {/* 아티팩트 카드 Grid */}
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
              {data.union_artifact_crystal.map((item) => {
                let bgArtifact;
                if (item.name.slice(7) === "주황버섯")
                  bgArtifact = "bg_artifact-1";
                if (item.name.slice(7) === "슬라임")
                  bgArtifact = "bg_artifact-2";
                if (item.name.slice(7) === "뿔버섯")
                  bgArtifact = "bg_artifact-3";
                if (item.name.slice(7) === "스텀프")
                  bgArtifact = "bg_artifact-4";
                if (item.name.slice(7) === "스톤골렘")
                  bgArtifact = "bg_artifact-5";
                if (item.name.slice(7) === "발록") bgArtifact = "bg_artifact-6";
                if (item.name.slice(7) === "자쿰") bgArtifact = "bg_artifact-7";
                if (item.name.slice(7) === "핑크빈")
                  bgArtifact = "bg_artifact-8";
                if (item.name.slice(7) === "파풀라투스")
                  bgArtifact = "bg_artifact-9";
                return (
                  <div
                    className={`flex-col rounded-md shadow-md p-2 border-[2px]  ${
                      item.level === 5 ? "border-purple-500" : "border-blue-500"
                    }  ${bgArtifact}`}
                    key={item.name}
                  >
                    <div
                      className={`flex space-x-1 px-2 ${
                        item.level === 5
                          ? `font-bold ${
                              darkTheme ? "text-purple-300" : "text-purple-500 "
                            } `
                          : ` font-bold  ${
                              darkTheme ? "text-blue-300" : "text-blue-500 "
                            }`
                      }`}
                    >
                      <span>Lv.{item.level} </span>
                      <span> {item.name.slice(7)}</span>
                    </div>
                    <div className={`flex flex-col  p-2 `}>
                      <span>{item.crystal_option_name_1}</span>
                      <span>{item.crystal_option_name_2}</span>
                      <span>{item.crystal_option_name_3}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* 아티팩트 효과  */}
            <div>
              <h1 className="text-[23px] md:text-[28px] lg:text-[33px] text-center my-3">
                아티팩트 효과
              </h1>
              <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[16px] md:text-[17px] lg:text-[18px] md:pb-3 lg:pb-5 ">
                {data.union_artifact_effect.map((item) => {
                  item.name =
                    item.name.includes("추가 경험치 획득 12%") ||
                    item.name.includes("추가 경험치 획득 10%")
                      ? `추경 ${item.name.slice(
                          10,
                          16
                        )}, 다수 공격 대상 ${item.name.slice(42)}`
                      : item.name.includes("추가 경험치 획득")
                      ? `추경 ${item.name.slice(
                          10,
                          15
                        )}, 다수 공격 대상 ${item.name.slice(41)}`
                      : item.name.includes("재사용 대기시간")
                      ? `재사용 미적용 ${item.name.slice(16)}`
                      : item.name.includes("보스 몬스터 공격")
                      ? `보공뎀 ${item.name.slice(16)}`
                      : item.name.includes("파이널 어택류")
                      ? `파택류 데미지 ${item.name.slice(16)}`
                      : item.name;
                  return (
                    <div className="flex space-x-1" key={item.name}>
                      <span>Lv.{item.level}</span>
                      <span className="whitespace-pre-wrap">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
