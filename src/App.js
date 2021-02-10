import ReactTerminal from 'react-terminal-component'
import { ReactThemes } from 'react-terminal-component'

import './App.css'
import { emulatorState } from './emulatorState'
import { Header } from './components'

const App = () => {
  return (
    <>
      <br />
      <Header />
      <ReactTerminal
        emulatorState={emulatorState}
        theme={{
          ...ReactThemes.dye,
          promptSymbolColor: '#f23f52',
          commandColor: '#00a7e1'
        }}
      />
    </>
  )
}

export default App
