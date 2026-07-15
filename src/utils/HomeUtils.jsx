import { Link } from "react-router-dom";

function NavLink({ name, link }) {
  return (
    <Link to={link} className="nav-link">
      <u>{name}</u>
    </Link>
  );
}

function IconLink({ link, icon: Icon }) {
  return (
    <a
      href={link}
      className="icon-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
    </a>
  );
}

export { NavLink, IconLink };
