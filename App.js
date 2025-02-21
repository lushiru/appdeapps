import { PaperProvider } from "react-native-paper";
import { AuthProvider } from "./src/contexts/AuthContext";
import { RootNavigation } from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
    </AuthProvider>
  );
}