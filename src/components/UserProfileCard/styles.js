import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    width: 400,
    margin: "30px auto",
  },
  cardContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    "& .MuiTypography-h6": {
      marginTop: 5,
    },
    "& .MuiTypography-body1": {
      marginTop: 5,
      fontSize: 12,
      maxWidth: "60%",
    },
    "& .MuiTypography-subtitle1": {
      marginTop: 5,
      fontSize: 12,
    },
    "& .MuiButton-text": {
      marginTop: 5,
      fontSize: 12,
      textTransform: "lowercase",
      color: "blue",
      padding: "0 20px",
    },
  },
  avatar: {
    width: "80px",
  },
  provider: {
    position: "absolute",
    top: 0,
    right: 0,
    background: "#08e208",
    color: "white",
    padding: "0 20px",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    fontWeight: 700,
  },
}));
