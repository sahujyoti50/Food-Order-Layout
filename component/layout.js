import Footer from "./footer";
import Header from "./navbar";

function Layout(props) {
  return (
    <div>
      <h3>Layout Displyed!!</h3>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
export default Layout;
