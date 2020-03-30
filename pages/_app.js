import App from "next/app";

//style list
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.css";
import "../assets/styles/main.scss";
import 'font-awesome/css/font-awesome.css';

export default class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <div>
        <Component />
      </div>
    );
  }
}
