import {
  Box,
  TextField,
  Autocomplete,
  Typography,
  Divider,
} from "@mui/material";
import {
  Milk,
  Beef,
  Apple,
  Carrot,
  Sandwich,
  Check,
  ChevronDown,
} from "lucide-react";
import { theme } from "../theme/global";
import { useState } from "react";

interface CategoriesProps {
  id: number;
  label: string;
  icon: React.ReactElement;
}

const categories: CategoriesProps[] = [
  {
    id: 1,
    label: "Padaria",
    icon: (
      <Sandwich color={theme.palette.yellow.main} style={{ marginRight: 4 }} />
    ),
  },
  {
    id: 2,
    label: "Legume",
    icon: <Carrot color={theme.palette.green.main} />,
  },
  {
    id: 3,
    label: "Carne",
    icon: <Beef color={theme.palette.pink.main} />,
  },
  {
    id: 4,
    label: "Fruta",
    icon: <Apple color={theme.palette.orange.main} />,
  },
  {
    id: 5,
    label: "Bebida",
    icon: <Milk color={theme.palette.blue.main} />,
  },
];

export default function CategorySelect() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Autocomplete
      id="category-select"
      sx={{
        width: 300,
      }}
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
            border: "2px solid",
            borderColor: theme.palette.gray["gray-300"],
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
              key={key}
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
      renderInput={(params) => <TextField {...params} label="Categoria" />}
    />
  );
}
