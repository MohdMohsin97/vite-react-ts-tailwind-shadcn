import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">

    <div>
      <Button>Click Me</Button>
      <ModeToggle />
    </div>
    </ThemeProvider>
  );
}

export default App;
