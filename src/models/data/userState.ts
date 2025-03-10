interface Name {
  firstname: string;
  lastname: string;
}
interface Geolocation {
  lat: string;
  long: string;
}
interface Adress {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface User {
  id: number;
  name: Name;
  email: string;
  phone: string;
  address: Adress;
  username: string;
}

interface UserState {
  user: User | null;

  isLoading: boolean;
  isError: any;
  //token: string | null;
}

export type {UserState};
