import React from "react";
import RootLayout from "./components/Layout/RootLayout";
import { Table } from "antd";
const PcBuilderPage = ({ categories }) => {
  console.log(categories);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
      key: "occupation",
    },
  ];

  return (
    <div>
      {/* <h1 className="text-2xl font-bold underline">{categories[0].name}</h1>
      <button className="btn btn-secondary">Secondary</button> */}
      <Table dataSource={categories} columns={columns} />
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
