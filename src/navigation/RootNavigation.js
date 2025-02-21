import { useAuth } from "../hooks/useAuth";
import { AuthScreen } from "../screens/Auth/AuthScreen";
import { AppNavigation } from "./AppNavigation";

export function RootNavigation() {
    const  { user }  = useAuth();
    return user ? <AppNavigation /> : <AuthScreen />;
}