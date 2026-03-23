// impoerted from react
import { useState } from "react";

// imported from local
import { TABS } from "../../assets/Store/data";

const Navbar = () => {
  const [active, setActive] = useState(1);

  const handleActive = (id) => {
    setActive(id);
  };

  return (
    <nav className=" bg-[#1A3C34]/85 border-t border-t-[#E9C46A] shadow-[0px_-10px_15px_-3px_rgba(0,0,0,0.2)] px-6 py-2">
      <ul className="flex justify-between items-center">
        {TABS.map((item) => (
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
