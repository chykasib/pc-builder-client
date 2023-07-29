import { Col, Row, Carousel } from "antd";
import Image from "next/image";
import Image1 from "@/pages/asserts/images/banner-images/image-1.jpeg";
import Image2 from "@/pages/asserts/images/banner-images/image-2.jpeg";
import Image3 from "@/pages/asserts/images/banner-images/image-3.jpeg";
const contentStyle = {
  height: "600px",
  color: "#000",
};

const Banner = () => (
  <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
    {/* slider-1 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 24,
          }}
          style={contentStyle}
        >
          <Image src={Image1} fill alt="" style={{ grayScale: "-1" }} />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 24,
          }}
          style={contentStyle}
        >
          <Image src={Image2} fill alt="" style={{ grayScale: "-1" }} />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 24,
          }}
          style={contentStyle}
        >
          <Image src={Image3} fill alt="" style={{ grayScale: "-1" }} />
        </Col>
      </Row>
    </div>
  </Carousel>
);
export default Banner;
