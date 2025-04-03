import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import "./index.css"

function App() {
  const [isLoading, setIsLoaded] = useState(false)
  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar />
      </div>
      </>
  );
}

export default App
