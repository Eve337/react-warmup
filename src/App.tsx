import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RoutesStore from './routes/routes'
import './styles/main.scss'

function App (): JSX.Element {
  return (
    <div className="App">
      <Routes>
        {Object.values(RoutesStore).map((route) => (
          <Route key={route.path} path={route.path} element={<route.component/>} />
        ))}
      </Routes>
    </div>
  )
}

export default App
