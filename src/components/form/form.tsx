import { useState } from "react";
import { Box, Fab, Grid } from "@mui/material";

import SelectCategory from "./select/select-category";
import SelectQuantity from "./select/select-quantity";
import { InputBase } from "./input";

import { Plus } from "lucide-react";

import { FormProvider, useForm } from "react-hook-form";

export function FormUsage() {
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("un");

  const handleChange = (newQuantity: number, newUnit: string) => {
    setQuantity(newQuantity);
    setUnit(newUnit);
  };

  const form = useForm({});

  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      <FormProvider {...form}>
        <form>
          <Grid
            container
            spacing={2}
            mb={6}
            mt={-9}
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <Grid sx={{ width: { md: "45%", xs: "100%" } }}>
              <InputBase />
            </Grid>
            <Grid sx={{ width: { md: "20%", xs: "100%" } }}>
              <SelectQuantity
                value={quantity}
                unit={unit}
                onChange={handleChange}
              />
            </Grid>
            <Grid sx={{ width: { md: "25%", xs: "100%" } }}>
              <SelectCategory />
            </Grid>
            <Grid>
              <Fab
                color="primary"
                type="submit"
                sx={{
                  mt: 3.5,
                }}
              >
                <Plus />
              </Fab>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Box>
  );
}
