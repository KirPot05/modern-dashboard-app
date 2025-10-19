import OrdersTable from "@/components/orders/orders-table";
import Toolbar from "@/components/orders/toolbar";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

type Props = {};

function OrdersPage({}: Props) {
  return (
    <Stack component="main" sx={{ p: 8, overflowX: "hidden" }}>
      <Typography variant="h4" gutterBottom mb={4}>
        Order List
      </Typography>

      <Stack spacing={4}>
        <Toolbar />
        <OrdersTable />
      </Stack>
    </Stack>
  );
}

export default OrdersPage;
