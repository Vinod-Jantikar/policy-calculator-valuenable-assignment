import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";

export const AppLayout = () => {
  return (
    <Box
      sx={{
        bgcolor: "#13253A",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Outlet />
    </Box>
  );
};
