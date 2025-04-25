import {
  Box,
  Typography,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconProps,
} from "@mui/material";
import Badge from "./badge";
import { theme } from "../theme/global";
import { categories } from "../data/data";
import MenuUsage from "./menu";

interface ListProps {
  isChecked: boolean;
  setIsChecked: (id: string) => void;
  deleteItem: (id: string) => void;
}

interface ItemSecondaryProps {
  item: ItemProps;
  deleteItem: (id: string) => void;
}

interface ItemProps extends ListProps {
  id: string;
  label: string;
  category: string;
  quantity: number;
  unit: string;
}

export function ListCardItem(item: ItemProps) {
  return (
    <ListItem
      key={item.id}
      sx={{
        border: "1px solid",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: item.isChecked
          ? theme.palette.gray["gray-500"]
          : theme.palette.gray["gray-400"],
        borderColor: item.isChecked
          ? theme.palette.gray["gray-400"]
          : theme.palette.gray["gray-300"],
      }}
      secondaryAction={
        <ListItemSecondaryAction item={item} deleteItem={item.deleteItem} />
      }
    >
      <ListItemIcon>
        <Checkbox
          sx={{
            color: theme.palette.primary.light,
            "&.Mui-checked": {
              color: theme.palette.success.main,
            },
            "&.Mui-checked:hover": {
              color: theme.palette.success.light,
            },
          }}
          checked={item.isChecked}
          onChange={() => item.setIsChecked(item.id)}
        />
      </ListItemIcon>
      <ListItemText
        style={item.isChecked ? { opacity: 0.5 } : {}}
        primary={
          <Typography
            variant="subtitle1"
            sx={[
              { fontWeight: 700 },
              item.isChecked ? { textDecoration: "line-through" } : {},
            ]}
          >
            {item.label}
          </Typography>
        }
        secondary={
          <Typography variant="body2" color={theme.palette.gray["gray-200"]}>
            {item.quantity} {item.unit}
          </Typography>
        }
      />
    </ListItem>
  );
}

function ListItemSecondaryAction({ item, deleteItem }: ItemSecondaryProps) {
  const itemCategory = categories.find(
    (category) => category.label === item.category
  );

  return (
    <Box sx={[{ display: "flex", alignItems: "center" }]}>
      <Badge
        color={itemCategory?.color}
        backgroundColor={itemCategory?.backgroundColor}
        label={itemCategory?.label}
        icon={itemCategory?.icon as React.ReactElement<IconProps>}
        isChecked={item?.isChecked}
      />
      <MenuUsage
        id={item.id}
        isChecked={item.isChecked}
        deleteItem={deleteItem}
      />
    </Box>
  );
}
