import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import EditDialog from "./EditDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, Box, Collapse } from "@mui/material";
import TimelineAccordion from "./TimelineAccordion";
import DeleteDialog from "./DeleteDialog";
import EditNoteIcon from "@mui/icons-material/EditNote";

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
