import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GitHubIcon } from './assets/icons.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex flex-col space-y-5 min-h-screen'>
      <header className='flex font-semibold justify-between text-xl text-cyan-50'>
        <h1>Masonry layout</h1>
        <a className='inline-flex items-center text-sm text-gray-200 hover:text-gray-50 duration-150 ease-in px-2 h-8' href='https://github.com/incpo/mansory-layout'>
        <GitHubIcon className='mr-2 size-4'/>
        Github
        </a> 
      </header>
      <App />
      <footer className='opacity-50 cursor-default hover:opacity-100 duration-150'>299labs ❤️‍🔥</footer>
    </div>
  </React.StrictMode>,
)
