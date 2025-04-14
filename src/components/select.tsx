import { Box, TextField, Autocomplete, Typography } from "@mui/material";
import { Milk, Beef, Apple, Carrot, Sandwich, Check } from "lucide-react";
import { theme } from "../theme/global";

export default function CategorySelect() {
  return (
    <Autocomplete
      id="category-select"
      sx={{ width: 300 }}
      options={categories}
      autoHighlight
      getOptionLabel={(option) => option.label}
      noOptionsText="Nenhuma categoria encontrada"
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <Box key={key} component="li" {...optionProps}>
            {option.icon}

            <Typography
              sx={{
                ml: 2,
                color: theme.palette.primary.main,
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
        );
      }}
      renderInput={(params) => <TextField {...params} label="Categoria" />}
    />
  );
}
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
