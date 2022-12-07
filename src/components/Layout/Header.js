import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="text-white bg-[rgb(237,100,166)] ">
            <div className="text-white text-[20px]  text-center pt-8 pb-4 md:py-6  min-[1450px]:inline-flex  md:items-center min-[1450px]:ml-[35%] title_font">
                <p>👋 &nbsp;</p>
                <div className="underline">
                    <Link to={"#"}>
                        Get Early Access now!
                    </Link>
                </div>{" "}
                <p> &nbsp;Business Name could be go here</p>
            </div>
        </div>
    );
}

export default Header;
