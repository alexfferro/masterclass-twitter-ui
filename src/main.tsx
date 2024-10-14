import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { Sidebar } from './components/Sidebar'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
      <Sidebar/>
      <div className="content">
        <RouterProvider router={router}/>
      </div>
    </div>
  </StrictMode>,
)
