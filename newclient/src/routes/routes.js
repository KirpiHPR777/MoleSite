import { PHOTO_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from './routerConsts';
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Photo from '../pages/Photo';


export const authRoutes = [
    {
        path: PHOTO_ROUTE,
        Component: Photo
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]