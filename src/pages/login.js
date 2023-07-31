import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import RootLayout from "./components/Layout/RootLayout";
const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          {/* <GoogleOutlined
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://customtech-wizardry.vercel.app/",
              })
            }
          /> */}
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://customtech-wizardry.vercel.app/",
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
