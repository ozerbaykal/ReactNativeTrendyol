interface Route {
  name: string;
}

interface TabIconProps {
  size: number;
  focused?: boolean;
  color: string;
  route: Route;
}

export type {TabIconProps};
