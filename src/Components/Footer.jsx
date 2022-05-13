import { Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";

import { DataContext } from "../Provider/DataProvider";

const Footer = () => {
    const { tasks, setTasks } = useContext(DataContext);

    const removeAll = () => {
        setTasks([]);
    };

    return (
        <Stack direction={"row"} justifyContent="center" p={6} spacing={6} w="100%">
            <Stack>
                <Text opacity={".5"}>
                    Tasks left: {tasks.filter((task) => task.completed === false).length}
                </Text>
            </Stack>
            <Link onClick={removeAll}>Clear All</Link>
        </Stack>
    );
};

export default Footer;
