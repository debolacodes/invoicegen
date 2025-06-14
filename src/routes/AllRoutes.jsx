
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import ListInvoice from '../pages/ListInvoice'
import CreateInvoice from '../pages/CreateInvoice'
import SignUp from '../pages/SignUp'


export default function AllRoutes() {
  return (
    <div>
      <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/invoice/list" element={<ListInvoice />} />
            <Route path="/invoice/create" element={<CreateInvoice />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>  
    </div>
  )
}
