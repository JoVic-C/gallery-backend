import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { createToken } from "../middlewares/auth";

type LoginFilters = {email: string, password: string}
export const login = async (filter: LoginFilters) => {
    try{
        return await prisma.user.findFirst({ where: filter });
    } catch(err) {
        return false;
    }
}
type RegisterCreateData = Prisma.Args<typeof prisma.user, 'create'>['data']
export const register = async(data: RegisterCreateData) => {
    try {
        return await prisma.user.create({ data })
    } catch(err) {
        return false;
    }
}
