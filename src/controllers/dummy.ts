import { Request, Response } from 'express';

export default {
    findAll (req: Request, res: Response) {
        res.send('<h1>list of all results!</h1>');
    },

    findOne (req: Request, res: Response) {
        res.send(`<h3>listing details for</h3> <h1>${req.params.id}</h1>`);
    },
}