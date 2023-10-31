import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {Navbar,Footer,Sidebar,ThemeSettings} from "./components"
import {Ecommerce,Orders,Calendar,Employees,Stacked,Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorMapping,ColorPicker,Editor} from "./pages"
import './App.css'


const App = () => {
  const[activeMenu,setActiveMenu] = useState(true)
    return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:"1000"}}>
          <TooltipComponent context = "Settings" position='top'>
            <button type='button' className='text-3xl
            hover:drop-shadow-xl hover:bg-light-gray text-white' style = {{background:"blue",borderRadius:"50%"}}>
              <FiSettings></FiSettings>
            </button>
          </TooltipComponent>
        </div>
        {
          activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '>Yes</div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>No</div>
          )
        }

        <div className={`dark:bg-main-bg bg-main-bg min-h-screen md:ml-72  ${ activeMenu ? "w-full" :"flex-2"}` }>
          <div className='fixed md:static bg-main-bg
          dark:bg-main-dark-bg navbar w-full'>
            Side
          </div>
        </div>

        <div>
          <Routes>
            {/*Dashboard*/}
            <Route path = "/" element = "Ecommerce"/>
            <Route path = "/ecommerce" element = "Ecommerce"/>
            {/*Pages*/}
            <Route path = "/order" element = "Orders"/>
            <Route path = "/employee" element = "Employees"/>
            <Route path = "/customers" element = "Customers"/>

            {/*Apps*/}
            <Route path = "/kanban" element = "Kanban"/>
            <Route path = "/editor" element = "Editor"/>
            <Route path = "/calender" element = "Calender"/>
            <Route path = "/color-picker" element = "Color Picker"/>
            {/*Charts*/}

            <Route path = "/line" element = "Line"/>
            <Route path = "/area" element = "Area"/>
            <Route path = "/bar" element = "Bar"/>
            <Route path = "/financial" element = "Financial"/>
            <Route path = "/color-napping" element = "Color Napping"/>
            <Route path = "/pyramid" element = "Pyramid"/>
            <Route path = "/stacked" element = "Stacked"/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App 