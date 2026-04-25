import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function DashTable({ columns, rows, renderRow }) {
  return (
    <TableContainer sx={{ textAlign: "center" }}>
      <Table
        sx={{
          background: "#FFFFFF",
          maxWidth: "95%",
          direction: "rtl",
          margin: "20px auto",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow sx={{ background: "#A0D7E24D" }}>
            {columns.map((cell) => (
              <TableCell key={cell.id} className="table-head-cell">
                {cell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{rows.map((row) => renderRow(row))}</TableBody>
      </Table>
    </TableContainer>
  );
}
