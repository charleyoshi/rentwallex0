import express from "express";
import waitlistRoutes from './routes/waitlistRoutes.js'
import cors from 'cors'
import axios from 'axios';

const app = express();
const port = 4000;


// middleware: fire every time receive a request. Fire BEFORE the route to the root path ('/')
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log("Path detected:")
  console.log(req.path, req.method)
  next()
})

app.use('/api/waitlist', waitlistRoutes)


// Prevent cloud server from becoming inactive. Ping every 14 minutes.
app.use('/healthCheck', (req, res) => {
  const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now()
  };
  try {
      res.status(200).send(healthcheck);
  } catch (error) {
      healthcheck.message = error;
      res.status(503).send();
  }
})

const keepServerAlive = async () => {
  try {
      const response = await axios.get('https://rentwallex-server.onrender.com/healthCheck');
      console.log('Server pinged successfully.');
  } catch (error) {
      console.error('Error pinging server:', error);
  }
}

const INTERVAL_TIME = 14 * 60 * 1000; // 14 minutes in milliseconds

keepServerAlive()
setInterval(keepServerAlive, INTERVAL_TIME)




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
