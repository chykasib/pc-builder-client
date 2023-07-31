import RootLayout from "../components/Layout/RootLayout";
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
const ProductDetailsPage = ({}) => {
  // console.log(product?.products[0].ProductName);
  return (
    <h1>hello word</h1>
    // <div style={{ marginTop: "30px" }}>
    //   <Row
    //     gutter={{
    //       xs: 8,
    //       sm: 16,
    //       md: 24,
    //       lg: 32,
    //     }}
    //   >
    //     <>
    //       {product?.products?.map((product) => {
    //         <>
    //           <Col className="gutter-row" span={10}>
    //             <div>
    //               <Image
    //                 src={product.Image}
    //                 alt="news image"
    //                 height={400}
    //                 width={650}
    //                 responsive
    //               />
    //             </div>
    //           </Col>
    //           <Col className="gutter-row" span={12}>
    //             <Card height={300} width={500} responsive>
    //               <h1 style={{ frontSize: "40px" }}>{product?.ProductName}</h1>
    //               <span>
    //                 <UserOutlined /> {product?.Brand}
    //               </span>
    //               <div
    //                 className="line"
    //                 style={{
    //                   height: "5px",
    //                   margin: "20px 0",
    //                   background: "#000",
    //                   width: "95%",
    //                 }}
    //               ></div>
    //               <p
    //                 style={{
    //                   display: "flex",
    //                   justifyContent: "space-between",
    //                   width: "90%",
    //                   color: "gray",
    //                   margin: "10px 0px",
    //                 }}
    //               >
    //                 <span>
    //                   <CalendarOutlined /> {product?.Status}
    //                 </span>
    //                 <span>
    //                   <CommentOutlined /> {product?.IndividualRating}
    //                 </span>
    //                 <span>
    //                   <ProfileOutlined /> {product?.Category}
    //                 </span>
    //               </p>
    //               {/* <p style={{ frontSize: "30px" }}>{product?.Description}</p> */}
    //             </Card>
    //           </Col>
    //         </>;
    //       })}
    //     </>
    //   </Row>
    // </div>
  );
};

export default ProductDetailsPage;
ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// eslint-disable-next-line @next/next/no-typos
// export const getStaticPaths = async () => {
//   const res = await fetch(`https://pc-builder-server-psi.vercel.app/products`);
//   const allProduct = await res.json();
//   const paths = allProduct?.data?.map((product) => ({
//     params: { productId: product.id },
//   }));
//   return { paths, fallback: false };
// };

// export const getStaticProps = async (context) => {
//   const { params } = context;
//   const res = await fetch(
//     `https://pc-builder-server-psi.vercel.app/products/${params.productId}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       product: data,
//     },
//   };
// };
