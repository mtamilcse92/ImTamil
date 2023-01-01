import { useTheme } from "next-themes";
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import type { Mode } from '@anatoliygatt/dark-mode-toggle';

export default function ThemeToggle() {
  const { theme = "dark", setTheme } = useTheme();
  const toggleState = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <DarkModeToggle
        onChange={toggleState}
        mode={theme as Mode}
      />
  );
}
