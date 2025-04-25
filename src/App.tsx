import {
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme } from "./theme/global";
import { ListCardItem } from "./components/card";
import { useCallback, useEffect, useState } from "react";
import { Header } from "./components/header";
import { Grid } from "@mui/material";
import { FormUsage } from "./components/form/form";
import { api } from "./lib/axios";

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

  const fetchProducts = useCallback(async (query?: string) => {
    const response = await api.get("/products", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setItems(response.data);
  }, []);

  const createProduct = useCallback(async (data: ItemProps) => {
    const response = await api.post("/products", data);

    setItems((state) => [response.data, ...state]);
  }, []);

  const deleteProduct = useCallback(async (id: string) => {
    await api.delete(`/products/${id}`);
    setItems((state) => state.filter((item) => item.id !== id));
  }, []);

  const checkItem = useCallback(
    async (id: string) => {
      const item = items.find((item) => item.id === id);

      if (item) {
        const updatedItem = { ...item, isChecked: !item.isChecked };

        await api.put(`/products/${id}`, updatedItem);
        setItems((state) =>
          state.map((item) => (item.id === id ? updatedItem : item))
        );
      }
    },
    [items]
  );

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Container>
        <FormUsage addItem={createProduct} />

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
                setIsChecked={checkItem}
                deleteItem={deleteProduct}
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
