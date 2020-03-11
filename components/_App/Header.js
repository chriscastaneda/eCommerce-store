import { Menu, Container, Image, Icon } from "semantic-ui-react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";

/**Loading bar animtation from NProgress. reading from router load time */
Router.onRouteChangeStart = () =>
  NProgress.start(); /**return progress bar when new route starts */
Router.onRouteChangeComplete = () => NProgress.done(); /**when route is done */
Router.onRouteChangeError = () =>
  NProgress.done(); /**if new route does not exist, show error */

/**================================================= */
function Header() {
  const router = useRouter(); /*next.js custom hook button highlight style with router information*/
  const user = false; /*authentication setup*/

  /**Helper function for router info in url*/
  function isActive(route) {
    /**give router path information */
    return (
      route === router.pathname
    ); /**if equal find  active={isActive('/...')} */
  }

  /*Header Buttons Menu*/
  return (
    <Menu stackable fluid id="menu" inverted>
      <Container text>
        <Link href="/">
          <Menu.Item header active={isActive("/")}>
            <Image
              size="mini"
              src="/static/logo.svg"
              style={{ marginRight: "1em" }}
            />
            ReactReserve
          </Menu.Item>
        </Link>

        <Link href="/cart">
          <Menu.Item header active={isActive("/cart")}>
            <Icon name="cart" size="large" />
            Cart
          </Menu.Item>
        </Link>

        {/*display only if user is true*/}
        {user && (
          <Link href="/create">
            <Menu.Item header active={isActive("/create")}>
              <Icon name="add square" size="large" />
              Create
            </Menu.Item>
          </Link>
        )}

        {/*if signed in*/}
        {user ? (
          <>
            <Link href="/account">
              <Menu.Item header active={isActive("/account")}>
                <Icon name="user" size="large" />
                Account
              </Menu.Item>
            </Link>

            <Menu.Item header>
              <Icon name="sign out" size="large" />
              LogOut
            </Menu.Item>
          </>
        ) : (
          /*else*/
          /*if sign out*/
          <>
            <Link href="/login">
              <Menu.Item header active={isActive("/login")}>
                <Icon name="sign in" size="large" />
                Login
              </Menu.Item>
            </Link>

            <Link href="/signup">
              <Menu.Item header active={isActive("/signup")}>
                <Icon name="signup" size="large" />
                Signup
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
