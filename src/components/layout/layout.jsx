import { Layout, Typography } from "antd";

import s from "./layout.module.css";

const { Footer, Content } = Layout;
const { Text, Link } = Typography;

export const MainLayout = ({ children }) => {
  return (
    <>
      <Content className={s.main}>{children}</Content>
      <Footer className={s.footer}>
        <Text type="secondary">
          © {new Date().getFullYear()} created by{" "}
          <Link
            href="https://github.com/kruglyakov-ak"
            underline
            type="secondary"
            target="_blank"
          >
            Aleksandr Kruglyakov
          </Link>
        </Text>
      </Footer>
    </>
  );
};
