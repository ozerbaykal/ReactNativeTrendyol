interface User {
  id: string;
  user_name: string;
  mail: string;
  age: number;
  phone: string;
  adress: string;
  password: string;
}

interface AuthState {
  user: User[] | null;
  isLogin: boolean;
  isLoading: boolean;
  isError: any;
  token: string | null;
}

export type {AuthState, User};
