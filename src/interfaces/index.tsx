export interface filterPanelProps {
    form: any,
    handleFilterSubmit: (form: any) => void,
    handleResetFilter: (form: any) => void
}

export interface listProps {
    isUnflod: boolean,
    showFilterPanel: (isUnflod: boolean) => void,
    handleShowModal: (isShowModal: boolean) => void
}

export interface tableProps {
    isLoading: boolean,
    page: number,
    total: number,
    pageSize: number,
    dataSource: any,
    handleChange: (page: number, pageSize?: number) => void,
    handleDelete: (id: number) => void,
    openEditModal: (id: number) => void
}

export interface modalProps {
    isShowModal: boolean,
    form: any,
    modalData: any,
    handleModalSubmit: (form: any) => void,
    handleCloseModal: (form: any) => void
}

export interface pageHeaderProp {
    title: string
    isUnflod: boolean,
    showFilterPanel: (isUnflod: boolean) => void,
    handleShowModal: (isShowModal: boolean) => void
}

export interface cityItemProp {
    id: number,
    name: string
}