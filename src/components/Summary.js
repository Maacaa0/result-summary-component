import React from "react";
import CountUp from "react-countup";

export default function Summary(props) {
    return (
        <section className={`category-${props.value}`}>
            <div className="category_container">
                <img src={props.img} alt="#" />
                <h4 className={`summary_type-${props.value}`}>{props.type}</h4>
            </div>
            <p className="summary_score"><CountUp duration={.6} end={props.score} />  <small>/ 100</small></p>
        </section>
    )
}