import { Col, Row, Card } from "antd";
import React from "react";
import Link from "next/link";

const Features = ({ allFeatures }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "30px", marginTop: "40px" }}>
        Featured Category
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          marginBottom: "40px",
          marginTop: "10px",
        }}
      >
        Get Your Desired Product from Featured Category!
      </p>
      <Row>
        {allFeatures?.map((feature) => (
          <>
            <Col
              key={feature.id}
              span={4}
              style={{
                margin: "15px",
                border: "1px solid",
                borderRadius: "10px",
              }}
            >
              <Link href={`categories/${feature?.id}`}>
                <Card
                  responsive
                  cover={
                    // eslint-disable-next-line @next/next/no-img-element
                    <img alt="" src={feature?.logo} height={80} width={80} />
                  }
                >
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "20px",
                      margin: "10px 0px",
                      fontWeight: "300",
                    }}
                  >
                    {feature?.name}
                  </p>
                </Card>
              </Link>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default Features;
