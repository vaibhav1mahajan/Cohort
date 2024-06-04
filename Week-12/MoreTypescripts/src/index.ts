// interface User{
//     name : string,
//     age : number
// }

// function sum (user1 : User , user2 : User) : number{
//     return user1.age + user2.age;
// }





// interface User {
//     id : string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// // interface updateProps {
// //     name:string,
// //     age: number,
// //     password:string
// // }

// type updateProps  = Pick<User,'name' | 'age' | 'password'>;

// function updateUser(updatedProps : updateProps){

// }




// Partial


// interface User {
//     id : string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// type updateProps  = Pick<User,'name' | 'age' | 'password'>;

// type updatedProps = Partial<updateProps>;

// function updateUser(updatedProps : updatedProps){

// }



// interface User {
//     readonly name : string,
//     readonly age : number
// }

// interface User2{
//     name:string, 
//     age: number
// }

// const a : User = {
//     name:'vaibhav',
//     age:19
// }

// const b : Readonly<User2> = {
//     name:"Vaibhav",
//     age:20
// } 

// // a.age = 5;


// exclude

// type EventType = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll' | 'mousemove'>; // 'click' | 'mousemove'

// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent('click'); // OK




// relation and map

// interface User {
//     id: string;
//     name: string;
//   }
  
//   type Users = { [key: string]: User };
  
//   const users: Users = {
//     'abc123': { id: 'abc123', name: 'John Doe' },
//     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
//   };

//   interface User {
//     id: string;
//     name: string;
//   }
  
//   type Users = Record<string, User>;
  
//   const users: Users = {
//     'abc123': { id: 'abc123', name: 'John Doe' },
//     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
//   };
  
//   console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


//   // map

//   interface User {
//     id: string;
//     name: string;
//   }
  
//   // Initialize an empty Map
//   const usersMap = new Map<string, User>();
  
//   // Add users to the map using .set
//   usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
//   usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
//   // Accessing a value using .get
//   console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }


import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

// most important or the only important line
type updateProfile = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);



