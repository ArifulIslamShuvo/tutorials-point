"use client";
import { Button, Drawer, Layout, Menu, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Header } = Layout;

const Navbar = () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "About", href: "/about-us" },
    { key: "3", label: "Contact", href: "/contact" },
  ];
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Content>
          <Link href="/">
            <Title level={3} style={{ color: "white", marginBottom: 0 }}>
              My Service
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
        >
          {items?.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
        <Button onClick={showDrawer} type="primary" className="lg:hidden">
          <MenuOutlined />
        </Button>
        <Drawer
          className="lg:hidden"
          title="eLearning"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Menu
            disabledOverflow
            theme="light"
            mode="vertical"
            selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
          >
            {items?.map((item) => {
              return (
                <Menu.Item key={item.key}>
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
