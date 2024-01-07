import { createContext, useContext, useReducer } from "react";

type AuthContextProps = {
  children: React.ReactNode;
};

type User = {
  name: string;
};

type action = {
    type: string
    payload : string
}

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state : any, action : action) => {
  switch (action.type) {
    case "login":
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unkwon actions !!");
  }
};

const FAKE_USER = {
  name: "mohammad",
  email: "user@gmail.com",
  password: "123456",
};

const AuthContextProvider = ({ children } : AuthContextProps) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  const Login = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  };
  const LogOut = () => {
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, Login, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
