import React from "react";
import RootLayout from "./components/Layout/RootLayout";
import { Button, Card, Image } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
const PcBuilderPage = ({ categories }) => {
  console.log(categories);
  const selectedComponents = useSelector((state) => state.selectedComponents);
  const isComplete = selectedComponents.length >= 5;
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <Image
        src="https://img.overclockers.co.uk/media/image/razerPCBSWORKSHOP.gif"
        alt="news image"
        height={300}
        width={500}
        style={{
          marginLeft: "350px",
          borderRadius: "10px",
        }}
      />
      <h1 style={{ textAlign: "center", margin: "20px", fontSize: "30px" }}>
        PC Builder - Build Your Own Computer - CustomTech Wizardry
      </h1>
      <Card
        style={{
          margin: "50px",
          backgroundColor: "black",
          color: "white",
          fontWeight: "lighter",
        }}
      >
        {categories?.map((category) => (
          <div
            key={category.id} // Don't forget to include a unique key for each element in the array.
            style={{
              display: "flex",
              justifyContent: "space-between",
              justifyItems: "center",
              paddingTop: "5px",
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
              <Button
                style={{
                  justifyContent: "flex-end",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Choose
              </Button>
            </Link>
          </div>
        ))}

        <Button
          style={{
            marginTop: "5px",
            backgroundColor: "yellow",
            fontWeight: "lighter",
          }}
        >
          Complete Build
        </Button>
      </Card>
      <div>
        {selectedComponents.map((component) => (
          <div key={component.id}>
            <img src={component.image} alt={component.name} />
            <h2>{component.name}</h2>
            <p>Category: {component.category}</p>
            <p>Price: ${component.price}</p>
            <p>Status: {component.status}</p>
            <p>Rating: {component.rating}</p>
            {isComplete ? (
              <Button>Complete Build</Button>
            ) : (
              <p>Add at least 5 components</p>
            )}
          </div>
        ))}
      </div>
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
