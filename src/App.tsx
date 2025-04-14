import { Container, ThemeProvider } from "@mui/material";
import { ButtonUsage } from "./components/button";
import { theme } from "./theme/global";
import CategorySelect from "./components/select";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: "100%",
          backgroundColor: theme.palette.gray["gray-600"],
          height: "100vh",
        }}
      >
        <h1>App page!</h1>
        <ButtonUsage />
        <CategorySelect />
      </Container>
    </ThemeProvider>
  );
}
