import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Checkbox,
  Avatar,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { MoreHoriz, CalendarToday } from "@mui/icons-material";
import type { FC, ChangeEvent, MouseEvent } from "react";

type OrderStatus =
  | "In Progress"
  | "Complete"
  | "Pending"
  | "Approved"
  | "Rejected";

interface RowData {
  id: string;
  user: string;
  avatar: string;
  project: string;
  address: string;
  date: string;
  status: OrderStatus;
}

interface StatusLabelProps {
  status: OrderStatus;
}

const rows: readonly RowData[] = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: "Kate Morrison",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026705d",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026706d",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026707d",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026708d",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    user: "Natali Craig",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026709d",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9807",
    user: "Kate Morrison",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026710d",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9808",
    user: "Drew Cano",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026711d",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9809",
    user: "Orlando Diggs",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026712d",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9810",
    user: "Andi Lane",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026713d",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

const StatusLabel: FC<StatusLabelProps> = ({ status }) => {
  const theme = useTheme();
  const statusConfig: Record<OrderStatus, { color: string }> = {
    "In Progress": { color: "#00B8D9" },
    Complete: { color: "#36B37E" },
    Pending: { color: "#FFAB00" },
    Approved: { color: "#FFAB00" },
    Rejected: { color: "#FF5630" },
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        component="span"
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor:
            statusConfig[status]?.color || theme.palette.text.secondary,
          mr: 1,
        }}
      />
      <Typography
        variant="body2"
        sx={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          color: statusConfig[status]?.color || theme.palette.text.secondary,
        }}
      >
        {status}
      </Typography>
    </Box>
  );
};

// --- ORDERS TABLE COMPONENT ---
function OrdersTable() {
  const [selected, setSelected] = useState<readonly string[]>(["#CM9804"]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_: MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Stack sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ scrollbarWidth: "none" }}>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={
                      selected.length > 0 && selected.length < rows.length
                    }
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={handleSelectAllClick}
                    inputProps={{ "aria-label": "select all orders" }}
                  />
                </TableCell>
                <TableCell
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  Order ID
                </TableCell>
                <TableCell>User</TableCell>
                <TableCell>Project</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const showCheckbox = hoveredRow === row.id || isItemSelected;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      onMouseEnter={() => setHoveredRow(row.id)}
                      onMouseLeave={() => setHoveredRow(null)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                          sx={{
                            opacity: showCheckbox ? 1 : 0,
                            transition: "opacity 0.2s",
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          {row.id}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            alt={row.user}
                            src={row.avatar}
                            sx={{ width: 24, height: 24, mr: 1.5 }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: "medium",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {row.user}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ maxWidth: 150 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {row.project}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ maxWidth: 180 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {row.address}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: "text.secondary",
                          }}
                        >
                          <CalendarToday sx={{ fontSize: 16, mr: 0.5 }} />
                          <Typography
                            variant="body2"
                            sx={{
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {row.date}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <StatusLabel status={row.status} />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <MoreHoriz />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 73 * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Stack>
    </Box>
  );
}

export default OrdersTable;
