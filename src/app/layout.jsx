import ThemeToggle from "./components/global/ThemeToggle";
import TanstackProvider from "./context/TanstackProvider";
import ThemeContextProvider from "./context/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "add title for meta!",
  description: "add description for meta!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <TanstackProvider>
            <ThemeToggle />
            {children}
          </TanstackProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
