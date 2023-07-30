import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const RootLayout = ({ children }) => {
  const items = [
    {
      label: <Link href="categories/1">CPU</Link>,
    },
    {
      label: <Link href="categories/2">Motherboard</Link>,
    },
    {
      label: <Link href="categories/3">RAM</Link>,
    },
    {
      label: <Link href="categories/4">Power Supply Unit</Link>,
    },
    {
      label: <Link href="categories/5">Storage Device</Link>,
    },
    {
      label: <Link href="categories/6">Monitor</Link>,
    },
  ];
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "black",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              CustomTech Wizardry
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Link href="/pcBuilder">
            <Button type="primary">PC Builder</Button>
          </Link>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
                color: "white",
              }}
            >
              <UserOutlined />
              Login
            </items>
          </Link>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Link href="">
              <items
                style={{
                  margin: "0px 25px",
                  color: "white",
                }}
              >
                <AppstoreOutlined />
                Categories
              </items>
            </Link>
          </Dropdown>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
          marginTop: "300px",
          paddingTop: "50px",
          backgroundColor: "black",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "30px",
            color: "white",
          }}
        >
          CustomTech Wizardry
        </h2>
        <p style={{ color: "white", paddingTop: "5px" }}>
          © 2023 CustomTech Wizardry | All rights reserved
        </p>
      </Footer>
    </Layout>
  );
};
export default RootLayout;

export const getStaticProps = async () => {
  const rest = await fetch("https://pc-builder-server-psi.vercel.app/products");
  const data = await rest.json();
  return {
    props: {
      allCategories: data.data,
    },
  };
};
