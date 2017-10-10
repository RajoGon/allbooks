import{Router, Request, Response, NextFunction} from 'express';
import book from '../models/books';
class BookRouter{
    router:Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    public getBooks(req: Request, res: Response): void{
        book.find({})
        .then((data)=>{
            const status = res.statusCode;
            res.json({
                status,
                data
            });
        })
        .catch((err)=>{
            const status = res.statusCode;
            res.json({
                status,
                err
            });
        })
    }

    public getBook(req: Request, res: Response): void{
        
    }
    public createBook(req: Request, res: Response): void{
        
    }
    public updateBook(req: Request, res: Response): void{
        
    }
    public deleteBook(req: Request, res: Response): void{
        
    }


    routes(){
        this.router.get('/',this.getBooks);
    }
}
//export
const bookRoutes = new BookRouter();
bookRoutes.routes();
export default bookRoutes.router;