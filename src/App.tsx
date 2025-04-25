import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme } from "./theme/global";
import { ListCardItem } from "./components/card";
import { useState } from "react";
import { Header } from "./components/header";
import { Grid } from "@mui/material";
import { FormUsage } from "./components/form/form";

interface ItemProps {
  id: string;
  label: string;
  category: string;
  quantity: number;
  unit: string;
  isChecked: boolean;
}

export function App() {
  const [items, setItems] = useState<ItemProps[]>([]);

  function handleCheckItem(id: string) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      }
      return item;
    });
    setItems(updatedItems);
  }

  function handleAddItem(newItem: ItemProps) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleDeleteItem(id: string) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Container>
        <FormUsage addItem={handleAddItem} />

        <Grid container spacing={2} mb={6}>
          {items.length > 0 ? (
            items.map((item) => (
              <ListCardItem
                key={item.id}
                id={item.id}
                label={item.label}
                category={item.category}
                quantity={item.quantity}
                unit={item.unit}
                isChecked={item.isChecked}
                setIsChecked={handleCheckItem}
                deleteItem={handleDeleteItem}
              />
            ))
          ) : (
            <Typography variant="body1" color={theme.palette.gray["gray-200"]}>
              Nenhum item encontrado
            </Typography>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
