import { RequestHandler } from "express";
import z from "zod";
import * as user from '../service/login';
import * as auth from '../middlewares/auth'

export const singIn: RequestHandler = async (req, res) => {
    const loginSchema = z.object({
        email: z.string().email(),
        password: z.string(),
    });

    const body = loginSchema.safeParse(req.body);
    if(!body.success) return res.json({ error: 'Dados inválidos' });

    const login = await user.login(body.data)
    
    if(login) {     
        const token = await auth.createToken(login.email, login.id)
        res.status(200).json({ user: login, token: token})        
    }

    //res.json({ error: 'Usuario nao existe'})
} 

export const singUp: RequestHandler = async (req, res) => {
    const registerSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        admin: z.boolean(),
        
    }); 

    const body = registerSchema.safeParse(req.body)

    if(!body.success) return res.json({ error: 'Dados invalidos'})

    
    const hashUser = await user.getLogin(body.data)
    
    if(!hashUser) {

        const newRegister = await user.register(body.data)
        if(newRegister) {
            const token = await auth.createToken(newRegister.email, newRegister.id)
            res.status(200).json({ user: newRegister, token: token})

        } else {
            res.status(401).json({ error: 'E-mail já existe'})
        }

    } else {
        res.status(401).json({ error: 'Algo deu errado'})
    }
    
    

   

}

