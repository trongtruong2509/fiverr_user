import Home from "./../pages/Home/Home";
import SearchPage from "./../pages/Search/SearchPage";
import JobDetail from "./../pages/Job/JobDetail";
import Login from "./../pages/Login/Login";
import SignUp from "./../pages/SignUp/SignUp";

export const paths = {
   home: "/",
   search: "/search/:id",
   jobDetail: "/job/:id",
   login: "/login",
   signup: "/signup",
   category: "/categories/:id",
   // filmDetail: "/film/detail/:id",
   // showtime: "/film/showtime/:id",
   // users: "/users",
};

export const routes = [
   { path: paths.home, component: Home },
   { path: paths.search, component: SearchPage },
   { path: paths.jobDetail, component: JobDetail },
   { path: paths.login, component: Login },
   { path: paths.signup, component: SignUp },
];

// export default routes;
