import React from 'react';

export default function Confirmation(props) {
    let {status} = props.value;
    return (
        <>
            {
                (() => {
                    switch(status) {
                        case 1:
                            return <h2>E-mail sent!</h2>;
                        case 2:
                            return <h2>Sending...</h2>;
                        case 3:
                            return <h2>Error! Read the browser console!</h2>;
                        default:
                            return <h2>Something has happen</h2>
                    }
                })()
            }
        </>
    );

}