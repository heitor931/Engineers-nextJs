import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <div>
      <MainHeader />
      {props.children}
    </div>
  );
};

export default Layout;
