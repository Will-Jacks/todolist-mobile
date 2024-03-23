import { createContext, useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

export const UserRegistrationContext = createContext();

export const useUserRegistrationContext = () => {
    return useContext(UserRegistrationContext);
}

class UserData {
    constructor(username, password, name, email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
    }
}

export function UserRegistrationProvider({ children }) {

    const [userLogin, setUserLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const userRegister = () => {
        const newUser = new UserData(userLogin, userPassword, username, email);

        console.log(newUser)
        //Futura lógica de armazenamento do banco de dados
    }

    return (
        <UserRegistrationContext.Provider value={{
            userLogin, setUserLogin
            , userPassword, setUserPassword
            , username, setUsername
            , email, setEmail, userRegister
        }}>
            {children}
        </UserRegistrationContext.Provider>
    )
}