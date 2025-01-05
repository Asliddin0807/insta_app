import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Post({ title, sourse, link }) {
  return (
    <Box w={"100%"} display={"flex"} justifyContent={"center"}>
      <Box border={"1px solid gray"} borderRadius={"lg"} p={4}>
        <video
          src={link}
          controls
          style={{ width: "360px", height: "300px" }}
        />
        <Text textAlign={"start"} fontSize={20}>
          Platforma: {sourse}
        </Text>
        <Text textAlign={"start"} fontSize={18}>
          {title?.slice(0, 35)}...
        </Text>
      </Box>
    </Box>
  );
}
