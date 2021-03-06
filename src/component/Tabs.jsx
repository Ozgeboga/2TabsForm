import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register"
import Login from "./Login"
import "./tabstyle.css"

import { Tabs, Tab } from "react-bootstrap";

function TabsComp() {
    

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-sm-3 border">
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
                     eventKey="register" 
                     title="Kayıt Ol"
                     >
                        <Register />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default TabsComp;