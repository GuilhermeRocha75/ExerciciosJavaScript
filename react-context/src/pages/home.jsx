import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import "./home.css"; // Importa o CSS

export function Home() {
  const { toggleTheme } = useTheme();

  return (
    <div className="container">
      <img src="https://via.placeholder.com/100" alt="Avatar" className="avatar" />
      <h2 className="username">@maykbrito</h2>

      <div className="theme-toggle" onClick={toggleTheme}></div>

      <div className="buttons">
        <button>Inscreva-se no NLW</button>
        <button>Baixe meu e-book</button>
        <button>Veja meu portfólio</button>
        <button>Conheça o Explorer</button>
      </div>

      <div className="social-icons">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>

      <p className="footer">Feito com ❤️ pela Rocketseat</p>
    </div>
  );
}
