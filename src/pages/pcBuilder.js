import React from "react";
import RootLayout from "./components/Layout/RootLayout";
import { Button, Card } from "antd";
import Link from "next/link";
const PcBuilderPage = ({ categories }) => {
  console.log(categories);
  return (
    <div style={{ margin: "50px" }}>
      <h1 style={{ textAlign: "center", margin: "5px" }}>
        PC Builder - Build Your Own Computer - CustomTech Wizardry
      </h1>
      <Card style={{ margin: "50px" }}>
        {categories?.map((category) => (
          <div
            key={category.id} // Don't forget to include a unique key for each element in the array.
            style={{
              display: "flex",
              justifyContent: "space-between",
              justifyItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                margin: "10px 0px",
                fontWeight: "300",
              }}
            >
              {category.name}
            </p>
            <Link href={`categories/${category?.id}`}>
              <Button style={{ justifyContent: "flex-end" }}>Choose</Button>
            </Link>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getServerSideProps = async () => {
  const res = await fetch(`https://pc-builder-server-psi.vercel.app/products`);
  const data = await res.json();
  return {
    props: {
      categories: data.data,
    },
  };
};
