import Home from "./../pages/Home/Home";
import SearchPage from "./../pages/Search/SearchPage";
import JobDetail from "./../pages/Job/JobDetail";
import Login from "./../pages/Login/Login";
import SignUp from "./../pages/SignUp/SignUp";
import Category from "../pages/Category/Category";
import JobsPage from "../pages/Job/JobsPage";

export const paths = {
   home: "/",
   search: "/search/:id",
   jobs: "/jobs/:id",
   jobDetail: "/job/:id",
   login: "/login",
   signup: "/signup",
   category: "/categories/:id",
};

export const routes = [
   { path: paths.home, component: Home },
   { path: paths.search, component: SearchPage },
   { path: paths.jobs, component: JobsPage },
   { path: paths.jobDetail, component: JobDetail },
   { path: paths.category, component: Category },
   { path: paths.login, component: Login },
   { path: paths.signup, component: SignUp },
];

// export default routes;
