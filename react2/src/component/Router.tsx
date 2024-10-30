
import {Route,Routes,Navigate} from "react-router-dom"; 
import Home from "../page/home";
import PostList from "../page/posts";
import PostDetail from "../page/posts/detail";
import PostNew from  "../page/posts/new";
import PostEdit from  "../page/posts/edit";
import Profile from  "../page/profile";
import LoginPage from  "../page/login";
import SignupPage from  "../page/signup";



export default function Router()
{
    return(
        <>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList/>} />
            <Route path="/posts/:id" element={<PostDetail/>} />
            <Route path="/posts/new" element={<PostNew/>} />
            <Route path="/posts/edit/:id" element={<PostEdit/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </>
        
    );

}
