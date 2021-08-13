import Layout from "../layouts/Layout";

const homePage = () => (
  <Layout
    title="httpOnly JWT Auth | Home"
    meta_description="Our very own home page."
  >
    <div className="p-5 bg-light rounded-3">
      <div className="container-fluid">
        <h1 display-5 fw-bold>
          DRF-Next
        </h1>
        <p className="fs-4 mt-3">
          {" "}
          Welcome to DRF and Next JS HttpOnly Cookie JWT Auth.{" "}
        </p>
      </div>
    </div>
  </Layout>
);

Layout.defaultProps = {
  title: "JWT Auth",
  meta_description: "JWT Auth with httpOnly "
}

export default homePage;

