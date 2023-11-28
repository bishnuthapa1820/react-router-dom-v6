import { Link } from "react-router-dom";

const nav_list = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Login",
    path: "/auth/login",
  },
];

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        gap: "12px",
      }}
    >
      {nav_list.map((nav, i) => (
        <Link key={`nav-${i}`} to={nav.path}>
          {nav.name}
        </Link>
      ))}
    </header>
  );
}
