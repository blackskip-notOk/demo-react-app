export interface IIconHeader {
    id: number
    pathway: string
    icon: string
    undertext: string
    target: string
}

export interface ISearch {
    id: number
    name: string
    icon: string
}

export interface IIcon {
    id: number
    name: string
    icon: string
}

export interface IPagesInfo {
    pageSize: number
    requestPage: number
    pages: Array<number>
    portionCount: number
    portionSize: number
}
export interface IPaginatorIcons {
    readonly prevPage: string
    readonly nextPage: string
}