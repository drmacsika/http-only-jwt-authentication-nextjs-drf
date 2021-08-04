import Head from "next/head";
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

export default Layout;
