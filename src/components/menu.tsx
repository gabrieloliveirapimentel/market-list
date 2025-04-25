import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Trash } from "lucide-react";
import { theme } from "../theme/global";
import { Typography } from "@mui/material";

interface MenuUsageProps {
  id: string;
  isChecked: boolean;
  deleteItem: (id: string) => void;
}

export default function MenuUsage({
  id,
  isChecked,
  deleteItem,
}: MenuUsageProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleDelete() {
    deleteItem(id);
    handleClose();
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ marginLeft: 1, color: theme.palette.primary.light }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: "14ch",
              marginTop: "4px",
              boxShadow: "none",
              borderRadius: "8px",
              backgroundColor: theme.palette.gray["gray-400"],
              border: `2px solid ${theme.palette.gray["gray-300"]}`,
              color: theme.palette.gray["gray-200"],
            },
          },
        }}
      >
        <MenuItem onClick={handleDelete} disabled={!isChecked}>
          <Trash color={theme.palette.error.main} />
          <Typography sx={{ ml: 2 }} variant="body1">
            Excluir
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
