import { Link } from "react-router-dom"

export const Btn = ({ name, page, iconRight, iconLeft, imgAlt }) =>
  <Link className="btn-primary inline-block text-center" to={page ? page : '/'}>
    {iconLeft && <img src={iconLeft} alt={imgAlt} />}
      {name}
    {iconRight && <img src={iconRight} alt={imgAlt} />}
  </Link>

export const BtnSm = ({ name,icon, imgAlt }) => <button className="btn-sm">{icon && <img src={icon} alt={imgAlt} />}{name}</button>;

export const Button = ({ name }) => <button type="submit" className="btn-primary">{name}</button>;