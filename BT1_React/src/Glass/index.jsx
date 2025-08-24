import ListGlass from "./listGlass";
export default function GlassShop() {
  return (
    <div className="w-full h-[500pxpx] bg-gradient-to-b from-black to-pink-900">
      <div className="relative h-screen ">
        <div className="absolute w-full h-[100px] bg-white/35 text-white font-bold text-2xl text-center items-center leading-[100px] ">
          TRY GLASSESS APP ONLINE
        </div>
        <ListGlass />
      </div>
    </div>
  );
}
