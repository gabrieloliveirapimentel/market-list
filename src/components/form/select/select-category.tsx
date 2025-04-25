import {
  Box,
  TextField,
  Autocomplete,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import { Check, ChevronDown } from "lucide-react";
import { theme } from "../../../theme/global";
import { useState } from "react";
import { categories } from "../../../data/data";
import { Controller, useFormContext } from "react-hook-form";

export interface CategoriesProps {
  id: number;
  label: string;
  icon: React.ReactElement;
}

interface SelectCategoryProps {
  name: string;
}

export default function SelectCategory({ name }: SelectCategoryProps) {
  const { control } = useFormContext();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          id="category"
          popupIcon={
            <ChevronDown
              style={{
                color: isMenuOpen
                  ? theme.palette.primary.main
                  : theme.palette.gray["gray-200"],
              }}
            />
          }
          clearIcon={null}
          options={categories}
          value={categories.find((c) => c.label === field.value) || null}
          onChange={(_, value) => field.onChange(value?.label || "")}
          autoHighlight
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.label
          }
          noOptionsText="Nenhuma categoria encontrada"
          onOpen={() => setIsMenuOpen(true)}
          onClose={() => setIsMenuOpen(false)}
          slotProps={{
            paper: {
              sx: {
                backgroundColor: theme.palette.gray["gray-400"],
                border: `2px solid ${theme.palette.gray["gray-300"]}`,
                boxShadow: "none",
                borderRadius: "6px",
                marginTop: "4px",
              },
            },
          }}
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <Box>
                <Box
                  key={option.id}
                  component="li"
                  {...optionProps}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px",
                  }}
                >
                  {option.icon}
                  <Typography sx={{ ml: 2 }} variant="body1">
                    {option.label}
                  </Typography>
                  {selected && (
                    <Check
                      color={theme.palette.primary.main}
                      style={{ position: "absolute", right: 12 }}
                    />
                  )}
                </Box>
                {key !== "Bebida" && (
                  <Divider
                    component="li"
                    style={{
                      backgroundColor: theme.palette.gray["gray-300"],
                      height: "1px",
                    }}
                  />
                )}
              </Box>
            );
          }}
          renderInput={(params) => (
            <Stack spacing={1}>
              <Typography
                sx={{
                  color: isFocused
                    ? theme.palette.primary.main
                    : theme.palette.gray["gray-800"],
                }}
              >
                Categoria
              </Typography>
              <TextField
                className="input-base"
                placeholder="Selecione"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...params}
              />
            </Stack>
          )}
        />
      )}
    />
  );
}
