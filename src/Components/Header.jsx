import { Button, Icon, Stack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = () => {
    const { toggleColorMode } = useColorMode();

    const colorModeIcon = useColorModeValue(BsFillMoonFill, BsFillSunFill);
    const backgroundImage = useColorModeValue(
        "url('https://source.unsplash.com/s9CC2SKySJM')",
        "url('https://source.unsplash.com/EZrVFJUysLk')",
    );

    return (
        <Stack
            alignItems="center"
            as="header"
            bgImage={backgroundImage}
            bgPosition="center"
            bgSize="cover"
            height="70vh"
            justifyContent="center"
            maxWidth={"xxl"}
        >
            <Stack
                alignItems="center"
                direction={"row"}
                justifyContent="space-around"
                padding={6}
                width="100%"
            >
                <Text as="h1" fontSize="xl" fontWeight="bold">
                    T O D O
                </Text>
                <Button onClick={toggleColorMode}>
                    <Icon as={colorModeIcon} />
                </Button>
            </Stack>
        </Stack>
    );
};

export default Header;
