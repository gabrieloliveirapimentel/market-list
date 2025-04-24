import type React from "react";
import { useState } from "react";
import {
  Select,
  MenuItem,
  type SelectChangeEvent,
  TextField,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { theme } from "../../../theme/global";
import { ChevronDown, ChevronUp } from "lucide-react";
import { units } from "../../../data/data";

interface QuantitySelectorProps {
  value: number;
  unit: string;
  onChange: (value: number, unit: string) => void;
}

export default function SelectQuantity({
  value,
  unit,
  onChange,
}: QuantitySelectorProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseInt(e.target.value) || 0;
    onChange(newValue, unit);
  };

  const handleUnitChange = (e: SelectChangeEvent<string>) => {
    onChange(value, e.target.value);
  };

  return (
    <Stack spacing={1}>
      <Typography
        sx={{
          color: isFocused
            ? theme.palette.primary.main
            : theme.palette.gray["gray-800"],
        }}
      >
        Quantidade
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <TextField
          className="input-quantity"
          value={value}
          onChange={handleQuantityChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          focused={isFocused}
          sx={{ width: "100%" }}
        />
        <Select
          className="select-quantity"
          value={unit}
          MenuProps={{
            PaperProps: {
              sx: {
                color: theme.palette.gray["gray-200"],
                backgroundColor: theme.palette.gray["gray-400"],
                border: `2px solid ${theme.palette.gray["gray-300"]}`,
                boxShadow: "none",
                borderRadius: "6px",
                marginTop: "4px",
              },
            },
          }}
          IconComponent={() =>
            isOpen ? (
              <ChevronUp
                size={72}
                style={{
                  paddingRight: "8px",
                  color: theme.palette.primary.main,
                }}
              />
            ) : (
              <ChevronDown
                size={72}
                style={{
                  paddingRight: "8px",
                  color: theme.palette.gray["gray-200"],
                }}
              />
            )
          }
          onChange={handleUnitChange}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          sx={{ height: "56px" }}
        >
          {units.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                padding: "12px",
                color: theme.palette.gray["gray-100"],
                borderBottom:
                  option.value === "Quilograma"
                    ? ""
                    : `2px solid ${theme.palette.gray["gray-300"]}`,
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Stack>
  );
}
