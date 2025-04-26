import React from "react";
import { Outlet, Link } from "react-router-dom";


const Layout = () => {

    return(

        <main className="app">
                <aside className="sidebar">
                    <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create">Share</Link></li>
                        
                    </ul>
                    </nav>
                </aside>
                <section className="content">
                    <Outlet />
                </section>
                
                
        </main>

        
    )
}

export default Layout