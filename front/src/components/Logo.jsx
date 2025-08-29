import { UserRoundCog } from "lucide-react";

export const Logo = () => {
  return (
    <div className="py-2.5 flex items-center gap-2 text-center justify-center text-green-700">

      {/*  SVG or image, use <img src={logo} ... /> */}
      <UserRoundCog className="w-10 h-10 " />
      <div>
        <span className="block text-lg font-semibold tracking-wide leading-tight">AGRO</span>
        <span className="block text-2xl font-extrabold tracking-widest leading-tight -mt-1">MANAGER</span>
      </div>
    </div>
  );
}