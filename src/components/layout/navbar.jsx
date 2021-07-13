import { Component } from "react";
import { Button, Link } from "@chakra-ui/react"
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
                            <Link mr={6} href="https://blog.nfense.com/">Blog</Link>
                            <Link mr={6} href="/docs">Documentation</Link>
                            <Link mr={6} href="/pricing">Pricing</Link>
                            <Link mr={6} href="/products">Products</Link>
                            <Link mr={6} href="/opensource">Open Source</Link>
                            <Button href="https://dash.nfense.com/" colorScheme="purple" bg="purple.400" color="whiteAlpha.900">Dashboard</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}