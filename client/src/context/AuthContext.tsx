import { AxiosPromise } from 'axios';
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { IRegistration, IUser } from '../common/types';
import { auth } from '../services/api/rest/auth/auth';
import { login } from '../services/api/rest/auth/login';
import { logout } from '../services/api/rest/auth/logout';
import { register } from '../services/api/rest/auth/registration';

type ILogin = {
    email: string,
    password: string
}

type IAuthContext = {
    user: IUser;
    login: (data: ILogin) => Promise<void>; 
    register: (data: IRegistration) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<Partial<IAuthContext>>({});

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: {children: ReactNode}) => {
    const [user, setUser] = useState<IUser>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async () => {
            try {
                const response = await auth();
                setUser(response.data);
            } catch(e) {
                console.log(e);
            }
            setLoading(false);
        })();
    }, [])

    const loginUser = async (data: ILogin) => {
        const response = await login(data);
        setUser(response.data);
    };

    const registerUser = async (data: IRegistration) => {
        const response = await register(data);
        setUser(response.data);
    }

    const logoutUser = async () => {
        const response = await logout();
        if (response.status === 200) {
            setUser(null);
        }
    }

    const value = {
        user,
        login: loginUser,
        register: registerUser,
        logout: logoutUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


