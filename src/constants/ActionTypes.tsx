// store 由 reducer 组成
// reducer 通过处理所有 type 的action
// action 提供操作数据载核  payLoad
// 通过  dispatcher 分发action 也就是出发action  然后 reducer会匹配对应action的type 执行相应的state修改

export const CHANGE_DROP_DOWN = 'CHANGE_DROP_DOWN';
export const CHANGE_OR_FILTER = 'CHANGE_OR_FILTER';
export const CHANGE_TABLE_LOADING = 'CHANGE_TABLE_LAODING'
export const SHOW_MSG = 'SHOW_MSG';
export const SAVE_FILTER = 'SAVE_FILTER';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SET_MODAL_DATA = 'SET_MODAL_DATA';