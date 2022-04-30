import express from 'express';
import routes from './routes';
import connection from './connection';

class App {
  public express: express.Application;

  public connection: Promise<typeof import('mongoose')>;

  constructor() {
    this.express = express();
    this.config();
    this.connection = connection();
    this.routes();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    }
    this.express.use(accessControl);
    this.express.use(express.json());
  };

  private routes() {
    this.express.use(routes);
  }
}

export default App;
