import { PasswordProvider } from "./providers/PasswordStateContext";
import { TechProvider } from "./providers/TechContext";
import { UserProvider } from "./providers/UserStateContext";
import { Router } from "./routes";

function App() {
  return (
    <UserProvider>
        <TechProvider>
        <PasswordProvider>
          <Router />
        </PasswordProvider>
        </TechProvider>
    </UserProvider>
  );
}

export default App;
