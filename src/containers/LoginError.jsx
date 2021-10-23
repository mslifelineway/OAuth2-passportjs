import { Avatar, Card, CardContent, Typography } from "@material-ui/core";
import React, { useEffect } from "react";

const LoginError = () => {
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
          src="/assets/icons/error.png"
          alt="Error"
          style={{ width: 100 }}
        />
        <br />
        <Typography variant="h5" color="secondary" style={{ fontWeight: 700 }}>
          Authentication failed!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LoginError;
