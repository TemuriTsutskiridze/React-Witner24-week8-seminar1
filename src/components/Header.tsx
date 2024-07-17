import { Link } from "react-router-dom";

const navigation: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

export default function Header() {
  return (
    <header>
      <h1>THE PLANETS</h1>
      <nav>
        <ul>
          {navigation.map((planet) => {
            return (
              <li key={planet}>
                <Link to={planet}>{planet}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
