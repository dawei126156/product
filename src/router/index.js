import React from "react";
import {Switch,Redirect,Route} from "react-router-dom";

function Router({routes}){
    return <Switch>
        {routes.map((item,ind)=>item.component?<Route key={ind} path={item.path} render={props=>item.children&&item.children.length?
        <item.component {...props}>
            <Router routes={item.children}/>
        </item.component>:<item.component {...props}/>
    }/>:<Redirect from={item.path} to={item.redirect} key={ind}/>)}
    </Switch>
}

export default Router;