import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Box,
  Button,
  Grid,
  Typography,
  CircularProgress,
  Input,
} from "@mui/material";
import "./Login.css";

const LoginVIew = ({
  isLoading,
  connectMessage,
  signInSchema,
  onClickLogin,
}) => {
  let infoMessage = null;
  let info = (
    <div>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </div>
  );

  if (isLoading) {
    info = (
      <div className="boxProgress">
        <CircularProgress color="primary" size={25} />
      </div>
    );
  }

  if (connectMessage !== "") {
    infoMessage = (
      <div className="infoErrorMessage">
        <Typography variant="minSize" color="error">
          {connectMessage}
        </Typography>
      </div>
    );
  }
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      className="gridClass"
    >
      <Grid item md={6} sm={6}>
        <Box className="boxLogin">
          <Typography variant="h1">Bem-vindo!</Typography>
          <p></p>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={signInSchema}
            onSubmit={onClickLogin}
          >
            {(formik) => {
              const { errors, setFieldValue } = formik;
              return (
                <Form>
                  <Input
                    label="Digite seu e-mail"
                    placeholder="mario@cqb.com.br"
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  />
                  <p></p>
                  <ErrorMessage
                    component="div"
                    className="errorMessage"
                    name="email"
                  />
                  <p></p>
                  <Input
                    label="Digite sua senha"
                    placeholder="**************"
                    type="password"
                    onChange={(e) => setFieldValue("password", e.target.value)}
                  />
                  <p></p>
                  <ErrorMessage
                    component="div"
                    className="errorMessage"
                    name="password"
                  />
                  {infoMessage}
                  {info}
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginVIew;