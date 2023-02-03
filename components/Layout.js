import Header from './Header/index';
import Footer from './Footer/index';


export const Layout = ({ menus, siteData, children }) => {
  return (
    <>
      <Header header={menus} data={siteData} />
       <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
