import { useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { theme } from "../../theme/global";

export function InputBase() {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Stack spacing={1}>
      <Typography
        sx={{
          color: isFocused
            ? theme.palette.primary.main
            : theme.palette.gray["gray-800"],
        }}
      >
        Item
      </Typography>
      <TextField
        className="input-base"
        id="item-field"
        label=""
        variant="outlined"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Stack>
  );
}
