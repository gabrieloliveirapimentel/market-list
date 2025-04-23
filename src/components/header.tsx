import { Container, Typography } from "@mui/material";
import backgroundImg from "../assets/background.png";

export function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        minHeight: "184px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Lista de Compras
        </Typography>
      </Container>
    </div>
  );
}
