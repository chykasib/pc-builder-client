import Head from "next/head";
import RootLayout from "./components/Layout/RootLayout";
const HomePage = () => {
  return (
    <>
      <Head>
        <title>CustomTech Wizardry</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
