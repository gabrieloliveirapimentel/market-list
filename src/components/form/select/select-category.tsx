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

export interface CategoriesProps {
  id: number;
  label: string;
  icon: React.ReactElement;
}

export default function SelectCategory() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Autocomplete
      id="category-select"
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
      autoHighlight
      getOptionLabel={(option) => option.label}
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
              style={{ display: "flex", alignItems: "center", padding: "12px" }}
            >
              {option.icon}
              <Typography
                sx={{
                  ml: 2,
                }}
                variant="body1"
              >
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
  );
}
