import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Advent contest</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
