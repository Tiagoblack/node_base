import {Request, Response, Router} from 'express';



export const page =(req: Request, res: Response)=>{
    res.render('page/index');
}

export const dogs =(req: Request, res: Response)=>{
    res.render('index');
}

export const cats =(req: Request, res: Response)=>{
    res.render('index');
}

export const fishes =(req: Request, res: Response)=>{
    res.render('index');
}