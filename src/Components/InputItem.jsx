import { Button, Checkbox, Icon, Stack, Text } from "@chakra-ui/react";
import { IoMdTrash } from "react-icons/io";

const InputItem = ({ task, id, checkComplete, removeTask }) => {
    return (
        <Stack
            alignItems={"center"}
            as="div"
            direction="row"
            justifyContent="space-between"
            spacing={6}
        >
            <Checkbox
                alignItems={"center"}
                colorScheme="whatsapp"
                id={id}
                isChecked={task.completed}
                size={"lg"}
                type="checkbox"
                onChange={() => checkComplete(id)}
            >
                <Stack as="div" marginX={4}>
                    {task.completed ? (
                        <Text as={"del"} opacity={".5"}>
                            {task.name}
                        </Text>
                    ) : (
                        <Text>{task.name}</Text>
                    )}
                </Stack>
            </Checkbox>
            <Button disabled={task.completed} onClick={() => removeTask(id)}>
                <Icon as={IoMdTrash} />
            </Button>
        </Stack>
    );
};

export default InputItem;
