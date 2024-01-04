import Expenses from "./Templates/Expenses"
import Spending from "./Templates/Spending"

const SideContent = () => {
  return (
    <div className="side-container">
        <Expenses/>
        <Spending/>

    </div>
  )
}

export default SideContent