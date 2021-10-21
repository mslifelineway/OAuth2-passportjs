import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        Welcome {user ? user.username : "Guest"}{" "}
      </div>
    </Layout>
  );
};

export default Dashboard;
