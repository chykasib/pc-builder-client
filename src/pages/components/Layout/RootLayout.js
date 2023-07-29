import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const RootLayout = ({ children }) => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
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
            <Link href="/Categories">
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
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          CustomTech Wizardry
        </h2>
        CustomTech Wizardry
      </Footer>
    </Layout>
  );
};
export default RootLayout;
