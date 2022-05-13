import { Button, FormControl, FormLabel, Input, Stack, useColorModeValue } from "@chakra-ui/react";
import { useContext, useState } from "react";

import { DataContext } from "../Provider/DataProvider";

const Form = () => {
    const inputColorMode = useColorModeValue("gray.100", "gray.800");

    const { tasks, setTasks } = useContext(DataContext);
    const [newTask, setNewTask] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, { name: newTask, completed: false, id: tasks.length }]);
        setNewTask("");
    };

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            left="0"
            margin="auto"
            maxW={"md"}
            p={6}
            position="absolute"
            right="0"
            top="350px"
        >
            <Stack
                bgColor={inputColorMode}
                borderRadius="md"
                opacity={0.8}
                p={6}
                position="relative"
                width="100%"
            >
                <FormControl as={"form"} onSubmit={addTask}>
                    <FormLabel> Your Task </FormLabel>
                    <Input
                        name="taks"
                        placeholder="add task.."
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <Button
                        colorScheme="secondary"
                        marginTop={6}
                        p={4}
                        size={"sm"}
                        type="submit"
                        width={"30%"}
                    >
                        add
                    </Button>
                </FormControl>
            </Stack>
        </Stack>
    );
};

export default Form;
