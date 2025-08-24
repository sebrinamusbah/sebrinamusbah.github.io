import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
    return ( <
        HelmetProvider >
        <
        section id = "home"
        className = "home intro_sec"
        style = {
            { backgroundImage: `url("/")` }
        } >
        <
        Helmet >
        <
        meta charSet = "utf-8" / >
        <
        title > { meta.title } < /title> <
        meta name = "description"
        content = { meta.description }
        /> < /
        Helmet >

        { /* Text Section */ } <
        div className = "text" >
        <
        div className = "intro" >
        <
        h2 > { introdata.title } < /h2> <
        h1 >
        <
        Typewriter options = {
            {
                strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
            }
        }
        /> < /
        h1 > <
        p > { introdata.description } < /p>

        <
        div className = "intro_btn-action" >
        <
        Link to = "/portfolio" >
        <
        div id = "button_p"
        className = "ac_btn btn" >
        My Portfolio <
        div className = "ring one" > < /div> <
        div className = "ring two" > < /div> <
        div className = "ring three" > < /div> < /
        div > <
        /Link>

        <
        Link to = "/contact" >
        <
        div id = "button_h"
        className = "ac_btn btn" >
        Contact Me <
        div className = "ring one" > < /div> <
        div className = "ring two" > < /div> <
        div className = "ring three" > < /div> < /
        div > <
        /Link> < /
        div > <
        /div> < /
        div > <
        /section> < /
        HelmetProvider >
    );
};