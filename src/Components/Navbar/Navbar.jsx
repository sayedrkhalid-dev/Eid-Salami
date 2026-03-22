import { NAV_ITEMS } from "./../../Store/data";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(1);

  const handleActive = (id) => {
    setActive(id);
  };

  return (
    <nav className="bg-[#1A3C34]/85 w-full absolute bottom-0 left-0 border-t border-t-[#E9C46A] shadow-[0px_-10px_15px_-3px_rgba(0,0,0,0.2)] px-6 py-2">
      <ul className="flex justify-between items-center">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} onClick={() => handleActive(item.id)}>
            <a
              href="#"
              className="flex flex-col gap-1 justify-center items-center"
            >
              <span className="drop-shadow-lg">
                {active === item.id ? item.icon.active : item.icon.inActive}
              </span>
              <span className="text-xs text-[#E9C46A] font-semibold uppercase">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
