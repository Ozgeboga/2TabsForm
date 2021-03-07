import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup"
import Login from "./Login"
import "./tabstyle.css"

import { Tabs, Tab } from "react-bootstrap";

function TabsComp() {
    

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-8 col-sm-6 col-md-4 col-lg-3 border ">
                <Tabs
                    id="uncontrolled-tab-example"
                    defaultActiveKey="login"
                    className="my-2 d-inline-flex "
                    >
                    <Tab 
                    eventKey="login" 
                    title="Giriş Yap"
                    className="tab-color"
                    >
                        <Login />
                    </Tab>
                    <Tab
                     eventKey="signup" 
                     title="Üye Ol"
                     >
                        <Signup />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default TabsComp;