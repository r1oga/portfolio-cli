import ReactTerminal from 'react-terminal-component'
import { ReactThemes } from 'react-terminal-component'

import { emulatorState } from './emulatorState'
import './Terminal.css'

const Terminal = () => (
  <div className="terminal">
    <ReactTerminal
      promptSymbol="🐒"
      emulatorState={emulatorState}
      theme={{
        ...ReactThemes.dye,
        promptSymbolColor: '#f23f52',
        commandColor: '#00a7e1',
        height: '60vh'
      }}
    />
  </div>
)

export { Terminal }
