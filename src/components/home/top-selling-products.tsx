import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

type Props = {};
const products = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
];

function TopSellingProducts({}: Props) {
  const theme = useTheme();

  return (
    <Stack
      bgcolor="background.paper"
      boxShadow="none"
      p={6}
      borderRadius={4}
      spacing={1}
    >
      <Stack>
        <Typography variant="h4" sx={{ mb: 2, px: 4 }}>
          Top Selling Products
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  "& th": {
                    border: 0,
                    pb: 1.5,
                    color: "text.secondary",
                    fontWeight: theme.typography.fontWeightRegular,
                    fontSize: theme.typography.body2.fontSize,
                    textTransform: "none",
                  },
                }}
              >
                <TableCell>Name</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.name}
                  sx={{ "& td, & th": { border: 0, py: 1.5 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography variant="body1">{product.name}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body2">
                      ${product.price.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body2">{product.quantity}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body1">
                      $
                      {product.amount.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}

export default TopSellingProducts;
