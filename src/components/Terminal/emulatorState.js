import * as Terminal from 'javascript-terminal'
import { OutputFactory } from 'react-terminal-component'

import { links } from './links'
const customFileSystem = Terminal.FileSystem.create({
  '/about': {},
  '/about/skills': { content: 'This is a skills', canModify: false },
  '/about/education': { content: 'This is education', canModify: false },
  '/about/experience': { content: 'This is experience', canModify: false },
  '/portfolio': {},
  '/portfolio/bitcoin-opreturn-indexer': {
    content: 'Index and store bitcoin OP_RETURN data. Serve via JSON API.',
    canModify: false
  },
  '/portfolio/channels-raidar': {
    content: 'Monitoring of Raiden Network payment Channels.',
    canModify: false
  },
  '/portfolio/channels-raidar': {
    content: 'Monitoring of Raiden Network payment Channels.',
    canModify: false
  },
  '/portfolio/airchain': {
    content: 'Ethereum dapp to manage an aircraft manufacturing supply chain.',
    canModify: false
  },
  '/portfolio/ipfs-upload-dapp': {
    content:
      'Uploads file to IPFS & stores corresponding hash on Ethereum without requiring user to spend gas.',
    canModify: false
  },
  '/portfolio/kickstartereum': {
    content: 'Ethereum dapp to manage Kickstarter campaigns.',
    canModify: false
  },
  '/portfolio/decentralized-house-listing': {
    content:
      'Decentralized house listing service using ERC721 standard, ZKSNARK, and OpenSea.',
    canModify: false
  },
  '/portfolio/flight-surety': {
    content: 'Ethereum dApp to manage flight insurances.',
    canModify: false
  },
  '/contact': {},
  '/contact/email': { content: 'r1oga@tuta.io', canModify: false },
  '/contact/github': { content: 'https://github.com/r1oga', canModify: false },
  '/contact/twitter': {
    content: 'https://twitter.com/r1oga',
    canModify: false
  },
  '/blog': { content: 'https://listed.to/@r1oga', canModify: false }
})

const initialOutputs = ['?: see commands', '\n']
const customOutputs = Terminal.Outputs.create(
  initialOutputs.map(content => Terminal.OutputFactory.makeTextOutput(content))
)

const customCommandMapping = Terminal.CommandMapping.create({
  ...Terminal.defaultCommandMapping,
  '?': {
    function: () => {
      return {
        output: Terminal.OutputFactory.makeTextOutput(
          [
            'ls: list content',
            'cat: print content',
            'cd <folder>: change directory',
            'cd ..: go back to parent directory',
            'goto: open in new tab'
          ].join('\n')
        )
      }
    },
    optDef: {}
  },
  goto: {
    function: (_, opts) => {
      if (opts.length !== 1) {
        return {
          output: Terminal.OutputFactory.makeTextOutput(
            `Expecting 1 argument. ${opts.length} passed.`
          )
        }
      }

      let tab = ''
      if (opts[0] in links) {
        tab = links[opts[0]]
      } else if (!opts[0].startsWith('http')) {
        return {
          output: Terminal.OutputFactory.makeTextOutput(
            `'${opts[0]}' is not a link`
          )
        }
      } else {
        tab = opts[0]
      }

      window.open(tab, '_blank')
      return { output: Terminal.OutputFactory.makeTextOutput('') }
    },
    optDef: {}
  }
})

const emulatorState = Terminal.EmulatorState.create({
  fs: customFileSystem,
  outputs: customOutputs,
  commandMapping: customCommandMapping
})

export { emulatorState }
