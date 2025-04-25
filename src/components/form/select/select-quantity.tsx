import { useState } from "react";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  TextField,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import { theme } from "../../../theme/global";
import { ChevronDown, ChevronUp } from "lucide-react";
import { units } from "../../../data/data";
import { Controller, useFormContext } from "react-hook-form";

interface SelectQuantityProps {
  nameQuantity: string;
  nameUnit: string;
}

export default function SelectQuantity({
  nameQuantity,
  nameUnit,
}: SelectQuantityProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { register, control } = useFormContext();

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
          id="quantity"
          className="input-quantity"
          type="number"
          {...register(nameQuantity, { valueAsNumber: true })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          focused={isFocused}
          sx={{ width: "100%" }}
        />

        <Controller
          name={nameUnit}
          control={control}
          render={({ field }) => (
            <Select
              className="select-quantity"
              value={field.value}
              onChange={(e: SelectChangeEvent<string>) =>
                field.onChange(e.target.value)
              }
              onOpen={() => setIsOpen(true)}
              onClose={() => setIsOpen(false)}
              sx={{ height: "56px" }}
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
          )}
        />
      </Box>
    </Stack>
  );
}
