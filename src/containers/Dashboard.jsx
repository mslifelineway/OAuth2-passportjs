import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import UserProfileCard from "../components/UserProfileCard";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <UserProfileCard user={user} />
      </div>
    </Layout>
  );
};

export default Dashboard;
