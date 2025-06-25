import './App.css'
import { ENV } from './constants/env'

function App() {
  return (
    <div className='mx-auto min-w-4xl p-4 bg-amber-600'>
      {ENV.APP_NAME}
    </div>
  )
}

export default App
