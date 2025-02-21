import { PaperProvider } from "react-native-paper";
import { RootNavigation } from "./src/navigation/RootNavigation";

export default function App() {
  return (
      <PaperProvider>
        <RootNavigation />
      </PaperProvider>
  );
}