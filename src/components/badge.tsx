import { ChipProps, IconProps } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface BadgeProps {
  color: ChipProps["color"];
  label: string;
  icon: React.ReactElement<IconProps>;
}

export default function Badge(props: BadgeProps) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={props.icon} color={props.color} label={props.label} />
    </Stack>
  );
}
