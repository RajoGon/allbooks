import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as cors from 'cors';

//import routers
import bookRoutes from './routers/books.route'
import userRoutes from './routers/user.route'

//Server class
class Server{
    public app: express.Application;
    constructor(){
        this.app = express();
        this.config();

        this.routes();
    }

    public config(){
        //set up mongoose
        const MONGO_URI = 'mongodb://root:rajo123@ds113455.mlab.com:13455/allbooks';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI).then(()=>{
            console.log('in call back');
            if(mongoose.connection.readyState == 0){
            console.log("DB connection state = disconnected");
        }else if(mongoose.connection.readyState==1){
            console.log("DB connection state = connected");
        }else if(mongoose.connection.readyState==2){
            console.log("DB connection state = connecting");
        }else{
            console.log("DB connection state = disconnecting");
        } 
        });
        
        
        //config
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(cors());
        
    }


    routes(): void{
        let router: express.Router;
        router = express.Router();
        // routes
        this.app.use('/',router);
        this.app.use('/user', userRoutes);
        this.app.use('/books', bookRoutes);
        
        
    }

    checkDBConnection(){
        if(mongoose.connection.readyState == 0){
            console.log("DB connection state = disconnected");
        }else if(mongoose.connection.readyState==1){
            console.log("DB connection state = connected");
        }else if(mongoose.connection.readyState==2){
            console.log("DB connection state = connecting");
        }else{
            console.log("DB connection state = disconnecting");
        }      
    }


}
//export
export default new Server().app;