import { useState } from "react";
import data from "./data.json";

export default function ListGlass() {
  // ban đầu chọn kính đầu tiên trong data
  const [selectedGlass, setSelectedGlass] = useState(data[0]);

  // hiển thị kính đang chọn trên modal
  const MakupModal = () => {
    if (!selectedGlass) return null;
    return (
      <div key={selectedGlass.id}>
        <div className="absolute top-[95px] left-[150px] -translate-x-1/2 opacity-65">
          <img src={selectedGlass.url} alt="" width={150} />
        </div>
        <div className="absolute w-full bg-orange-400 h-[120px] bottom-0 opacity-65">
          <div className="px-3">
            <h3 className="text-blue-800 text-lg font-semibold">
              {selectedGlass.name}
            </h3>
            <p className="text-white font-semibold">{selectedGlass.desc}</p>
          </div>
        </div>
      </div>
    );
  };

  // click đổi kính
  const handleChangeGlass = (glass) => {
    setSelectedGlass(glass);
  };

  return (
    <div className="relative container mx-auto">
      <div className="gap-[180px] flex items-center justify-center pt-[200px] pb-20">
        <div className="relative">
          <div>
            <img src="./image/model.jpg" alt="" width={300} />
          </div>
          <div>{MakupModal()}</div>
        </div>
      </div>

      {/* list kính để chọn */}
      <div className="relative w-full h-[250px] bg-white/80">
        <div className="flex flex-wrap gap-10 pt-6 pl-6">
          {data.map((glass) => (
            <div key={glass.id}>
              <button
                onClick={() => handleChangeGlass(glass)}
                className="cursor-pointer"
              >
                <img src={glass.url} alt="" width={200} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
