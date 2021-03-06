import { Avatar, Card, CardContent, Typography } from "@material-ui/core";
import React, { useEffect } from "react";

const LoginSuccess = () => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);

  return (
    <Card style={{ margin: "20px auto", width: 400, padding: 20 }}>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          src="/assets/icons/success.png"
          alt="Success"
          style={{ width: 100 }}
        />
        <br />
        <Typography variant="h5" style={{ color: "#04c204", fontWeight: 700 }}>
          Authenticated!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LoginSuccess;
