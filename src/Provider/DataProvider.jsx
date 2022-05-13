import { useState, createContext, useEffect } from "react";

export const DataContext = createContext();

const { Provider } = DataContext;

const DataProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));

        if (tasks) {
            setTasks(tasks);
        }
    }, []);

    const contextValues = {
        tasks,
        setTasks,
    };

    return <Provider value={contextValues}>{children}</Provider>;
};

export default DataProvider;
