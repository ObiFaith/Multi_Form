import { Apple, Facebook, Google } from "../assets"

const Authenticate = () => {
  return (
    <div className="flex gap-4 pt-8 pb-7">
      <img src={Apple} alt="Apple Icon" />
      <img src={Facebook} alt="Facebook Icon" />
      <img src={Google} alt="Google Icon" />
    </div>
  )
}

export default Authenticate