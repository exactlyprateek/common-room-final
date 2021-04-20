import React from "react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
export default function Logo(props) {
  return (
    <Box {...props}>
      <Image borderRadius="15px" className="shadow-custom-anim" src="/logo.png" alt="logo" width="50px" />
    </Box>
  );
}