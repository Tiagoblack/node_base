import {Request, Response, Router} from 'express';

const routes = Router() ;


import {page, dogs, cats, fishes} from '../controller/pageController';
import search from '../controller/searchController'
routes.get('/',page);
routes.get('/dogs', dogs);
routes.get('/cats', cats);
routes.get('/fishes', fishes);
routes.get('/search', )

export default routes;
