import Footer from "./Footer";
import TopNavbar from "./TopNavbar";
import { useContext, useMemo } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import { useRouter } from "next/router";
import { THEME } from "constants/Colors";
import { AppContext } from "contexts/AppContext";

function Layout({ children }) {
  const [isDark] = useContext(AppContext);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: isDark ? "dark" : "light",
          primary: THEME.primary,
          secondary: THEME.secondary,
        },
      }),
    [isDark]
  );
  const router = useRouter();
  const { pathname } = router;
  const isLogin = pathname === "/login";
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {isLogin ? null : <TopNavbar />}
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Layout;