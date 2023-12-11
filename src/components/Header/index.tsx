import { Flex, Grid, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

export default function Header() {
  const { asPath } = useRouter();
  const isHomePage = asPath === "/";

  return (
    <Flex
      bg="white"
      width="100%"
      as="header"
      mx="auto"
      px="1rem"
      height={["50px", "100px"]}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        height="100%"
        mx="auto"
        width="100%"
        maxWidth="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        <Image
          width={["70px", "184px"]}
          src="/Logo.png"
          alt="Logo da World Trip, representado por um avião voando sobre o nome da marca"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
