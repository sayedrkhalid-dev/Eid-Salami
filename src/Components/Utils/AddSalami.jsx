const AddSalami = () => {
  return (
    <div
      className="flex items-center gap-4 p-6 rounded-2xl
    bg-primary-500/85
    shadow-[0_20px_50px_rgba(250, 249, 246, 0.5)]
    border border-neutral-400/50"
    >
      <form className="w-full flex flex-col gap-6">
        <legend className="text-lg text-neutral-50 font-bold">
          সালামি যোগ করুন
        </legend>

        <div className="flex flex-col gap-4">
          <label className="relative flex items-center gap-2">
            <span className="absolute text-xl pl-2">👨‍💼</span>
            <input
              type="text"
              placeholder="কার কাছ থেকে? (যেমন: চাচা)"
              onChange={(e) => console.log(e.target.value)}
              className="pl-10 w-full text-sm outline outline-neutral-400 rounded-lg px-2 py-3"
            />
          </label>

          <label className="relative flex items-center gap-2">
            <span className="absolute text-xl pl-2">💸</span>
            <input
              type="number"
              placeholder="পরিমাণ (টাকা)"
              className="pl-10 w-full text-sm outline outline-neutral-400 rounded-lg px-2 py-3"
            />
          </label>

          <input
            type="button"
            value="➕ সালামি যোগ করুন"
            onClick={() => console.log("hello")}
            className="bg-primary-600 hover:bg-primary-600/65 text-sm font-bold text-accent-500 border border-accent-500/30 px-2 py-4 rounded-lg cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddSalami;
