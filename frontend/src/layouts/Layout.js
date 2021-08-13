import Head from "next/head";
<<<<<<< HEAD
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { check_auth_status } from "../redux/auth/actions";

const Layout = ({ title, meta_description, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(check_auth_status());
    }
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta_description} />
      </Head>
      <Navbar />
      <div className="container mt-5">{children}</div>
    </>
  );
};

Layout.defaultProps = {
  title: "httpOnly Auth",
  content: "Tutorial for showing you how to use httpOnly cookies for storing json web tokens."
}
=======
import Navbar from '../components/Navbar';


const Layout = ({ title, meta_description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={meta_description} />
    </Head>
    <Navbar />
    <div className="container">
        {children}
    </div>
  </>
);
>>>>>>> 1df9cbffe20335545924ae86e0e422e6e77c204a

export default Layout;
