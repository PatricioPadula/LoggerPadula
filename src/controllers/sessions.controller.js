import {logger} from "../app.js"

export class SessionsController{
    static redirectLogin = (req,res)=>{
        res.redirect("/login");
    };

    static failSignup = (req,res)=>{
        res.send("<p>No se pudo registrar al usuario, <a href='/registro'>intenta de nuevo</a></p>");
    };

    static renderProfile = (req,res)=>{
        const user = req.user;
        logger.info("user",user);
        res.render("profile", {user});
    };

    static failLogin = (req,res)=>{
        res.send("<p>No se pudo loguear al usuario, <a href='/login'>intenta de nuevo</a></p>");
    };
}