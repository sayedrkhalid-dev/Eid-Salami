import {
  HomeIcon,
  HomeIconFilled,
  SalamiIcon,
  SalamiIconFilled,
  WishlistIcon,
  WishlistIconFilled,
  UserIcon,
  UserIconFilled,
} from "../icons/icons";

const icon_size = 32;

export const TABS = [
  {
    id: 1,
    label: "হোম",
    icon: {
      active: <HomeIconFilled size={icon_size} />,
      inActive: <HomeIcon size={icon_size} />,
    },
  },
  {
    id: 2,
    label: "সব",
    icon: {
      active: <SalamiIconFilled size={icon_size} />,
      inActive: <SalamiIcon size={icon_size} />,
    },
  },
  {
    id: 3,
    label: "প্রিয়",
    icon: {
      active: <WishlistIconFilled size={icon_size} />,
      inActive: <WishlistIcon size={icon_size} />,
    },
  },
  {
    id: 4,
    label: "প্রোফাইল",
    icon: {
      active: <UserIconFilled size={icon_size} />,
      inActive: <UserIcon size={icon_size} />,
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
