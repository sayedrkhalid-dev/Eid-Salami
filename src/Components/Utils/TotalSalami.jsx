import { SalamiIconFilled } from "../../assets/icons/icons";

const TotalSalami = () => {
  return (
    <div
      className="relative overflow-hidden flex items-center gap-4 p-6 rounded-2xl
      bg-[#1A3C34]/90
      text-[#FAF9F6]
      shadow-[0_20px_50px_rgba(250, 249, 246, 0.5)]
      border border-white/20"
    >
      {/* Icon with Glass Effect */}
      <div
        className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl
        bg-white/10 backdrop-blur-md border border-white/20
        shadow-inner"
      >
        <SalamiIconFilled size={30} />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col">
        <h2 className="text-sm tracking-widest uppercase text-[#FAF9F6]/70">
          মোট সালামি
        </h2>

        <span
          className="text-3xl font-extrabold leading-tight
          bg-gradient-to-r from-[#E9C46A] to-[#F4A261]
          bg-clip-text text-transparent"
        >
          ৳ ০
        </span>

        {/* Subtle info line */}
        <span className="text-sm text-[#FAF9F6]/60 mt-1">
          এই ঈদে আপনার মোট সংগ্রহ
        </span>
      </div>
    </div>
  );
};

export default TotalSalami;
