import React from "react";
import Features from "./components/Layout/UI/Features";

const FeaturePage = ({ allFeatures }) => {
  return (
    <div>
      <Features allFeatures={allFeatures} />
    </div>
  );
};

export default FeaturePage;

export const getServerSideProps = async () => {
  const rest = await fetch("https://pc-builder-server-psi.vercel.app/products");
  const data = await rest.json();
  return {
    props: {
      allFeatures: data.data,
    },
    // revalidate: 10,
  };
};
