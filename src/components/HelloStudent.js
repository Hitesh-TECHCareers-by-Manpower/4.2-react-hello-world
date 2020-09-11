import React from 'react';

const HelloStudent =  props  => {
    let name = props.name;
    let unit = props.unit;

    return (
        <p>
            Hello
            &nbsp;{ name },
            welcome to TECHCareers and its React unit!
            Their favourite unit is:&nbsp;
            { unit }
        </p>
    )
}

export default HelloStudent;