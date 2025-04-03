import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"

function App() {
  const [isLoading, setIsLoaded] = useState(false)
  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      </>
  );
}

export default App
