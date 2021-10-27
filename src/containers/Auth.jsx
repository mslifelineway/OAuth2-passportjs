import React, { useEffect } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { pagePaths } from "../utils/constants";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../redux/actions/auth.actions";
import Layout from "../components/Layout";
import { api } from "../redux/Axios/urlConfig";

const Auth = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const buttons = [
    {
      text: "Google auth",
      background: "#f66969",
      link: "/google",
      color: "#fff",
    },
    {
      text: "Github auth",
      background: "#424242",
      link: "/github",
    },
    {
      text: "Spotify auth",
      background: "#12b64e",
      link: "/spotify",
    },
    {
      text: "Twitch auth",
      background: "#645db2",
      link: "/twitch",
    },
  ];
  const underDepoyementButtons = [
    {
      text: "Facebook auth",
      background: "#4e3ff6",
      link: "/facebook",
    },
    {
      text: "LinkedIn auth",
      background: "#198bc6",
      link: "/linkedin",
    },
    {
      text: "Twitter auth",
      background: "#198bc6",
      link: "/twitter",
    },
    {
      text: "Instagram auth",
      background: "#e6023e",
      link: "/linkedin",
    },

    {
      text: "Amazon auth",
      background: "#3e3e3e",
      link: "/amazon",
    },
  ];

  useEffect(() => {
    if (user) {
      history.push(pagePaths.dashboard);
    }
  }, [history, user]);

  const redirectToSSO = (url) => {
    let timer = null;
    const newWindow = window.open(url, "_blank", "width=500,height=600");
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          if (timer) clearInterval(timer);
          if (newWindow.navigator) {
            dispatch(fetchUserDetails());
          }
        }
      }, 500);
    }
  };

  const renderButton = (btn, key) => (
    <Button
      key={key}
      variant="contained"
      color="default"
      onClick={() => redirectToSSO(`${api}/auth${btn.link}`)}
      style={{
        background: btn.background,
        color: btn.color || "#fff",
        margin: 5,
        textTransform: "capitalize",
      }}
      size="small"
    >
      {btn.text}
    </Button>
  );

  return (
    <Layout>
      {!user && (
        <Box>
          <div className="App">
            <Typography variant="h5" style={{ margin: 20 }}>
              Working
            </Typography>
            {buttons.map((btn, i) => renderButton(btn, "type1" + i))}
            <Typography variant="h5" style={{ margin: 20 }}>
              Under development
            </Typography>
            {underDepoyementButtons.map((btn, i) =>
              renderButton(btn, "type2" + i)
            )}
          </div>
        </Box>
      )}
    </Layout>
  );
};

export default Auth;
