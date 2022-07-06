import express from 'express'
import { merchantId, merchantName, checkoutKey } from './googlePaySecrets'

const app = express()

// This endpoint to expose the following values is to move forward with an internal milestone, but this is not the recommended approach for others implementing google pay
// TODO: refactor google pay to initiate payment from the backend
app.get('/values', (_, res) => {
  res.send({ merchantId, merchantName, checkoutKey })
})

export default {
  path: '/api/googlepay',
  handler: app,
}