import React from "react";
import { Link, Text } from "@chakra-ui/react";

const LinkFooter = ({ filter, name }) => {
    return <Link onClick={filter}>{name}</Link>;
};

export default LinkFooter;
