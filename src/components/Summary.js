import React from "react";

export default function Summary(props) {
    return (
        <section className={`category-${props.value}`}>
            <div className="category_container">
                <img src={props.img} alt="#" />
                <h4 className={`summary_type-${props.value}`}>{props.type}</h4>
            </div>
            <p className="summary_score">{props.score} <span>/ 100</span></p>
        </section>
    )
}