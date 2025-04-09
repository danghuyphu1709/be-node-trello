/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import express from 'express'
import morgan from 'morgan'
import { mapOrder } from '~/utils/sorts.js'

const app = express()
const hostname = '192.168.0.17'
const port = 8080
app.use(morgan('dev'))

app.get('/', (req, res) => {
  // Test Absolute import mapOrder
  // eslint-disable-next-line no-console
  console.log(mapOrder(
    [ { id: 'id-1', name: 'One' },
      { id: 'id-2', name: 'Two' },
      { id: 'id-3', name: 'Three' },
      { id: 'id-4', name: 'Four' },
      { id: 'id-5', name: 'Five' } ],
    ['id-5', 'id-4', 'id-2', 'id-3', 'id-1'],
    'id'
  ))
  res.end('<h1>Hello World!</h1><hr>')
})

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running ${ hostname }:${ port }`)
})
