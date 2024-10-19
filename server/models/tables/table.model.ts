export interface Table {
    id: number;
    number: number;
    state: 'BOCKED' | 'FREE' | 'PENDING';
}

export interface TableURIModel {
    id: number;
}

export interface CreateTable {
    id: number;
    number: number;
    state: 'BOCKED' | 'FREE' | 'PENDING';
}

export interface UpdateTable {
    number: number;
    state: 'BOCKED' | 'FREE' | 'PENDING';
}


