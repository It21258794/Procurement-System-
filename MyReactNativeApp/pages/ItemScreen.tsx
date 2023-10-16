// Import necessary components and libraries
import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import {
  NativeBaseProvider,
  Text,
  Box,
  AspectRatio,
  Center,
  HStack,
  Heading,
  Stack,
  Button,
  Input,
  FormControl,
  Select,
  CheckIcon,
  Slider,
  TextArea,
} from "native-base";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

function ItemScreen({ navigation }) {
  const route = useRoute();
  const { id, itemName, price, img, quantity, supplierId, type } = route.params;

  const [service, setService] = React.useState("");
  const [onChangeValue, setOnChangeValue] = React.useState(0);
  const [description, setDescription] = React.useState("");

  const handleAddToCart = async () => {
    try {
      const data = {
        id,
        itemName,
        price,
        type,
        quantity: onChangeValue,
        supplierId,
        description,
      };

      const response = await axios.post(
        "https://w3hjd9wt-8000.asse.devtunnels.ms/api/cart/createCart",
        data
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ScrollView>
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: img,
            }}
            alt="image"
          />
        </AspectRatio>
        <Box
          bg="violet.500"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
          flexDirection="row"
        >
          <Box>
            <Heading size="md" ml="-1">
              {itemName}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "white",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {price}
            </Text>
          </Box>
        </Box>
      </Box>

      <Stack p="4" space={3}>
        <FormControl.Label>Quantity - {onChangeValue}</FormControl.Label>
        <Slider
          w="100%"
          maxW="100%"
          defaultValue={0}
          minValue={0}
          maxValue={quantity}
          accessibilityLabel="hello world"
          step={1}
          onChange={(v) => {
            setOnChangeValue(Math.floor(v));
          }}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
        <FormControl.Label>Rs.{quantity * onChangeValue}</FormControl.Label>
        <TextArea
          h={20}
          placeholder="Text Area Placeholder"
          w="100%"
          maxW="100%"
          value={description}
          onChangeText={(text) => setDescription(text)}
          autoCompleteType={undefined}
        />
        <Button colorScheme="blue" size="lg" onPress={handleAddToCart}>
          Add to cart
        </Button>
        <Button colorScheme="red" size="lg">
          Cancel
        </Button>
      </Stack>
    </ScrollView>
  );
}

export default ItemScreen;
