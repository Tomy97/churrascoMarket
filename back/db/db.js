import { connect } from 'mongoose'
(async () => {
  try {
    const db = await connect('mongodb://localhost/market')
    console.log('db connected', db.connection.user)
  } catch (err) {
    console.error(err)
  }
})()
