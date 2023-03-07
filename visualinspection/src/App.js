import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIN from './signin';
import Dash from './dashboard';
import LogDetails from './logdetails';
import ViewVideo from './viewvideo';
import LogView from './logview';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIN/>}></Route>
        <Route path='/dashboard' element={<Dash/>}></Route>
        <Route path='/logdetails' element={<LogDetails/>}></Route>
        <Route path='/viewvideo' element={<ViewVideo/>}></Route>
        <Route path='/viewlog' element={<LogView/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App