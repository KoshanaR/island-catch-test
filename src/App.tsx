import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Container, TextField } from "@mui/material";
import Form from "./components/Form";

function App() {
  return (
    <Box>
      <Container maxWidth="xl">
        <Form />
      </Container>
    </Box>
  );
}

export default App;
