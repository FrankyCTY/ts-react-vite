import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { sayHello } from 'src/sayHello'
import { test } from '@/test'

const test2 = (): void => {
  console.log('testing')
}

function App(): React.ReactElement {
  const [count, setCount] = useState(0)

  useEffect(() => {
    test2()
    sayHello()
    test()
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={(): void => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
