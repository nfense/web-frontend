import { chakra, useColorModeValue, Text } from "@chakra-ui/react";
import styles from "./hero.module.css";

export default function Hero () {
    return (
        <div className={styles["hero"]}>
            <div className={styles["content"]}>
                <h1>
                    <Text
                        style={{ display: "inline-block" }}
                        color="purple.400"
                    >
                        Protection
                    </Text>{" "}
                    for small and large enterprises.
                </h1>
                <chakra.p
                    mt={4}
                    maxW="2xl"
                    fontSize="xl"
                    mx={{ lg: "auto" }}
                    color={useColorModeValue("gray.500", "gray.400")}
                >
                    Stay away from cyber threats from your online business with
                    our scalable, reliable and highly available service.
                </chakra.p>
            </div>

            <div className={styles["image"]}>
                <img alt="startup banner" src="/banner.svg" />
            </div>
        </div>
    );
}
