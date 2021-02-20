import { Article } from '../../lib/articles';
import {Auth} from '../lib/auth';

const Login = () => {
    const handleLogin = (data)=>{
        try {
            const userData = await Auth.login({
                email:"admin@prueba.com",
                password: "123123"
            });
    
            console.log("userData", userData);
        } catch (error) {
            if(error.response){
                console.log(error.response);
            }else if(error.request){
                console.log(error.request);
            }else{
                console.log("error", error.response);
            }
            console.log(erro.config);
        }
    };

    const  handleViewArticle = () => {
        const articleData = await Article.getById('1');

        console.log('articleData', articleData);
    }
    

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleViewArticle}>Ver articulo</button>
        </div>
    )
}

export default Login;