import { useState, useContext } from "react";
import useAPI from "../../Services/APIs/Common/useAPI";
import auth from "../../Services/APIs/Auth/Auth";

import * as Yup from "yup";
import UserInfoContext from "../../Store/UserInfo/UserInfoContext";
import LoginView from "./LoginView";

const LoginController = () => {
  const authLoginAPI = useAPI(auth.login);
  const [connectMessage, setConnectMessage] = useState("");
  const [connectCode, setConnectCode] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(UserInfoContext);

  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });

  const onClickLogin = (values) => {
    let infoSend = {
      email: values.email,
      password: values.password,
    };

    setConnectMessage("");
    setIsLoading(true);
    authLoginAPI
      .requestPromise(infoSend)
      .then((info) => {
        setIsLoading(false);
        console.log(info);
        setConnectCode(-1);
        setConnectMessage("Logado com sucesso");
        // context.onMakeLogin(info.token);
      })
      .catch((error) => {
        setIsLoading(false);
        setConnectCode(-1);
        console.log(error.data);
        if (error.status === 401) {
          setConnectMessage(error.data.message);
        } else {
          setConnectMessage("O servidor retornou um erro= " + error.status);
        }
      });
  };

  return (
    <LoginView
      isLoading={isLoading}
      connectMessage={connectMessage}
      signInSchema={signInSchema}
      onClickLogin={onClickLogin}
    />
  );
};

export default LoginController;
