import { Link } from "react-router-dom";
import {
  Card,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  CardBody,
  CardFooter,
  Image,
  GridItem,
} from "@chakra-ui/react";

function Item({ nombre, precio, id, img }) {
  return (
    <>
      <GridItem>
        <Card maxW={{ sm: "80%", md: "100%" }} m="auto" height="100%">
          <CardBody>
            <Image src={img} alt={`MOTO ` + nombre} />
            <Stack mt="4" spacing="2">
              <Heading size="sm">{nombre}</Heading>
              <Text color="gray" fontSize="md">
                €{precio}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter m="auto">
            <Link to={`/item/${id}`}>
              <Button variant="solid" colorScheme="gray" color="brown">
                Ver detalles
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  );
}

export default Item;
