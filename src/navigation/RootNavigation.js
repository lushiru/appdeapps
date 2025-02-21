import { useState, useEffect } from "react";
//import { storageCrtl } from "../api/storage";
//import { userCtrl } from "../api/user";
import { AuthScreen } from "../screens/Auth/AuthScreen";
import { AppNavigation } from "./AppNavigation";
import { Text } from "react-native-paper";

export function RootNavigation() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    /*useEffect(() => {
        retrieveSession();
    }, []);*/

    /*const retrieveSession = async () => {
        const token = await storageCrtl.getToken();

        if (!token) {
            setUser(null);
            setLoading(false);
        } else {
            await login(token);
        }
    };

    const login = async (token) => {
    
        try {
          const response = await userCtrl.getMe(token);
          setUser(response);
          setLoading(false);
        } catch (error) {
          setUser(null);
          setLoading(false);
        }
      };*/

    if(loading) return <Text>Cargando!!</Text>

    return user ? <AppNavigation /> : <AuthScreen changeUser={setUser} />;
}