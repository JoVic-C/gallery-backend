import { Prisma } from '@prisma/client';
import  { prisma } from '../lib/prisma';
import * as galleries from './gallery';

type GetAllFilter = { id_user: string, id_gallery?: number}
export const getAll = async(filters: GetAllFilter) => {
    try{
        return await prisma.pictures.findMany({ where: filters });
    } catch(err) { return false}
}

type PictureCreateData = Prisma.Args<typeof prisma.pictures, 'create'>['data']
export const create = async (data: PictureCreateData) => {
    try{
        console.log('thaise e fred minha familia linda')
        
        if(!data.id_gallery) return false;

        return await prisma.pictures.create({ data })     
    }catch(err) {
        return false;
    }
}

type PictureUpdateData = Prisma.Args<typeof prisma.pictures, 'update'>['data'];
type UpdateFilters = {id: number; id_gallery?: number; id_user: string}
export const update = async (filters: UpdateFilters, data: PictureUpdateData) => {
    try {
        return await prisma.pictures.updateMany({ where: filters, data})
    } catch(err) {return false;}
}

type DeleteFilters = {id: number; id_gallery: number; id_user: string}
export const remove = async(filters: DeleteFilters) => {
    try{
        return await prisma.pictures.delete({where: filters})
    }catch(err) {
        return false
    }
}