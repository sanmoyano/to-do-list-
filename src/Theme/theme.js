import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
    config: {
        initialColorMode: "dark",
    },

    colors: {
        primary: theme.colors.gray,
        secondary: theme.colors.whatsapp,
    },

    styles: {
        global: {
            "html, body, #root": {
                heigth: "100%",
            },
        },
    },
});
