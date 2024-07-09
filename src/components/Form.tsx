import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createForm } from "../graphql/mutations";
// import { API } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { listForms } from "../graphql/queries";

interface SampleForm {
  name: string;
  email: string;
  designation: string;
}

const Form = () => {
  const [formFields, setFormFields] = useState<SampleForm>({
    name: "",
    email: "",
    designation: "",
  });
  const [data, setData] = useState<SampleForm[]>([]);

  const client = generateClient();

  const createDetails = async () => {
    if (
      formFields.name !== "" ||
      formFields.designation !== "" ||
      formFields.email !== ""
    ) {
      // DataStore.save({
      //   name: formFields.name,
      //   email: formFields.email,
      //   designation: formFields.designation,
      //   createdAt: new Date().toISOString(),
      // })
      //   .then(() => {
      //     console.log("created");
      //   })
      //   .catch((e) => {
      //     console.log("error : ", e.message);
      //   });

      // DataStore.query(
      //   { name: String!, email: String!, designation: String! },
      //   Predicates
      // );

      const data = {
        name: formFields.name,
        email: formFields.email,
        designation: formFields.designation,
      };

      await client.graphql({ query: createForm, variables: { input: data } });

      fetchData();

      setFormFields({
        name: "",
        email: "",
        designation: "",
      });
    }
  };

  const fetchData = async () => {
    const apiData = await client.graphql({ query: listForms });

    const dataFromApi = apiData.data.listForms.items;

    setData(dataFromApi);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        p: "40px",
      }}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", height: "100%" }}
        spacing={"10px"}
      >
        <TextField
          placeholder="Name"
          value={formFields.name}
          onChange={(e) => {
            setFormFields({
              ...formFields,
              name: e.target.value,
            });
          }}
          fullWidth
        />
        <TextField
          placeholder="Email"
          type="email"
          value={formFields.email}
          onChange={(e) => {
            setFormFields({
              ...formFields,
              email: e.target.value,
            });
          }}
          fullWidth
        />
        <TextField
          placeholder="Designation"
          value={formFields.designation}
          onChange={(e) => {
            setFormFields({
              ...formFields,
              designation: e.target.value,
            });
          }}
          fullWidth
        />
        <Button
          onClick={createDetails}
          fullWidth
          color="success"
          variant="contained"
        >
          Submit
        </Button>
        <Box mt="40px" p="10px">
          <pre>{JSON.stringify(data, null, "\t")}</pre>
        </Box>
      </Stack>
    </Box>
  );
};

export default Form;
