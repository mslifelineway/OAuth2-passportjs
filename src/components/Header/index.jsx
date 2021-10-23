import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { pagePaths, providers } from "../../utils/constants";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth.actions";

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const pathname = location.pathname;

  const logoutUser = () => {
    dispatch(logout());
  };

  const getClassName = (path) => {
    return pathname === path ? classes.activeLink : classes.link;
  };
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <div className={classes.left}>
          <Typography variant="h6">Passport Js Auth</Typography>
        </div>

        {user ? (
          <>
            <Typography variant="subtitle1">
              {user.provider === providers.spotify
                ? user.fullName
                : user.username}
            </Typography>
            <Button
              color="secondary"
              onClick={logoutUser}
              style={{ color: "#ff7a7a", fontWeight: 900 }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            color="inherit"
            component={Link}
            to={pagePaths.auth}
            className={getClassName(pagePaths.auth)}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
