import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div style={{border:'2px solid red', margin:'5px'}}>
            <h2>My Device:{props.name}</h2>
            <h4>Current steps: {props.steps}</h4>
            <Config price={props.price}/>
        </div>
    );
};

export default Device;