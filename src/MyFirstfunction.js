import React from 'react';

export const DefaultUserName ='Fiona';
export default function MyFirstFunction({name, age}) {
    if (name === undefined || age===undefined) {
        return <p> parameters undefined </p>;
    }
   else {return <p>User Name: {name} User Age：{age}</p>
}
}

