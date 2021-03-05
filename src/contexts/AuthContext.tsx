import { createContext, ReactNode } from "react";
import { useSession } from "next-auth/client";

import Loading from "../components/Loading";

import Login from "../pages/login";
import { SideBar } from "../components/SideBar";

interface AuthContextData {}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, loading] = useSession();

  return (
    <AuthContext.Provider value={{}}>
      {loading && <Loading />}

      {!session && <Login />}

      {session && (
        <>
          <SideBar />

          <main>{children}</main>
        </>
      )}
    </AuthContext.Provider>
  );
}
