import {
  Home,
  HomeFilled,
  Salami,
  SalamiFilled,
  Wishlist,
  WishlistFilled,
  Profile,
  ProfileFilled,
} from "../Components/Icons/Icons";

const icon_size = 38;

export const NAV_ITEMS = [
  {
    id: 1,
    label: "হোম",
    icon: {
      active: <HomeFilled size={icon_size} />,
      inActive: <Home size={icon_size} />,
    },
  },
  {
    id: 2,
    label: `সব সালামি`,
    icon: {
      active: <SalamiFilled size={icon_size} />,
      inActive: <Salami size={icon_size} />,
    },
  },
  {
    id: 3,
    label: "প্রিয়",
    icon: {
      active: <WishlistFilled size={icon_size} />,
      inActive: <Wishlist size={icon_size} />,
    },
  },
  {
    id: 4,
    label: "প্রোফাইল",
    icon: {
      active: <ProfileFilled size={icon_size} />,
      inActive: <Profile size={icon_size} />,
    },
  },
];

export const SALAMI = {
  id: 1,
  type: {
    salami: "salami",
    gift: "gift",
  },
  from: "Brother",
  to: "Sister",
  amount: 5000,
};
