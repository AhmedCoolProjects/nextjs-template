import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import { useContext, useMemo } from "react";
import { useRouter } from "next/router";
import { THEME } from "constants/Colors";
import { AppContext } from "contexts/AppContext";
import { Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Layout({ children }) {
  const [isDark] = useContext(AppContext);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",
          primary: THEME.primary,
          secondary: THEME.secondary,
        },
      }),
    [isDark]
  );
  const router = useRouter();
  const { pathname } = router;
  const isLogin = pathname === "/auth";
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {isLogin ? null : <TopNavbar />}
        {children}
        {isLogin ? null : <Footer />}
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
