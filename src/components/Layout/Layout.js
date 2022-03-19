import Nav from '../Nav';
import Footer from '../Footer';
import Service from '../Service';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Service />
      <Footer />
    </div>
  )
}

export default Layout;