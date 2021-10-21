import React, { useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { apiPath, pagePaths } from "../utils/constants";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../redux/actions/auth.actions";
import Layout from "../components/Layout";

const Auth = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      history.push(pagePaths.dashboard);
    }
  }, []);

  const redirectToGoogleSSO = async () => {
    let timer = null;
    const googleLoginURL = `${apiPath}/auth/google`;
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          if (timer) clearInterval(timer);
          dispatch(fetchUserDetails()).then(() => {
            console.log("====> user fetched...");
            // history.push(pagePaths.dashboard);
          });
        }
      }, 500);
    }
  };

  return (
    <Layout>
      {!user && (
        <Box>
          <div className="App">
            <Button
              variant="contained"
              color="secondary"
              onClick={redirectToGoogleSSO}
            >
              Google Auth
            </Button>
          </div>
        </Box>
      )}
    </Layout>
  );
};

export default Auth;
