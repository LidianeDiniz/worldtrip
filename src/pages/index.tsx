import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Flex color="red" alagin-itens="center" justify="center">
        <Box padding="30" width="30">
          <Header />
          <Banner
            backgroundImageUrl="/Background.png"
            airplaneImageUrl="/Airplane.png"
          />
        </Box>
      </Flex>
    </div>
  );
}
