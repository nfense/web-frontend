import { Component } from "react";
import Features from "../components/layout/features";
import Hero from "../components/layout/hero";
import Pricing from "../components/layout/pricing";

export default class MainPage extends Component {
    render () {
        return (
            <div>
                <Hero />
                <Features />
                <Pricing/>
            </div>
        )
    }
}