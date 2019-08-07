// store 由 reducer 组成
// reducer 通过处理所有 type 的action
// action 提供操作数据载核  payLoad
// 通过  dispatcher 分发action 也就是出发action  然后 reducer会匹配对应action的type 执行相应的state修改
//每次dispatch,所有的子Reducer都会执行一次, 子Reducer中action.type相同则执行相应的数据处理并且返回,如果整个子Reducer都
//没有匹配到当前action.type,那么会执行default下逻辑处理.
// 再说到这里, default应该只返回当前最新的状态集合,这样才会保证页面绑定的此部分状态不变.如果default中做了数据状态处理,那么数据
//的状态必然是会改变的.
//再举个列子:
//A_action 触发 => A_reducer处理,此时B_reducer也会因为A_action的触发而执行,只是没有匹配到自己能处理action.type,
//所以B_reducer最后执行了default下的逻辑.

export const CHANGE_DROP_DOWN = 'CHANGE_DROP_DOWN';
export const CHANGE_OR_FILTER = 'CHANGE_OR_FILTER';
export const CHANGE_TABLE_LOADING = 'CHANGE_TABLE_LAODING'
export const SHOW_MSG = 'SHOW_MSG';
export const SAVE_FILTER = 'SAVE_FILTER';
export const SHOW_MODAL = 'SHOW_MODAL';
export const SET_MODAL_DATA = 'SET_MODAL_DATA';
export const GET_ALL_CITY = 'GET_ALL_CITY';
export const CLEAR_DATA = 'CLEAR_DATA';
export const GET_CITY_LIST = 'GET_CITY_LIST';
export const SHOW_DETAIL_MODAL = 'SHOW_DETAIL_MODAL';
export const IS_CITY_USING = 'IS_CITY_USING';