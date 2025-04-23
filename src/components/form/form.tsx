import { FormControl, Grid } from "@mui/material";
import SelectCategory from "./select/select-category";
import SelectQuantity from "./select/select-quantity";
import { useState } from "react";
import { InputBase } from "./input";

export function FormUsage() {
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("un");

  const handleChange = (newQuantity: number, newUnit: string) => {
    setQuantity(newQuantity);
    setUnit(newUnit);
  };

  return (
    <Grid sx={{ marginBlock: "-25px 40px" }} container>
      <form>
        <FormControl
          fullWidth
          sx={{ display: "flex", flexDirection: "row", gap: "12px" }}
        >
          <InputBase />
          <SelectQuantity
            value={quantity}
            unit={unit}
            onChange={handleChange}
          />
          <SelectCategory />
        </FormControl>
      </form>
    </Grid>
  );
}
