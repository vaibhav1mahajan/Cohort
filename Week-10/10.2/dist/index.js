"use strict";
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.user.findFirst({
                //   select:{firstName:true},
                where: { email: username }
            });
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    });
}
getUser('vaibhav1234');
