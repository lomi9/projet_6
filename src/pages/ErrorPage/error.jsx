import { Link, useRouteError } from "react-router-dom";
import Header from "../../components/Header/Header";
import ErrorImg from '../../assets/404.png';
import Footer from "../../components/Footer/Footer";

export default function ErrorPage() {
  const error = useRouteError();


  return (
    <>
    <Header/>
    <div className="error__page">
      <img src={ErrorImg} alt="Erreur 404" className="error__img"></img>
      <h1 className="error__title error__title-desktop">Oups! La page que vous demandez n'existe pas.</h1>
      <h1 className="error__title error__title-mobile">Oups! La page que <br/> vous demandez n'existe pas.</h1>
      <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
    </div>
    <Footer/>
    </>
  );
}