import React from 'react';
import UserItem from './UserItem';
import AverageAge from './AverageAge';
import jsonData from './users.json';

const UserList = () => {
   const filteredUserNames = jsonData
      .filter(item => item.role === "user")
      .map(user => user.name);

   const filteredAdmins = jsonData
      .filter(item => item.role === "admin")
      .map(user => user.name);

   const adminsAgeSum = jsonData
      .filter(item => item.role === "admin").map(age => age.age).reduce((acc, age) => {
         return acc + age
      })
   // const adminsAge = filteredAdmins[0]
   console.log(adminsAgeSum)

   return (
      <>
         <div>
            {filteredUserNames.map(userName => (
               <UserItem key={userName} name={userName} />
            ))}
         </div>
         <div>


            <AverageAge average={adminsAgeSum}></AverageAge>


         </div>
      </>

   );
};

export default UserList;
