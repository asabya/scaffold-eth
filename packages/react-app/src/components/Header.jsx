import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://fairdatasociety.org" target="_blank" rel="noopener noreferrer">
    <PageHeader
      title="🃏 FDS"
      subTitle="Resistance is never futile"
      style={{ cursor: "pointer" }}
    />
  </a>

    // <a href="https://github.com/austintgriffith/scaffold-eth" target="_blank" rel="noopener noreferrer">
    //   <PageHeader
    //     title="🏗 scaffold-eth"
    //     subTitle="forkable Ethereum dev stack focused on fast product iteration"
    //     style={{ cursor: "pointer" }}
    //   />
    // </a>
  );
}
