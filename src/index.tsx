import React from 'react'

import { getDatabase, onValue, ref } from 'firebase/database'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import './firebase'
import { App } from './app/App'

const db = getDatabase()
const starCountRef = ref(db, 'products')

onValue(starCountRef, snapshot => {
  const data = snapshot.val()

  console.log(data)
})
console.log(getDatabase())

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
