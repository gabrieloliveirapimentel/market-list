import { IconProps } from "@mui/material";
import Chip from "@mui/material/Chip";

export interface BadgeProps {
  label: string | undefined;
  color: string | undefined;
  backgroundColor: string | undefined;
  icon: React.ReactElement<IconProps> | undefined;
  isChecked?: boolean;
}

export default function Badge(props: BadgeProps) {
  return (
    <Chip
      icon={props.icon}
      label={props.label}
      sx={{
        paddingInline: "8px 12px",
        textTransform: "lowercase",
        backgroundColor: props.backgroundColor,
        color: props.color,
        fontWeight: 600,
        opacity: props.isChecked ? 0.5 : 1,
      }}
    />
  );
}
