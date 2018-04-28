import * as React from "react";
import * as ReactDOM from "react-dom";

import { ToDo } from "./components/ToDo";
import { ButtonsGroup } from "./components/navbar/Navbar";

ReactDOM.render(
    <ToDo compiler="TypeScript" framework="React" />,
    // <ButtonsGroup  />,

    document.getElementById("email")
);