import { createContext, useContext, useState } from 'react'
import { jwtTokenLocalStorageKey } from '../../constants';
import { API_URL } from '../../env';
import { LoginUserModel, RegisterUserModel, User } from './model';

const authContext = createContext<any>(null);

export function ProvideAuth({ children }: any) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth: () => ProvideAuthApi = () => {
  return useContext(authContext);
};


function useProvideAuth(): ProvideAuthApi {
  const [user, setUser] = useState<User|null>(null);

  const signin = (model: LoginUserModel) => {
    const reqOption = {method: "POST", body : JSON.stringify(model), headers : {'Content-Type': 'application/json;charset=UTF-8'}}
    return fetch(API_URL + "/api/users/login", reqOption)
        .then(response => response.json())
        .then(data=> {
          setUser(new User(model.email))
          localStorage.setItem(jwtTokenLocalStorageKey, data.token)
        });
  };

  const signout = () => {
    localStorage.removeItem(jwtTokenLocalStorageKey)
  }

  const register = (model: RegisterUserModel) => {
    const reqOption = {method: "POST", body : JSON.stringify(model), headers : {'Content-Type': 'application/json;charset=UTF-8'}}
    return fetch(API_URL + "/api/users", reqOption)
  }

  return {
    user,
    signout,
    signin,
    register
  };
}

type ProvideAuthApi = {
  user: User | null;
  signout : () => void;
  signin: (model: LoginUserModel) => Promise<void>;
  register: (model: RegisterUserModel) => Promise<any>;
}
