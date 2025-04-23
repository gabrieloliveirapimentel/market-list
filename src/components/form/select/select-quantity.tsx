import type React from "react";
import { useState } from "react";
import {
  Select,
  MenuItem,
  type SelectChangeEvent,
  styled,
  TextField,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Estilizando os itens do menu
const StyledMenuItem = styled(MenuItem)(() => ({
  backgroundColor: "#2a2a2a",
  color: "white",
  "&:hover": {
    backgroundColor: "#3a3a3a",
  },
  "&.Mui-selected": {
    backgroundColor: "#3a3a3a",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#444444",
  },
}));

// Estilizando o menu dropdown
const StyledMenu = {
  PaperProps: {
    style: {
      backgroundColor: "#2a2a2a",
      marginTop: "4px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    },
  },
};

interface QuantitySelectorProps {
  value: number;
  unit: string;
  onChange: (value: number, unit: string) => void;
  units?: { value: string; label: string }[];
  label?: string;
}

export default function SelectQuantity({
  value,
  unit,
  onChange,
  units = [
    { value: "un", label: "Un." },
    { value: "l", label: "L" },
    { value: "kg", label: "Kg" },
  ],
  label = "Quantidade",
}: QuantitySelectorProps) {
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseInt(e.target.value) || 0;
    onChange(newValue, unit);
  };

  const handleUnitChange = (e: SelectChangeEvent<string>) => {
    onChange(value, e.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <Stack spacing={1}>
      <Typography>{label}</Typography>
      <Grid>
        <TextField
          value={value}
          focused={focused}
          onChange={handleQuantityChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Select
          value={unit}
          onChange={handleUnitChange}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          IconComponent={open ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}
          MenuProps={StyledMenu}
        >
          {units.map((option) => (
            <StyledMenuItem key={option.value} value={option.value}>
              {option.label}
            </StyledMenuItem>
          ))}
        </Select>
      </Grid>
    </Stack>
  );
}
