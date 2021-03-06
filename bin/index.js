#!/usr/bin/env node

// To color my card
const chalk = require('chalk')
// To draw the border of my card
const boxen = require('boxen')

// Get The content from JSON  - You can customize it and create yours here!
const data = {
  helloWorld: 'HEY YOU!(⌐■_■)',
  name: 'Thiago Paiva',
  githubId: 'paiva-thiago',
  work: 'FullStack Developer',
  linkedin: 'thiagormp',
  web: 'http://www.thiagopaiva.com',
  npx: 'paiva-thiago'
}
const options = {
  padding: 2,
  margin: 1,
  borderStyle: 'round',
  dimBorder: true
}

// Let's color that!
data.helloWorld = chalk.bgCyan(data.helloWorld)
data.name = chalk.bgYellow(data.name)
data.work = chalk.gray(data.work)
data.githubId = chalk.red('https://github.com/'.concat(data.githubId))
data.linkedin = chalk.blue('https://www.linkedin.com/in/'.concat(data.linkedin))
data.web = chalk.bgGreen(data.web)
data.npx = chalk.bgRed(data.npx)

const card = `            
                            ${data.helloWorld}                                          
                            ${data.name}                          
                            ${data.work}                                  
                     
                     GitHub:  ${data.githubId}                  
                   LinkedIn:  ${data.linkedin}              
                        Web:  ${data.web}                        
                        
                       Card:  ${data.npx}
                                                                            `

console.log(chalk.white(boxen(card, options)))
