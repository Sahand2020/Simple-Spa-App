import React from 'react';

const UserF = (props) => {
    const {name, age} = props;
    return (
        <div>
            <p>
                Hello i am {name} and I am {age} years old.
            </p>
            
        </div>
    );
};

export default UserF;