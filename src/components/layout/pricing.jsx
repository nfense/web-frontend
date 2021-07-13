import React, { useState } from "react";
import PricingFeature from "../gui/pricing-feature";
import {
  Box,
  Button,
  chakra,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Pricing() {
  const [frequency, setFrequency] = useState("month");

  return (
    <Flex
      w="full"
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Box py="64px" px="10" bg={useColorModeValue("gray.100", "gray.700")}>
        <Box w="full" px={[10, 0, 4]} mx="auto" textAlign="center">
          <Text mb={2} fontSize="5xl" fontWeight="bold" lineHeight="tight">
            Plans & Pricing
          </Text>
          <chakra.p
            mb={6}
            fontSize={["lg", "xl"]}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            5 minute installation · Try Startup Tier features for 14 days · No
            credit card required
          </chakra.p>
          <Flex justify="center" mx={["auto", 0]} mb={-2}>
            <Stack
              direction="row"
              justify="space-between"
              p="2"
              textAlign="center"
              rounded="md"
              bg={useColorModeValue("gray.200", "gray.600")}
            >
              <Button
                colorScheme="brand"
                variant={frequency === "month" ? "outline" : "ghost"}
                color={frequency === "month" ? "purple.400" : "blackAlpha.500"}
                onClick={() => setFrequency("month")}
                px={6}
              >
                Bill Monthly
              </Button>
              <Button
                colorScheme="brand"
                color={frequency === "year" ? "purple.400" : "blackAlpha.500"}
                variant={frequency === "year" ? "outline" : "ghost"}
                onClick={() => setFrequency("year")}
                px={6}
              >
                Bill Yearly
              </Button>
            </Stack>
          </Flex>
        </Box>
        <Box maxW="7xl" py="20" mx="auto">
          <SimpleGrid columns={[1, 3]} gap={[16, 8]}>
            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg={useColorModeValue("white", "gray.800")}
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"
                borderColor={useColorModeValue("gray.200", "gray.600")}
              >
                <chakra.p
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  Free Tier
                </chakra.p>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color={useColorModeValue("gray.900", "gray.50")}
                  lineHeight="tight"
                >
                  ${frequency === "month" ? 0 : 0}
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    {" "}
                    /{frequency}
                  </chakra.span>
                </Text>
                <Link
                  w={["full", "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color={useColorModeValue("dark")}
                  bg={useColorModeValue("brand.600", "brand.500")}
                  _hover={{
                    bg: useColorModeValue("brand.700", "brand.600"),
                  }}
                >
                  Get started
                </Link>
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <PricingFeature>3 Members per team</PricingFeature>
                <PricingFeature>10 Firewall Rules</PricingFeature>
                <PricingFeature>Access Control</PricingFeature>
                <PricingFeature>Country Blocker</PricingFeature>
                <PricingFeature>DDoS Mitigation</PricingFeature>
                <PricingFeature>Down Time Detector</PricingFeature>
                <PricingFeature>Fast DNS Server</PricingFeature>
                <PricingFeature>L4 Reverse Proxy</PricingFeature>
                <PricingFeature>Static Content Cache</PricingFeature>
                <PricingFeature>Web Application Firewall</PricingFeature>
              </Stack>
            </Box>

            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg={useColorModeValue("white", "gray.800")}
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"
                borderColor={useColorModeValue("gray.200", "gray.600")}
              >
                <chakra.p
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  Startup Tier
                </chakra.p>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color={useColorModeValue("gray.900", "gray.50")}
                  lineHeight="tight"
                >
                  ${frequency === "month" ? 9 : 89}
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    {" "}
                    /{frequency}
                  </chakra.span>
                </Text>
                <Link
                  w={["full", "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color={useColorModeValue("gray.800")}
                  bg={useColorModeValue("gray.50", "gray.600")}
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                >
                  Try for free
                </Link>
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <PricingFeature isnew={true}>25 Members per team</PricingFeature>
                <PricingFeature isnew={true}>25 Firewall Rules</PricingFeature>
                <PricingFeature>Access Control</PricingFeature>
                <PricingFeature isnew={true}>Bad IP Datasets</PricingFeature>
                <PricingFeature isnew={true}>Content Delivery Network (100MB)</PricingFeature>
                <PricingFeature>Country Blocker</PricingFeature>
                <PricingFeature isnew={true}>Custom Error Pages</PricingFeature>
                <PricingFeature>DDoS Mitigation</PricingFeature>
                <PricingFeature>Down Time Detector</PricingFeature>
                <PricingFeature>Fast DNS Server</PricingFeature>
                <PricingFeature>HTTP (L4) Reverse Proxy</PricingFeature>
                <PricingFeature isnew={true}>Load Balancing</PricingFeature>
                <PricingFeature isnew={true}>TCP & UDP (L7) Reverse Proxy</PricingFeature>
                <PricingFeature>Static Content Cache</PricingFeature>
                <PricingFeature>Web Application Firewall</PricingFeature>
              </Stack>
            </Box>

            <Box
              rounded={["none", "lg"]}
              shadow={["none", "md"]}
              bg={useColorModeValue("white", "gray.800")}
            >
              <Flex
                direction="column"
                justify="space-between"
                p="6"
                borderBottomWidth="1px"
                borderColor={useColorModeValue("gray.200", "gray.600")}
              >
                <chakra.p
                  mb={1}
                  fontSize="lg"
                  fontWeight="semibold"
                  color={useColorModeValue("gray.700", "gray.400")}
                >
                  Business Tier
                </chakra.p>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={["bold", "extrabold"]}
                  color={useColorModeValue("gray.900", "gray.50")}
                  lineHeight="tight"
                >
                  ${frequency === "month" ? 21 : 189}
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue("gray.600", "gray.400")}
                  >
                    {" "}
                    /{frequency}
                  </chakra.span>
                </Text>
                <Link
                  w={["full", "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color={useColorModeValue("gray.800")}
                  bg={useColorModeValue("gray.50", "gray.600")}
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                >
                  Try for free
                </Link>
              </Flex>
              <Stack direction="column" p="6" spacing="3" flexGrow="1">
                <PricingFeature isnew={true}>50 Members per team</PricingFeature>
                <PricingFeature isnew={true}>50 Firewall Rules</PricingFeature>
                <PricingFeature>Access Control</PricingFeature>
                <PricingFeature isnew={true}>Automated Penetration Tests</PricingFeature>
                <PricingFeature>Bad IP Datasets</PricingFeature>
                <PricingFeature isnew={true}>Content Delivery Network (1GB)</PricingFeature>
                <PricingFeature>Country Blocker</PricingFeature>
                <PricingFeature>Custom Error Pages</PricingFeature>
                <PricingFeature>DDoS Mitigation</PricingFeature>
                <PricingFeature>Down Time Detector</PricingFeature>
                <PricingFeature>DDoS Mitigation</PricingFeature>
                <PricingFeature>Fast DNS Server</PricingFeature>
                <PricingFeature>HTTP (L4) Reverse Proxy</PricingFeature>
                <PricingFeature>Load Balancing</PricingFeature>
                <PricingFeature isnew={true}>Market Analythics</PricingFeature>
                <PricingFeature isnew={true}>Malware scans for uploads</PricingFeature>
                <PricingFeature isnew={true}>Rate Limiting</PricingFeature>
                <PricingFeature>Static Content Cache</PricingFeature>
                <PricingFeature>TCP & UDP (L7) Reverse Proxy</PricingFeature>
                <PricingFeature>Web Application Firewall</PricingFeature>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
}