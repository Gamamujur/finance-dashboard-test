import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faBell, faClock, faUserGroup, faWallet, faGear } from "@fortawesome/free-solid-svg-icons"
const Menu = () => {
  return (
    <div className="sidemenu-container">
        <FontAwesomeIcon icon={faHouse} className="fa-house"/>
        <FontAwesomeIcon icon={faBell} className="fa-bell"/>
        <FontAwesomeIcon icon={faClock} className="fa-clock"/>
        <FontAwesomeIcon icon={faUserGroup} className="fa-usergroup"/>
        <FontAwesomeIcon icon={faWallet} className="fa-wallet"/>
        <FontAwesomeIcon icon={faGear} className="fa-gear"/>
    </div>
  )
}

export default Menu