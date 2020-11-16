import React from 'react';
import UserList from '../components/user_list/UserList';
const User = () =>{
const USERS = [{
    id:'uid1',
    name:'Sanjay Gandu',
    image: 'https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0',
    places : 3,
}];

    return <UserList items ={USERS}/>
}
export default User;