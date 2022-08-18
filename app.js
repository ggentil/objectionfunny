import express from 'express';
import profileRoutes from './src/routes/profile';
import { Model } from 'objection';

const knex = require('./src/config/database');

class App {
  constructor() {
    this.app = express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database(){
    Model.knex(knex);
  }

  middlewares() {
    this.app.use(
      express.urlencoded({ extended: true }),
      express.json()
    );
  }

  routes() {
    this.app.use('/profile', profileRoutes);
  }
}

export default new App().app;
