import React from "react";
import Logo from "./logo";
import SignIn from "./signIn";


function Nav_bar(){
    return(
        <div className="bg-violet-700/30 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-white">
            <Logo/>
            <SignIn/>
        </div>
    </div>
    )
}
export default Nav_bar;