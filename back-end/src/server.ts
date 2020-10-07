import express from 'express'
import teamsRoute from './routes/teams.route'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json());
app.use('/teams',teamsRoute)

app.listen(3333, ()=>{
    console.log('Server is running on port 3333 🚀')
})