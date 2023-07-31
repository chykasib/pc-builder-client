import React from "react";
import { Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import RootLayout from "@/pages/components/Layout/RootLayout";
const categoryDetails = ({ categoryDetail }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <>
          {categoryDetail?.products?.map((product) => {
            <>
              <Col className="gutter-row" span={10}>
                <div>
                  <Image
                    src={categoryDetail.products[0].Image}
                    alt="news image"
                    height={400}
                    width={650}
                    responsive
                  />
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <Card height={300} width={500} responsive>
                  <h1 style={{ frontSize: "40px" }}>{product?.ProductName}</h1>
                  <span>
                    <UserOutlined /> {product?.Brand}
                  </span>
                  <div
                    className="line"
                    style={{
                      height: "5px",
                      margin: "20px 0",
                      background: "#000",
                      width: "95%",
                    }}
                  ></div>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                      color: "gray",
                      margin: "10px 0px",
                    }}
                  >
                    <span>
                      <CalendarOutlined /> {product?.Status}
                    </span>
                    <span>
                      <CommentOutlined /> {product?.IndividualRating}
                    </span>
                    <span>
                      <ProfileOutlined /> {product?.Category}
                    </span>
                  </p>
                  {/* <p style={{ frontSize: "30px" }}>{product?.Description}</p> */}
                </Card>
              </Col>
            </>;
          })}
        </>
      </Row>
    </div>
  );
};

export default categoryDetails;
categoryDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// eslint-disable-next-line @next/next/no-typos
export const getStaticPaths = async () => {
  const res = await fetch(`https://pc-builder-server-psi.vercel.app/products`);
  const categoryDetails = await res.json();
  console.log(categoryDetails);
  const paths = categoryDetails?.data?.map((categoryDetail) => ({
    params: { categoryDetailsId: categoryDetail.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-server-psi.vercel.app/products/${params.categoryDetailsId}`
  );
  const data = await res.json();
  return {
    props: {
      categoryDetail: data,
    },
  };
};
