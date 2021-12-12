import React, { useState } from 'react'
import Lists from './components/Lists'
import './assets/scss/App.scss'

function App() {
  const [name, setName] = useState<string>('')
  const itemShow = (storeName: string) => {
    if (name === storeName) return
    setName(storeName)
  }
  return (
    <div className="app">
      <h1>新商品</h1>
      <section className="btn-area">
        {/* <button onClick={() => itemShow('7-Eleven')} className="7-Eleven">
          セブンイレブン
        </button> */}
        <button onClick={() => itemShow('LAWSON')} className="lawson">
          ローソン
        </button>
        <button onClick={() => itemShow('FamilyMart')} className="familymart">
          ファミリーマート
        </button>
      </section>
      <Lists name={name} />
    </div>
  )
}

export default App
