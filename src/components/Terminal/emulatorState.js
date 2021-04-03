import * as Terminal from 'javascript-terminal'

import { links } from './links'
const customFileSystem = Terminal.FileSystem.create({
  '/about': {},
  '/about/skills': {},
  '/about/skills/tech': {
    content: `Blockchain:   Cryptocurrencies, DEFI, Bitcoin, Hyperledger, Substrate/Polkadot, zk-SNARKS
Ethereum:     EthersJS, Web3JS, ERC Standards, Truffle, Hardhat, Infura, Open Zeppelin, Metamask, The Graph
Data Science: Pandas, Scikit-learn, Jupyter, Searborn, Bokeh, Knime
Back End:     NodeJS, ExpressJS, Passport, NextJS, Deno, PostgreSQL, MongoDB, Redis, Elasticsearch, Flask, IPFS
Front End:    React, Redux, Semantic-UI
DevOps:       Docker, Kubernetes, TravisCI, Github Actions, AWS Elastic Beanstalk
`
  },
  '/about/skills/languages': {
    content: `Javascript, Typescript, Python, Solidity, SQL, HTML, CSS, (Golang, Rust)
French, English, German, (Spanish)

(Beginner)`,
    canModify: false
  },
  '/about/education': {
    content: `YEAR   DEGREE                  SCHOOL
2012   Master of Engineering   Ecole Centrale de Nantes
2009   Bachelor of Science     Lycée Kerichen de Brest
`,
    canModify: false
  },
  '/about/experiences': {
    content: `YEAR                 ROLE                                             COMPANY
2020 till present    Data Analyst / Full Stack Web Developer          Airbus
2017-2020            Data Analyst / Project and Performance Manager   Airbus
2013-2016            Technical Data Engineer                          Airbus
2012                 Intern, Standardization Office                   Renault
2011                 Intern, Supply & Trading dpt                     Total`,
    canModify: false
  },
  '/portfolio': {},
  '/portfolio/bitcoin-opreturn-indexer': {
    content: 'Index and store bitcoin OP_RETURN data. Serve via JSON API.',
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
  '/contact': {
    content: `email: r1oga@tuta.io
twitter, discord, telegram: @r1oga`,
    canModify: false
  }
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
            'ls <folder>: list content',
            'cat <file>:  print content',
            'cd <folder>: change directory',
            'cd ..:       go back to parent directory',
            'clear:       clear terminal',
            'goto <link>: open in new tab a link from [github, twitter, blog, portfolio-item]'
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
