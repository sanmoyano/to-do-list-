import React from "react";
import { BrowserRouter } from "react-router-dom";

import DataProvider from "./Provider/DataProvider";
import Layout from "./Components/Layout";

const App = () => {
    return (
        <DataProvider>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </DataProvider>
    );
};

export default App;
