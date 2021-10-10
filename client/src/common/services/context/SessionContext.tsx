import { AxiosPromise } from 'axios';
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { IRegistration, IUser } from '../../types';
import { auth } from '../api/rest/auth/auth';
import { login } from '../api/rest/auth/login';
import { logout } from '../api/rest/auth/logout';
import { register } from '../api/rest/auth/registration';
import { uploadAvatar } from '../api/rest/files/avatar';

type ILogin = {
    email: string,
    password: string
}

type ISessionContext = {
    user: IUser;
    login: (data: ILogin) => Promise<void>; 
    register: (data: IRegistration) => Promise<void>;
    logout: () => Promise<void>;
    uploadAvatar: (data: FormData) => Promise<void>;
}

const SessionContext = createContext<Partial<ISessionContext>>({});

export const useSession = () => {
    return useContext(SessionContext)
}

export const SessionProvider = ({ children }: {children: ReactNode}) => {
    const [user, setUser] = useState<IUser>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async () => {
            if (!user) {
                try {
                    const response = await auth();
                    setUser(response.data);
                } catch(e) {
                    console.log(e);
                }
                setLoading(false);
            }
        })();
    }, [user])

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

    const uploadUserAvatar = async (data: FormData) => {
        const response = await uploadAvatar(data);
        setUser(response.data)
    } 

    const value = {
        user,
        login: loginUser,
        register: registerUser,
        logout: logoutUser,
        uploadAvatar: uploadUserAvatar
    }

    return (
        <SessionContext.Provider value={value}>
            {!loading && children}
        </SessionContext.Provider>
    )
}


