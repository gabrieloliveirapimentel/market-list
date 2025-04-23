import type React from "react";
import { useState } from "react";
import {
  Box,
  Select,
  MenuItem,
  type SelectChangeEvent,
  styled,
  InputBase,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Estilizando o container principal
const QuantityContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "240px",
}));

// Estilizando o container dos inputs
const InputContainer = styled(Box)<{ focused: boolean }>(
  ({ theme, focused }) => ({
    display: "flex",

    borderRadius: "4px",
    overflow: "hidden",
    backgroundColor: "#1e1e1e",
    transition: "all 0.2s ease",
  })
);

// Estilizando o input numérico
const QuantityInput = styled(InputBase)<{ focused: boolean }>(
  ({ theme, focused }) => ({
    flex: 1,
    border: `1px solid ${focused ? "#8a70d6" : "rgba(255, 255, 255, 0.2)"}`,
    color: "white",
    padding: "8px 12px",
    "& input": {
      textAlign: "center",
    },
  })
);

// Estilizando o select de unidades
const UnitSelect = styled(Select)<{ open: boolean }>(({ theme, open }) => ({
  color: "white",
  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",

  "& .MuiSelect-select": {
    padding: "8px 32px 8px 12px",
    backgroundColor: "transparent",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #8a70d6",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
}));

// Estilizando os itens do menu
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
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
    <QuantityContainer>
      <Typography>{label}</Typography>
      <InputContainer>
        <QuantityInput
          value={value}
          focused={focused}
          onChange={handleQuantityChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          inputProps={{ min: 0 }}
        />
        <UnitSelect
          value={unit}
          focused={open}
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
        </UnitSelect>
      </InputContainer>
    </QuantityContainer>
  );
}
