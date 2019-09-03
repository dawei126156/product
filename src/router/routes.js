import React from "react";
import Login from "../views/login"
import Main from "../views/main"


const routes=[
    {
        component:Login,
        path:"/login"  
    },
    {
        component:Main,
        path:"/main"  
    },
    {
        path:"/",
        redirect:"/login"
    }
]

export default routes;