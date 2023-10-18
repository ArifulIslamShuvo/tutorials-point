"use client";

import React, { useState } from "react";
import { Layout, Menu } from "antd";

import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
import Link from "next/link";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const role = USER_ROLE.USER;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "hidden",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div>
        <Link
          href="/"
          style={{
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "1rem",
            display: "block",
          }}
        >
          Hostil
        </Link>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
