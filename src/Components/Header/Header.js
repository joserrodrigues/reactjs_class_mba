import React, { useContext } from "react";
import UserInfoContext from "../../Store/UserInfo/UserInfoContext";
import { Typography, Grid, Stack } from "@mui/material";

import "./Header.css";

const Header = () => {
  const context = useContext(UserInfoContext);
  let userInitial = context.userInfo.userName[0];
  return (
    <>
      <Grid container spacing={3} alignItems="center" className="gridHeader">
        <Grid item lg={6} xl={6} className="leftHeader"></Grid>
        <Grid item lg={6} xl={6} className="rightHeader">
          <Stack direction="row" className="rightHeader">
            <Typography variant="h2">
              Olá, {context.userInfo.userName}!
            </Typography>
            <div
              className="headerUserLogoInfo"
              onClick={() => context.changeUserName("Alberto")}
            >
              <Typography variant="h1" className="iconFont">
                {userInitial}
              </Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
