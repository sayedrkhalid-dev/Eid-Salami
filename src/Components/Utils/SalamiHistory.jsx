import EmptySalami from "./EmptySalami";

const SalamiHistory = () => {
  return (
    <div
      className="flex flex-col gap-10 p-6 rounded-2xl
    bg-primary-500/85
    shadow-[0_20px_50px_rgba(250, 249, 246, 0.5)]
    border border-neutral-400/50"
    >
      <h2 className="flex gap-2 text-lg font-bold">
        <span>📋</span>
        সালামি ইতিহাস
      </h2>

      <EmptySalami />
    </div>
  );
};

export default SalamiHistory;
