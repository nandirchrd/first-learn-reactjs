import React, { Fragment } from "react";
import Person from "./Person";

const NameList = () => {
    const names = ["William", "Ezra", "Evan", "Arhan"];
    const persons = [
        {
            name: "Evan Dimas",
            age: "24 Years Old",
            position: "CMF"
        },
        {
            name: "Egy Maulana",
            age: "23 Years Old",
            position: "AMF"
        },
        {
            name: "Irfan Jaya",
            age: "24 Years Old",
            position: "AMF"
        },
        {
            name: "Shin Tae Yong",
            age: "44 Years Old",
            position: "Coach"
        },
        {
            name: "Dewangga",
            age: "24 Years Old",
            position: "CB"
        }
    ]

    const nameList = names.map((name, keyid) => <h4 key={keyid}> {name} </h4>);
    const personList = persons.map((person, i) => (
        <div key={i}>
            <Person person={person}></Person>
        </div>
    ))
    
    return (
        <Fragment>
            {personList}
        </Fragment>
    )
}

export default NameList;