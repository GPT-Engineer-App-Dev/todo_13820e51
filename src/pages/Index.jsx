import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, VStack, HStack, IconButton, useToast } from "@chakra-ui/react";

import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const toast = useToast();

  const addTodo = () => {
    if (newTodo.trim() === "") {
      toast({
        title: "No todo entered.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <VStack p={8}>
      <Heading mb={6}>Todo App</Heading>
      <HStack>
        <Input placeholder="Add your new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyPress={handleKeyPress} />
        <IconButton colorScheme="blue" aria-label="Add todo" icon={<FaPlus />} onClick={addTodo} />
      </HStack>
      <Box w="100%" maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}>
        <List spacing={3}>
          {todos.map((todo, index) => (
            <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
              <Box p={2}>{todo}</Box>
              <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => deleteTodo(index)} />
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Index;
