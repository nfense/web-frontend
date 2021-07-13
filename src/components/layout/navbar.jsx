import { Component } from "react";
import { Button } from "@chakra-ui/react"
import styles from "./navbar.module.css";

export default class Navbar extends Component {
    render () {
        return (
            <div className={styles["navbar"]}>
                <div className={styles["wrapper"]}>
                    <div className={styles["content"]}>
                        <div className={styles["brand"]}>
                            <img alt="logo" src="/logo.png" />
                            <a href="/">Nfense</a>
                        </div>

                        <div className={styles["right-content"]}>
                            <Button href="https://dash.nfense.com/" colorScheme="purple" bg="purple.400" color="whiteAlpha.900">Dashboard</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}