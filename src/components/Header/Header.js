import React from "react";
import { Box, Flex, Heading, Button, Spacer } from "@chakra-ui/react";
export default function Header() {
  return (
    <Box bg="gray.900" px={4} py={5} color="white">
      <Flex align="center">
        {/* Логотип или название */}
        <Heading size="md">Instagram video yuklovchi</Heading>

        {/* Распределитель пространства */}
        <Spacer />

        {/* Ссылки или кнопки */}
        <Flex gap={4}>
          <Button colorScheme="teal" size="sm">
            Войти
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
