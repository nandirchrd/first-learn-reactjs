import React from "react";
// (tag, atributes, children)

const UseCreateElement = () => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h4',
            { className: 'Hello' },
            'This Is Using React.CreateElement'
        )
    )
}

export default UseCreateElement;