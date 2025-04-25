import { Box, Fab, Grid } from "@mui/material";
import { Plus } from "lucide-react";

import SelectCategory from "./select/select-category";
import SelectQuantity from "./select/select-quantity";
import { InputBase } from "./input";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  productName: z.string().min(1, "Nome do produto é obrigatório"),
  quantity: z
    .number({ invalid_type_error: "Quantidade deve ser um número" })
    .min(1, "Quantidade deve ser maior que 0"),
  unit: z.string().min(1, "Unidade é obrigatória"),
  category: z.string().min(1, "Categoria é obrigatória"),
});

type FormSchema = z.infer<typeof formSchema>;

interface ItemProps {
  id: string;
  label: string;
  category: string;
  quantity: number;
  unit: string;
  isChecked: boolean;
}

interface FormProps {
  addItem: (item: ItemProps) => void;
}

export function FormUsage({ addItem }: FormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      quantity: 1,
      unit: "unidade",
      category: "",
    },
  });

  const { handleSubmit, reset } = form;

  const onSubmit = (data: FormSchema) => {
    const formattedData = {
      id: crypto.randomUUID(),
      label: data.productName,
      category: data.category,
      quantity: data.quantity,
      unit: data.unit,
      isChecked: false,
    };

    addItem(formattedData);
    reset();
  };

  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid
            container
            spacing={2}
            mb={6}
            mt={-9}
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <Grid sx={{ width: { md: "45%", xs: "100%" } }}>
              <InputBase name="productName" />
            </Grid>
            <Grid sx={{ width: { md: "20%", xs: "100%" } }}>
              <SelectQuantity nameQuantity="quantity" nameUnit="unit" />
            </Grid>
            <Grid sx={{ width: { md: "25%", xs: "100%" } }}>
              <SelectCategory name="category" />
            </Grid>
            <Grid>
              <Fab
                color="primary"
                type="submit"
                sx={{
                  mt: 3.5,
                }}
              >
                <Plus />
              </Fab>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Box>
  );
}
