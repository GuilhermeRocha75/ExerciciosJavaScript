import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router";
import img from "../assets/img/foto.jpg"
import logo1 from "../assets/img/git.png"
import logo2 from "../assets/img/inta.png"
import logo3 from "../assets/img/link.png"
import logo4 from "../assets/img/you.png"

export function Home() {
  const { toggleTheme } = useTheme();

  return (
    <div className="container">
    <img src={img} alt="foto"  width="100" height="100" />
      <h1 className="title">@Afonso</h1>

      <label className="switch">
  <input type="checkbox" onClick={toggleTheme}/>
  <span className="slider"></span>
</label>



<button className="glow-on-hover" type="button">
  Inscreva-se no NLW
</button>

<button className="glow-on-hover" type="button">
  Baixe meu E-book
</button>

<button className="glow-on-hover" type="button">
  Veja meu portifólio
</button>

<button className="glow-on-hover" type="button">
  Conheça o Explorer
</button>

<div className="logos">

<a href="https://github.com/">
<img src={logo1} alt="foto"  width="30" height="30" />
</a>

<a href="https://www.instagram.com/">
<img src={logo2} alt="foto"  width="30" height="30" />
</a>

<a href="https://br.linkedin.com/">
<img src={logo3} alt="foto"  width="30" height="30" />
</a>

<a href="https://www.youtube.com/">
<img src={logo4} alt="foto"  width="30" height="30" />
</a>
</div>


<p>
  Feito com ❤ pela <Link to="/about">Rockstar</Link>
</p>

    </div>
  );
}
