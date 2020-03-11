import App from "next/app";
import Layout from "../components/_App/Layout";

class MyApp extends App {
  /**access funct outside of clase */
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps: pageProps };
  }

  /**return entire components to page */
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
