import { Col, Row, Card } from "antd";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import RootLayout from "../components/Layout/RootLayout";
const { Meta } = Card;

const CategoriesPage = ({ categories }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "40px" }}>
        Featured Products
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          marginBottom: "40px",
          marginTop: "10px",
        }}
      >
        Check & Get Your Desired Product!
      </p>
      <Row>
        {categories?.map((product) => (
          <>
            <Col span={6}>
              <Card
                style={{
                  width: 300,
                  marginBottom: 30,
                }}
                cover={
                  // eslint-disable-next-line @next/next/no-img-element
                  <img height={200} alt="" src={product?.products[0]?.Image} />
                }
              >
                <div
                  className="line"
                  style={{
                    height: "5px",
                    margin: "20px 0",
                    background: "#000",
                    width: "95%",
                  }}
                ></div>
                <Meta title={product?.products[0]?.ProductName} />
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    margin: "10px 0px",
                    fontWeight: "200",
                  }}
                >
                  Brand : <b>{product?.products[0]?.Category}</b>
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    margin: "10px 0px",
                    fontWeight: "200",
                  }}
                >
                  Price : <b>{product?.products[0]?.Price}</b>
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    margin: "10px 0px",
                    fontWeight: "200",
                  }}
                >
                  Status : <b>{product?.products[0]?.Status}</b>
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    margin: "10px 0px",
                    fontWeight: "200",
                  }}
                >
                  Rating : <b>{product?.products[0]?.IndividualRating}</b>
                </p>
                <Link href={`product/${product?.products?.id}`}>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                      margin: "20px 0px",
                      backgroundColor: "black",
                      color: "white",
                      width: "168px",
                      padding: "2px 5px ",
                      fontWeight: "300",
                      letterSpacing: "3px",
                    }}
                  >
                    Read More <ArrowRightOutlined />
                  </p>
                </Link>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default CategoriesPage;

CategoriesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// eslint-disable-next-line @next/next/no-typos
export const getStaticPaths = async () => {
  const rest = await fetch("https://pc-builder-server-psi.vercel.app/products");
  const categoryProducts = await rest.json();
  console.log(categoryProducts);
  const paths = categoryProducts.map((categoryProduct) => ({
    params: { categoryId: categoryProduct.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const rest = await fetch(
    `https://pc-builder-server-psi.vercel.app/products/${params.categoryId}`
  );
  const data = await rest.json();
  return {
    props: {
      categories: data,
    },
  };
};
