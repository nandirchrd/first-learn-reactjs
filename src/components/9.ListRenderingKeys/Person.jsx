import React, { Fragment } from "react";

const Person = (props) => {
    const {id, person:{name, age, position}} = props;
    console.log(props)
    return (
        <Fragment>
            <p>{id}</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Position: {position}</p>
            <br/>
        </Fragment>
    )
}

export default Person;