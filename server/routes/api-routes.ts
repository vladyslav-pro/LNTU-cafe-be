    import {Router} from "express";
    import {createTable, deleteTable, getAllTables, getTableById, updateTableInfo} from "../controllers";

    export const apiRoutes = () => {
        const router = Router();

        router.get('/tables', getAllTables);
        router.get('/tables/:id', getTableById);
        router.post('/tables', createTable);
        router.put('/tables/:id', updateTableInfo);

        router.delete('/tables/:id', deleteTable);

        router.get('/user', (req, res) => {
            res.json({message: 'Hello user API!'});
        });

        return router;
    }