import React, { Component, Children } from "react";
import Navbar from "../Navbar/Navbar";
import Head from "next/head";

export class BaseLayout extends Component {
  render() {
    const { children, title, className } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
        </Head>

        <React.Fragment>
            <Navbar />
            <main className={className}>
                <div className="wrapper-page">{children}</div>
            </main>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default BaseLayout;
