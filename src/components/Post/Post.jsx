import { Box, Text } from "@chakra-ui/react";


export default function Post({ title, sourse, link }) {
  return (
    <Box w={"100%"} display={"flex"} justifyContent={"center"}>
      <Box border={"1px solid gray"} borderRadius={"lg"} p={4}>
        <video
          src={link}
          controls
          style={{ width: "360px", height: "300px" }}
        />
        <Text textAlign={"start"} fontSize={20} color={'white'}>
          Platforma: {sourse}
        </Text>
        <Text textAlign={"start"} fontSize={18} color={'white'}>
          {title?.slice(0, 35)}...
        </Text>
      </Box>
    </Box>
  );
}
