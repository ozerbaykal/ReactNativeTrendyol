import {string} from 'yup';

interface Name {
  firstname: string;
  lastname: string;
}
interface AvatarProps {
  name: Name | undefined;
  image?: string;
  size?: number;
}

export type {AvatarProps};
