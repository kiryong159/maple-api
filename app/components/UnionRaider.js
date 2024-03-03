import uuid4 from "uuid4";

export default function UnionRaider({ data, raiderData, darkTheme }) {
  var id = uuid4();
  const raiderBox = Array.from(Array(20), () => Array(22).fill(0));
  const block = raiderData.union_block.map((item) =>
    item.block_position.map((item) => {
      const resultX = item.x + 11;
      const resultY = item.y + 9;
      raiderBox[resultY][resultX] = 1;
      return raiderBox;
    })
  );
  const unionChara = raiderData.union_block.sort(
    (a, b) => b.block_level - a.block_level
  );
  return (
    <div
      className={`rounded-md p-1 shadow-md ${
        darkTheme ? " bg-gray-700" : "bg-blue-50"
      }`}
    >
      <h1 className="text-[20px] md:text-[25px] lg:text-[30px] text-center my-2 ">
        {data.union_grade} ({data.union_level})
      </h1>
      {/* 배치칸 랜더링 */}
      <div className="relative">
        <div className="grid grid-cols-22 unionRaider max-w-[310px] md:max-w-[620px] mx-auto">
          {raiderBox
            .reverse()
            .map((item) =>
              item.map((item, index) => (
                <div
                  key={`${id}-${index}-${item}`}
                  className={`flex ${
                    item === 1 ? "bg-orange-300" : "bg-gray-400"
                  } w-[15px] md:w-[30px] h-[15px] md:h-[30px]`}
                ></div>
              ))
            )}
        </div>
        {/* 배치칸 스텟 설명 absolute */}
        <div>
          {/* 바깥 스텟 */}
          <div className="grid grid-cols-4 absolute top-0 text-white textShadow whitespace-pre-wrap text-[16px] md:text-[20px] lg:text-[25px]">
            <span className="w-[30px] md:w-[60px] absolute top-[90px]  md:top-[180px] left-[15px] 3sm:left-[45px] md:left-[120px] lg:left-[250px] ">
              크뎀
            </span>
            <span className="w-[90px] md:w-[180px] absolute top-[25px] md:top-[50px] left-[60px] 3sm:left-[90px] md:left-[210px] lg:left-[340px] ">
              상태이상내성
            </span>
            <span className="w-[75px] md:w-[150px] absolute top-[25px]  md:top-[50px] left-[170px] 3sm:left-[200px] md:left-[450px] lg:left-[560px] ">
              획득경험치
            </span>
            <span className="w-[30px] md:w-[60px] absolute top-[90px] md:top-[180px] left-[270px] 3sm:left-[300px] md:left-[610px] lg:left-[740px] ">
              크확
            </span>
          </div>
          <div className="grid grid-cols-4 absolute bottom-0 text-white textShadow whitespace-pre-wrap text-[16px] md:text-[20px] lg:text-[25px]">
            <span className="w-[30px] md:w-[60px] absolute bottom-[90px] md:bottom-[180px] left-[15px] 3sm:left-[45px] md:left-[120px] lg:left-[250px] ">
              방무
            </span>
            <span className="w-[60px] md:w-[120px] absolute bottom-[25px] md:bottom-[50px] left-[90px] 3sm:left-[120px] md:left-[210px] lg:left-[370px] ">
              버프지속
            </span>
            <span className="w-[75px] md:w-[150px] absolute bottom-[25px] md:bottom-[50px] left-[170px] 3sm:left-[200px] md:left-[450px] lg:left-[560px] ">
              일뎀
            </span>
            <span className="w-[30px] md:w-[60px] absolute bottom-[90px] md:bottom-[180px] left-[270px] 3sm:left-[300px] md:left-[610px] lg:left-[740px] ">
              보뎀
            </span>
          </div>
          {/* 안쪽 스텟 */}
          <div className="grid grid-cols-4 whitespace-pre-wrap absolute top-0 text-white text-[12px] md:text-[16px] lg:text-[17px] textShadow">
            <span className="w-[45px] absolute top-[123px] md:top-[250px] left-[80px] 3sm:left-[110px] md:left-[240px] lg:left-[370px]  ">
              {raiderData.union_inner_stat[7].stat_field_effect
                .slice(4)
                .includes("최대")
                ? raiderData.union_inner_stat[7].stat_field_effect.slice(7)
                : raiderData.union_inner_stat[7].stat_field_effect.slice(4)}
            </span>
            <span className="w-[45px] absolute top-[85px] md:top-[170px] left-[108px] 3sm:left-[138px] md:left-[310px] lg:left-[436px]  ">
              {raiderData.union_inner_stat[0].stat_field_effect
                .slice(4)
                .includes("최대")
                ? raiderData.union_inner_stat[0].stat_field_effect.slice(7)
                : raiderData.union_inner_stat[0].stat_field_effect.slice(4)}
            </span>
            <span className="w-[45px] absolute top-[85px] md:top-[170px] left-[167px] 3sm:left-[197px] md:left-[420px] lg:left-[554px]  ">
              {raiderData.union_inner_stat[1].stat_field_effect
                .slice(4)
                .includes("최대")
                ? raiderData.union_inner_stat[1].stat_field_effect.slice(7)
                : raiderData.union_inner_stat[1].stat_field_effect.slice(4)}
            </span>
            <span className="w-[45px] absolute top-[123px] md:top-[246px] left-[200px] 3sm:left-[230px] md:left-[490px] lg:left-[620px]  ">
              {raiderData.union_inner_stat[2].stat_field_effect
                .slice(4)
                .includes("최대")
                ? raiderData.union_inner_stat[2].stat_field_effect.slice(7)
                : raiderData.union_inner_stat[2].stat_field_effect.slice(4)}
            </span>
          </div>
          <div className="grid grid-cols-4 whitespace-pre-wrap absolute bottom-0 text-white text-[12px] md:text-[16px] lg:text-[17px] textShadow">
            <span className="w-[45px] absolute bottom-[123px] md:bottom-[250px] left-[80px] 3sm:left-[110px] md:left-[240px] lg:left-[370px]  ">
              {raiderData.union_inner_stat[6].stat_field_effect
                .slice(4)
                .includes("최대")
                ? raiderData.union_inner_stat[6].stat_field_effect.slice(7)
                : raiderData.union_inner_stat[6].stat_field_effect.slice(4)}
            </span>
            <span className="w-[45px] absolute bottom-[85px] md:bottom-[170px] left-[108px] 3sm:left-[138px] md:left-[310px] lg:left-[436px]  ">
              {raiderData.union_inner_stat[5].stat_field_effect
                .slice(4)
                .includes("최대")
                ? raiderData.union_inner_stat[5].stat_field_effect.slice(7)
                : raiderData.union_inner_stat[5].stat_field_effect.slice(4)}
            </span>
            <span className="w-[45px] absolute bottom-[85px] md:bottom-[170px] left-[167px] 3sm:left-[197px] md:left-[420px] lg:left-[554px]  ">
              {raiderData.union_inner_stat[4].stat_field_effect
                .slice(4)
                .includes("최대")
                ? raiderData.union_inner_stat[4].stat_field_effect.slice(7)
                : raiderData.union_inner_stat[4].stat_field_effect.slice(4)}
            </span>
            <span className="w-[45px] absolute bottom-[123px] md:bottom-[246px] left-[200px] 3sm:left-[230px] md:left-[490px] lg:left-[620px]  ">
              {raiderData.union_inner_stat[3].stat_field_effect
                .slice(4)
                .includes("최대")
                ? raiderData.union_inner_stat[3].stat_field_effect.slice(7)
                : raiderData.union_inner_stat[3].stat_field_effect.slice(4)}
            </span>
          </div>
        </div>
      </div>
      {/* 보유캐릭터 */}
      <div className="flex flex-col mt-3 pb-3">
        <span className="text-center text-[20px] md:text-[25px] lg:text-[30px] mb-2">
          보유 캐릭터
        </span>
        <div className="grid grid-cols-2 ml-[3px] 3sm:ml-[15px] md:ml-[20px] lg:ml-[35px] md:grid-cols-3 lg:grid-cols-4">
          {unionChara.map((item) => (
            <span
              className="whitespace-pre text-[14px] lg:text-[16px]"
              key={
                id +
                item.block_class +
                item.block_level +
                item.block_control_point.x
              }
            >
              Lv{item.block_level} {item.block_class}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
