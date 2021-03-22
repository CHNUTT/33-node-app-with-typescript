// INFO import packages
import express from 'express';

// INFO import routes
import todoRoutes from './routes/todo.routes';

const app = express();

// INFO register middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/todos', todoRoutes);

app.listen(3000);
