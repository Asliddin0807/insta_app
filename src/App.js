import "./App.css";
import Header from "./components/Header/Header";
import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import ApiService from "./service/api";
import Post from "./components/Post/Post";

function App() {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isShow, setShow] = useState(true);
  const toast = useToast();

  const fetchData = async () => {
    toast({
      title: "Video yuklanmoqda!",
      isClosable: true,
      status: "loading",
      position: "top-right",
    });
    setLoading(true);
    const { data } = await ApiService.getData(url);
    if (data.success) {
      setVideo(data);
      setLoading(false);
      toast({
        title: "Video tayor!",
        isClosable: true,
        status: "success",
        position: "top-right",
      });
      setShow(false);
    }else{
      toast({
        title: "Video link noto'g'ri kiritingiz!",
        isClosable: true,
        status: "error",
        position: "top-right",
      });
      setLoading(false);

    }
  };

  return (
    <Box className="App" bg={'gray.800'} h={'100vh'}>
      <Header />
      <Box mt={10} p={5} w={"100%"}>
        <Text fontSize={25} textAlign={"center"} fontFamily={"monospace"} color={'white'}>
          Instagram video linkni kiriting!
        </Text>
        <Flex
          alignItems={"center"}
          w={{ base: "100%", md: "100%" }}
          justifyContent={"center"}
          mt={4}
          gap={2}
          padding={2}
        >
          <Input
            w={{ base: "70%", md: "30%" }}
            placeholder="Instagram link"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
          <Button
            onClick={fetchData}
            colorScheme="blue"
            disabled={isLoading}
            isLoading={isLoading}
          >
            Jo'natish
          </Button>
        </Flex>
        {!isShow ? (
          <Post
            title={video?.data?.title}
            link={video?.data?.medias[0].url}
            sourse={video?.data?.source}
          />
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default App;
