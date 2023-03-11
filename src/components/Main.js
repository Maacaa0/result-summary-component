import React from "react";
import CountUp from "react-countup";

export default function Main(props) {

    return (
        <div className="main_container">
            <h2>Your Result</h2>
            <div>
                <h3><CountUp duration={.6} end={props.scoreAvg} /></h3>
                <p>of 100</p>
            </div>

            <h3>Great</h3>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}