import { Milk, Beef, Apple, Carrot, Sandwich } from "lucide-react";
import { theme } from "../theme/global";

export interface CategoriesProps {
  id: number;
  label: string;
  color?: string;
  backgroundColor?: string;
  icon: React.ReactElement;
}

export const categories: CategoriesProps[] = [
  {
    id: 1,
    label: "Padaria",
    color: theme.palette.yellow.main,
    backgroundColor: theme.palette.yellow.dark,
    icon: <Sandwich color={theme.palette.yellow.main} />,
  },
  {
    id: 2,
    label: "Legume",
    color: theme.palette.green.main,
    backgroundColor: theme.palette.green.dark,
    icon: <Carrot color={theme.palette.green.main} />,
  },
  {
    id: 3,
    label: "Carne",
    color: theme.palette.pink.main,
    backgroundColor: theme.palette.pink.dark,
    icon: <Beef color={theme.palette.pink.main} />,
  },
  {
    id: 4,
    label: "Fruta",
    color: theme.palette.orange.main,
    backgroundColor: theme.palette.orange.dark,
    icon: <Apple color={theme.palette.orange.main} />,
  },
  {
    id: 5,
    label: "Bebida",
    color: theme.palette.blue.main,
    backgroundColor: theme.palette.blue.dark,
    icon: <Milk color={theme.palette.blue.main} />,
  },
];
