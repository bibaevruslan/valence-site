import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserModel {
    login: string;
    firstName: string;
    lastName: string;
    token: string
}

interface AuthContextType {
    user: UserModel | null;
    getUser: () => UserModel | null;
    userIsAuthenticated: () => boolean;
    userLogin: (user: UserModel) => void;
    userLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserModel | null>(null);

    useEffect(() => {
        const storedUser = getUser();
        setUser(storedUser);
    }, []);

    const getUser: UserModel = () => {
        return JSON.parse(localStorage.getItem('user'));
    };

    const userIsAuthenticated = () => {
        return localStorage.getItem('user') !== null;
    };

    const userLogin = (user: UserModel) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    };

    const userLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const contextValue: AuthContextType = {
        user,
        getUser,
        userIsAuthenticated,
        userLogin,
        userLogout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return authContext;
}
