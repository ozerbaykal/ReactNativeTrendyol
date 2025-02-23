interface Route {
  name: String;
}

interface TabIconProps {
  size: Number;
  focused: boolean;
  color: String;
  route: Route;
}

export type {TabIconProps};
