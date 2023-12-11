import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Banner({
  backgroundImageUrl = "/banner.jpg",
  airplaneImageUrl = "/airplane.svg"
}) {
  return (
    <Flex
      width="100%"
      height={["163px", "250px", "250px", "335px"]}
      backgroundImage={`url('${backgroundImageUrl}')`}
      backgroundPosition={["100% 20%", "100% 20%", "100% 30%"]}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        width="100%"
        mx="auto"
        padding={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
          >
            5 continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            marginTop="5"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "1480px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
        <Image
          width={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          src={airplaneImageUrl}
          alt="Ilustração de um avião amarelo voando com nuvens ao redor."
          transform="translateY(48px)"
          marginLeft="8"
        />
      </Flex>
    </Flex>
  );
}
