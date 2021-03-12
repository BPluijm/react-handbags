import React from "react";

function Button({ name, disable }) {
    return (
        <button disabled={disable}
            onClick={() => console.log({name}.name)}>
            {name}
        </button>
    );
}

export default Button;