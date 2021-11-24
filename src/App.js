import Crear from "./components/Admin/Crear";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import News from "./components/News";
import SideBar from "./components/SideBar";
import { Route } from 'react-router-dom'
import Editar from "./components/Admin/Editar";
import Banner from "./components/Admin/Banner";

function App() {
  return (
    <>
      <Route path="/admin/crear" component={Crear} exact />
      <Route path="/admin/editar" component={Editar} exact />
      <Route path="/admin/banner" component={Banner} exact />
      <Route path="/home">
        <Nav />
        <div className="main-container">
          <main className="site-main">
            <Carousel />
            <div className="container-fluid no-left-padding no-right-padding page-content blog-paralle-post">
              <div className="container">
                <div className="row">
                  <News />
                  <SideBar />
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </Route>
    </>
  );
}

export default App;
