import React from "react";
import BaseLayout from "../components/layout/BaseLayout";
import BasePages from "../components/BasePages";
import { Link } from "@material-ui/core";

export default class Home extends React.Component {
  render() {
    return (
      <BaseLayout title="Home Page" className="home-page">
        <BasePages>
          <div className="row">
            <div className="col-md-8 offset-2 d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center text-muted">
                Nice Menu By react-burger-menu
              </h1>
              <button className="btn btn-success  mt-5">
                <Link
                  className="nav-link text-white"
                  target="_blank"
                  href="https://www.npmjs.com/package/react-burger-menu"
                >
                  <a>How to Use !</a>
                </Link>
              </button>
            </div>
          </div>
        </BasePages>
      </BaseLayout>
    );
  }
}
