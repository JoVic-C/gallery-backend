import 'dotenv/config';
import  express  from "express";
import cors from 'cors';
import siteRoutes from './routes/site'
import passport from 'passport';
import path from 'path';


const app = express()

app.use(cors())

app.use(express.json())


app.use(passport.initialize())

app.use('/', siteRoutes)

app.listen({ port: 4000}, () => {
    console.log(`Server running`)
})