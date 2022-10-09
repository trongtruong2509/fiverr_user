import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FAQ = () => {
   return (
      <div>
         <p className="mb-6 text-xl font-semibold text-secondary">FAQ</p>
         <Collapse bordered={false}>
            <Panel header="What do you need to get started?" key="1">
               I need your login credentials to get started.
            </Panel>
            <Panel
               header="What if i am afraid of sharing my personal email ?"
               key="2"
            >
               No worries , just take me email and make me an editor.
            </Panel>
            <Panel
               header="Will you customize weebly,wix or squarespace themes?"
               key="3"
            >
               Yes you will get fully customized weebly , wix or squarespace
               website for sure , i dont work on premade templates
            </Panel>
            <Panel
               header="How much is your experience in website design ?"
               key="4"
            >
               Over 5 years of experience , contact me to have a look at my
               portfolio
            </Panel>
         </Collapse>
      </div>
   );
};

export default FAQ;
