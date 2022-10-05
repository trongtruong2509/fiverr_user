import Home from "./../pages/Home/Home";
import Login from "./../pages/Login/Login";
import SignUp from "./../pages/SignUp/SignUp";

export const paths = {
   home: "/",
   login: "/login",
   signup: "/signup",
   category: "/categories/:id",
   // filmDetail: "/film/detail/:id",
   // showtime: "/film/showtime/:id",
   // users: "/users",
};

export const routes = [
   { path: paths.home, component: Home },
   { path: paths.login, component: Login },
   { path: paths.signup, component: SignUp },
   // { path: paths.addFilm, component: AddFilm },
   // { path: paths.filmDetail, component: FilmDetail },
   // { path: paths.showtime, component: Showtime },
   // { path: paths.users, component: Users },
];

// export default routes;
