import {Request, Response} from "express";
import {tablesDb} from "../../db/db";
import {RequestWithBody, RequestWthParams, RequestWthParamsAndBody} from "../../models/request.model";
import {CreateTable, TableURIModel, UpdateTable} from "../../models/tables/table.model";

export const getAllTables = (req: Request, res: Response) => {
    res.status(200).json(tablesDb);
};

export const getTableById = (
    req: RequestWthParams<TableURIModel>,
    res: Response
) => {
    const table = tablesDb.find(table => table.id === +req.params.id)

    if(!table) {
        res.status(404).json({message: 'Table not found'});
        return;
    }
    res.status(200).json(table);
}

export const createTable = (req: Request, res: Response) => {
    /**id will be unique after connect*/
    const newTable: CreateTable = {
        id: +(new Date()),
        number: req.body.number,
        state: req.body.state
    }

    tablesDb.push(newTable);
    res.status(201).json({message: 'Table successfully created'});
};

export const updateTableInfo = (
    req: RequestWthParamsAndBody<TableURIModel, UpdateTable>,
    res: Response
    ) => {
    const table = tablesDb.find(table => table.id === +req.params.id);

    if (!table) {
        res.status(404).json({message: 'Table not found'});
        return;
    }

    const updatedTable: CreateTable = {
        id: +req.params.id,
        number: +req.body.number,
        state: req.body.state
    }

     tablesDb.splice(tablesDb.indexOf(table), 1, updatedTable);
    res.status(201).json({message: 'Table successfully updated'});
}

export const deleteTable = (
    req: RequestWthParams<TableURIModel>,
    res: Response) => {
    tablesDb.splice(tablesDb.findIndex(table => table.id === +req.params.id), 1);
}
