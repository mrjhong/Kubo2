import express from "express";
import moviesRoutes from './routes/moviesRoutes.js';
import userRoutes from './routes/userRoutes.js';


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.use('/api/movies', moviesRoutes);
app.use('/api/auth', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});