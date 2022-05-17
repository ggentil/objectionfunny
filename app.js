import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import profileRoutes from './src/routes/profile';
import userRoutes from './src/routes/user';
import authRoutes from './src/routes/auth';
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
    this.app.use('/user', userRoutes);
    this.app.use('/auth', authRoutes);
  }
}

export default new App().app;
