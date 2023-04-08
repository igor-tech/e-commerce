import React from 'react'

import { getDatabase, onValue, ref } from 'firebase/database'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import './firebase'
import { App } from './App'

const db = getDatabase()
const starCountRef = ref(db, 'products')

onValue(starCountRef, snapshot => {
  const data = snapshot.val()

  console.log(data)
})
console.log(getDatabase())

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
