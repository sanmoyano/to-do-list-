import { Stack, StackDivider, Text, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";

import { DataContext } from "../Provider/DataProvider";

import Footer from "./Footer";
import InputItem from "./InputItem";

const InputList = () => {
    const inputColorMode = useColorModeValue("gray.50", "gray.700");
    const dividerColorMode = useColorModeValue("gray.400", "whiteAlpha.900");

    const stackConfig = {
        alignItems: "center",
        justifyContent: "center",
        left: "0",
        margin: "auto",
        maxW: "md",
        p: 6,
        right: "0",
    };

    const { tasks, setTasks } = useContext(DataContext);

    const toggleComplete = (id) => {
        const newTasks = [...tasks];

        newTasks.forEach((task, index) => {
            if (index === id) {
                task.completed = !task.completed;
            }
        });

        setTasks(newTasks);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task, index) => index !== id));
    };

    if (tasks.length === 0) {
        return (
            <Stack {...stackConfig}>
                <Text fontWeight={"bold"}>No tasks to show</Text>
            </Stack>
        );
    } else {
        return (
            <Stack {...stackConfig} as="div">
                <Stack
                    as={"div"}
                    bgColor={inputColorMode}
                    borderRadius="md"
                    divider={<StackDivider borderColor={dividerColorMode} />}
                    p={6}
                    width="100%"
                >
                    {tasks.map((task, index) => (
                        <InputItem
                            key={task.id}
                            checkComplete={toggleComplete}
                            id={index}
                            index={index}
                            removeTask={removeTask}
                            task={task}
                        />
                    ))}
                </Stack>
                <Footer />
            </Stack>
        );
    }
};

export default InputList;
