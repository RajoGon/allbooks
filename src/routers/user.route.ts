import{Router, Request, Response, NextFunction} from 'express';
import users from '../models/user';
class UserRouter{
    router:Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    public getUsers(req: Request, res: Response): void{
  
        users.find({})
        .then((data)=>{
            const status = res.statusCode;
            const allUsersData:Array<any>=[];
            data.forEach(element => {
                let user = {
                    "userName": element.userName,
                    "name": element.firstName +' '+ element.lastName
                }

                allUsersData.push(user);

            });
            res.json({
                status,
                allUsersData
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
    public getUserByUserName(req: Request, res: Response): void{
        const userName = req.params.uname;
        users.findOne({userName})
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
    public createUser(req: Request, res: Response): void{
        const newUser = new users({
            "email": req.body.email,
            "lastName": req.body.lastName,
            "firstName": req.body.firstName,
            "password": req.body.password,
            "userName": req.body.userName
        });
         newUser.save({})
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
    public updateUser(req: Request, res: Response): void{
        const userName = req.params.uname;
        users.findOneAndUpdate({userName}, req.body)
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

    public deleteUser(req: Request, res: Response): void{
        const userName = req.params.uname;
        users.findOneAndRemove({userName}, req.body)
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



    routes(){
        this.router.get('/',this.getUsers);
        this.router.post('/register',this.createUser);
        this.router.get('/:uname',this.getUserByUserName);
        this.router.put('/:uname',this.updateUser);
        this.router.delete('/:uname',this.deleteUser);
    }
}

//export
const userRoutes = new UserRouter();
userRoutes.routes();
export default userRoutes.router;