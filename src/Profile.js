import React from 'react';

export default function Profile(props){
    console.log(props);
    return(
        <div>
            First Name : {props.firstName} Last Name : {props.lastName}
        </div>
    )
}