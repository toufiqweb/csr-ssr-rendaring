import React from 'react';

const UsersPage = async () => {
   
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json()

    console.log(users);
    

    return (
        <div className='max-h-[40vh] py-10'>
            <h1 className=' font-bold text-5xl text-center'>Users : {users.length}</h1>
        </div>
    );
};

export default UsersPage;