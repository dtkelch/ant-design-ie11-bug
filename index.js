import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, Select, Popover, version } from "antd";
const { Option } = Select;
import "antd/dist/antd.css";
import "./index.css";
import 'core-js/stable';
import 'regenerator-runtime/runtime';


const App = () => (
    <div className="App">
        <h1>antd version: {version}</h1>
        <DatePicker />
        <Select defaultValue="1" style={{ width: 120 }}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
        </Select>

        <Popover
            placement="bottom"
            content={"Testing"}
            trigger="click"
        >
            <Button>Click Me</Button>
        </Popover>

    </div>
)

const body = document.getElementsByTagName('BODY')[0];
const root = document.createElement('div');
root.id = 'root';
body.appendChild(root);

// render the app
ReactDOM.render(<App />, root);


