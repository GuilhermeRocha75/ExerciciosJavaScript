import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="">Sobre</Link></li>
        <li><Link to="">Contato</Link></li>
      </ul>
    </nav>
  );
}
