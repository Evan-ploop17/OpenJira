
export interface Entry {
    _id: string,
    description: string,
    createAt: number,
    status: TypeStatus,
}

export type TypeStatus = 'pending' | 'in-progress' | 'finished'