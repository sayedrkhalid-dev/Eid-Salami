import TotalSalami from "../Utils/TotalSalami";
import { EidMubarakIcon } from "../../assets/icons/icons";
import AddSalami from "../Utils/AddSalami";
import SalamiHistory from "../Utils/SalamiHistory";

const Home = () => {
  return (
    <section className="overflow-y-scroll md:[&::-webkit-scrollbar]:w-1 md:[&::-webkit-scrollbar-thumb]:bg-neutral-400 md:[&::-webkit-scrollbar-thumb]:rounded-full">
      <div className="flex flex-col justify-center gap-2 p-6">
        <div className="flex items-center gap-2 mx-auto">
          <EidMubarakIcon size={36} />
          <h1 className="text-2xl font-bold">ঈদ মোবারক</h1>
        </div>

        <TotalSalami />
        <AddSalami />
        <SalamiHistory />
      </div>
    </section>
  );
};

export default Home;
