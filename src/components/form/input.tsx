import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { theme } from "../../theme/global";

interface InputBaseProps {
  name: string;
}

export function InputBase({ name }: InputBaseProps) {
  const { register } = useFormContext();
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const registerField = register(name);

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
        id={name}
        variant="outlined"
        placeholder="Digite o nome"
        {...registerField}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          registerField.onBlur(e);
        }}
      />
    </Stack>
  );
}
