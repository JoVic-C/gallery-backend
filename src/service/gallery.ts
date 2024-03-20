import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma"



export const getAll = async(id_user: string) => {
    try {
        return await prisma.userGallery.findMany({ where: {id_user}})
    } catch(err) {
        return false;
    }
}

type GetOneFilters = {id: number, id_user?: string;}
export const getOne = async(filters: GetOneFilters) => {
    try {
        return await prisma.userGallery.findFirst({ where: filters})
    } catch(err) {
        return false;
    }
    
}

type CreateGaleryData = Prisma.Args<typeof prisma.userGallery, 'create'>['data']
export const create = async(data: CreateGaleryData) => {
    try {
        if(!data.id_user) return false;
        
        const user = await getUser(data.id_user);
        if(!user) return false
        
        return await prisma.userGallery.create({ data });
    } catch(err) {
        return false;
    }
}

type UpdateFilters = {id: number, id_user?: string}
type galeryUpdateData = Prisma.Args<typeof prisma.userGallery, 'update'>['data'];
export const update = async (filters: UpdateFilters, data: galeryUpdateData) => {
    try {
        return await prisma.userGallery.update({ where: filters, data})
    }catch(err) {
        return false
    }
}

type RemoveFilters = {id: number, id_user?: string}
export const remove = async (filter: RemoveFilters) => {
    try {
        return await prisma.userGallery.delete({ where: filter})
    }catch(err) {
        return false;
    }
}



export const getUser = async(id: string) => {
    try{
        return await prisma.user.findFirst({ where: {id}})
    } catch(err) {
        return false
    }
}