// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// async function insertUser(username:string , lastName:string, firstName:string,password:string){
//    const res =  await prisma.user.create({
//         data:{
//             email:username,
//             firstName,
//             lastName,
//             password
//         }
//     })
//     console.log(res);
// }
// insertUser('vaibhav1234','mahajan','vaibhav','123456789');


// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//     try {
//         const res = await prisma.user.update({
//             where:{email:username},
//             data:{
//                 firstName,
//                 lastName
//             }
//         })
//         console.log(res);
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// updateUser('vaibhav1234',{firstName:'Vaibhav' , lastName:"Mahajan"});


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
    try {
        const res = await prisma.user.findFirst({
        //   select:{firstName:true},
          where:{email:username}
        })
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

getUser('vaibhav1234')