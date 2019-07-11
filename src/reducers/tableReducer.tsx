type tableProps = {
    isLoading: boolean,
    pagination: {
        page: number,
        total: number,
        dataSource: any,
        pageSize: number
    },
}

const initialState: tableProps = {
    isLoading: false,
    pagination: {
        page: 1,
        total: 0,
        dataSource: [],
        pageSize: 10,
    }
}

// 表格loading
const isLoading = (state = initialState.isLoading, action: any) => {
    switch(action.type){
        case 'CHANGE_TABLE_LAODING':
            return action.isLoading;
        default:
            return state;
    }
}

// 表格数据
const pagination = (state = initialState.pagination, action: any) => {
    switch(action.type){
        case 'CHANGE_OR_FILTER':
            return {
                total: action.total,
                page: action.page,
                dataSource: action.dataSource,
                pageSize: action.pageSize
            };
        default:
            return state;
    }
}

export default (state = initialState, action: any) => {
    return {
        isLoading: isLoading(state.isLoading, action),
        pagination: pagination(state.pagination, action),
    }
}