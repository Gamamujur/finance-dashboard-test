import './App.css'
import ContentContainer from './components/Content/ContentContainer'
import SideContent from './components/SideContent/SideContent'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className='main-container'>
      <Sidebar/>
      <ContentContainer/>
      <SideContent/>
    </div>
  )
}

export default App
