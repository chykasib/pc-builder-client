import Head from "next/head";
import RootLayout from "./components/Layout/RootLayout";
import AllProducts from "./components/Layout/UI/AllProducts";
import Banner from "./components/Layout/UI/Banner";
import Features from "./components/Layout/UI/Features";
const HomePage = ({ allProducts }) => {
  return (
    <div>
      <Head responsive>
        <title>CustomTech Wizardry</title>
        <meta
          name="description"
          content="This is CustomTech Wizardry made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AllProducts allProducts={allProducts} />
      <Features allFeatures={allProducts} />
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-server-psi.vercel.app/products");
  const data = await res.json();
  return {
    props: {
      allProducts: data.data,
    },
    revalidate: 10,
  };
};
