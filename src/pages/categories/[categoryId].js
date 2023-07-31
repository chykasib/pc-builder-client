import { Col, Row, Card, Button } from "antd";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import RootLayout from "../components/Layout/RootLayout";
import { useDispatch } from "react-redux";
const { Meta } = Card;
const CategoriesPage = ({ categories }) => {
  console.log(categories);
  const dispatch = useDispatch();

  const handleAddToBuilder = (id) => {
    dispatch(addToBuilder(id));
    // You can also add a notification or message here to inform the user about the successful addition.
  };
  return (
    <div style={{ marginTop: 60 }}>
      <Row>
        {categories?.products.map((product) => (
          <>
            <Col span={6}>
              <Card
                style={{
                  width: 300,
                  marginBottom: 30,
                  marginLeft: 70,
                }}
                cover={
                  // eslint-disable-next-line @next/next/no-img-element
                  <img height={200} alt="" src={product?.Image} />
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
                <Meta title={product?.ProductName} />
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    margin: "10px 0px",
                    fontWeight: "200",
                  }}
                >
                  Brand : <b>{product?.Category}</b>
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    margin: "10px 0px",
                    fontWeight: "200",
                  }}
                >
                  Price : <b>{product?.Price}</b>
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    margin: "10px 0px",
                    fontWeight: "200",
                  }}
                >
                  Status : <b>{product?.Status}</b>
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    margin: "10px 0px",
                    fontWeight: "200",
                  }}
                >
                  Rating : <b>{product?.IndividualRating}</b>
                </p>
                <Link href={`categoryDetails/${product?.id}`}>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "15px",
                      margin: "20px 0px",
                      backgroundColor: "black",
                      color: "white",
                      width: "168px",
                      borderRadius: "5px",
                      padding: "2px 5px ",
                      fontWeight: "300",
                      letterSpacing: "3px",
                    }}
                  >
                    Read More <ArrowRightOutlined />
                  </p>
                </Link>
                <Button onClick={() => handleAddToBuilder(() => product?.id)}>
                  Add to Builder
                </Button>
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
  const paths = categoryProducts?.data?.map((categoryProduct) => ({
    params: { categoryId: categoryProduct.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-psi.vercel.app/products/${params.categoryId}`
  );
  const data = await res.json();
  return {
    props: {
      categories: data,
    },
  };
};
