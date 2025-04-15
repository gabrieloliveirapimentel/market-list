import { ThemeProvider, Typography } from "@mui/material";
import { ButtonUsage } from "./components/button";
import { theme } from "./theme/global";
import CategorySelect from "./components/select";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h5">App page!</Typography>
      <ButtonUsage />
      <CategorySelect />
    </ThemeProvider>
  );
}
