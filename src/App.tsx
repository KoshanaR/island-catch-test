import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Container, TextField } from "@mui/material";
import Form from "./components/Form";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { Rehydrated } from "aws-appsync-react";

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
