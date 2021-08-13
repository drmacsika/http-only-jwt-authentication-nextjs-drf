import Layout from "../layouts/Layout";
<<<<<<< HEAD
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  if (typeof window !== "undefined" && !loading && !isAuthenticated) {
    router.push("/login");
  }

  return (
    <Layout title="Dashboard" meta_description="content to get">
      <div className="p-5 bg-light rounded-3">
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold">User Dashboard</h1>
          <p>Welcome {user !== null && user.first_name}!</p>
        </div>
      </div>
    </Layout>
  );
};
=======

const Dashboard = () => (
  <>
    <Layout title="Dashboard" meta_description="content to get"></Layout>
    <h1>Dashboard</h1>
  </>
);
>>>>>>> 1df9cbffe20335545924ae86e0e422e6e77c204a

export default Dashboard;
