import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register"
import Login from "./Login"

import { Tabs, Tab } from "react-bootstrap";

function TabsComp() {
  const [key, setKey] = useState("home");

  return (
      <div className="row justify-content-center mt-5">
      <div className="col-sm-3">
    <Tabs 
    id="controlled-tab-example" 
    activeKey={key}

    onSelect={k => setKey(k)}>
      <Tab eventKey="login" title="Giriş Yap">
       <Login/>
      </Tab>
      <Tab eventKey="register" title="Kayıt Ol">
        <Register/>
      </Tab>
    </Tabs>
    </div>
    </div>
  );
}

export default TabsComp;