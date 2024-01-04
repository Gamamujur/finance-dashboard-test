import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
const Footer = () => {
  return (
    <div className="side-footer">
        <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?w=740&t=st=1702979970~exp=1702980570~hmac=56dbac86b4a865410143285ac0b641b7ba51877f0c65adfda63b986b348105c5" alt="User" width={40}/>
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="fa-logout"/>
    </div>
  )
}

export default Footer