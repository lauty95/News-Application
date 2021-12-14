import Crear from "./components/Admin/Crear";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import News from "./components/News";
import SideBar from "./components/SideBar";
import { Route } from 'react-router-dom'
import Editar from "./components/Admin/Editar";
import DetailNew from "./components/DetailNew";
import Categoria from "./components/Admin/Categoria";

function App() {
  return (
    <>
      <Route path="/admin/crear" component={Crear} exact />
      <Route path="/admin/editar" component={Editar} exact />
      <Route path="/admin/categorias" component={Categoria} exact />
      <Route path="/" exact>
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
      <Route path="/noticia/:id" exact>
        <Nav />
        <div className="main-container">
          <main className="site-main">
            <div className="container-fluid no-left-padding no-right-padding page-content blog-paralle-post">
              <div className="container">
                <div className="row">
                  <Route render={(props) => <DetailNew {...props} />} />
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
