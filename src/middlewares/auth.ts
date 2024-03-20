
import * as user from '../service/gallery';
import 'dotenv/config';
import { RequestHandler, response } from 'express';
import  JWT  from 'jsonwebtoken';
import { prisma } from '../lib/prisma';

const notAuthorizedJson = { status: 401, message: 'Não autorizado' };


export const createToken = async (email: string, id: string) => {
    const token = JWT.sign(
        { email, id},
        process.env.JWT_SECRET as string)

        return token;
}

export const Private: RequestHandler = async (req, res, next) => {
    let sucess = false;

    if(req.headers.authorization) {
        
        const [authType, token] = req.headers.authorization.split(' ');
        if(authType === 'Bearer') {
            try {
                JWT.verify(
                    token,
                    process.env.JWT_SECRET as string
                    )
                    
                    sucess = true
                }catch(err) {
                    
                }

        }
    }
    if(sucess) {
        
        next();
    } else {
        return res.json({error: 'Não autorizado'})
    }
}

