import { CharacterProvider } from "./characters";
import { UserProvider } from "./user";

export const Providers = ({ children }) => {
  return (
    <CharacterProvider>
      <UserProvider>{children}</UserProvider>
    </CharacterProvider>
  );
};
