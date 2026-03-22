import TotalSalami from "../Utils/TotalSalami";
import { EidMubarak } from "../Icons/Icons";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-2 mt-20">
        <div className="flex items-center gap-2 mx-auto">
          <EidMubarak size={36} />
          <h1 className="text-2xl font-bold">ঈদ মোবারক</h1>
        </div>
        <TotalSalami />
      </div>
    </>
  );
};

export default Home;
