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

// 需改筛选面板的状态 是否下拉
export const CHANGE_DROP_DOWN = 'CHANGE_DROP_DOWN';
// 处理表格分页获取数据 考虑筛选数据
export const CHANGE_OR_FILTER = 'CHANGE_OR_FILTER';
// 修改表格loading
export const CHANGE_TABLE_LOADING = 'CHANGE_TABLE_LAODING'
// 展示全局提示信息
export const SHOW_MSG = 'SHOW_MSG';
// 保存筛选数据
export const SAVE_FILTER = 'SAVE_FILTER';
// 展示弹窗
export const SHOW_MODAL = 'SHOW_MODAL';
// 设置弹窗数据
export const SET_MODAL_DATA = 'SET_MODAL_DATA';
// 获取城市点距离 包含城市点基本信息
export const GET_ALL_CITY = 'GET_ALL_CITY';
// 清除页面数据
export const CLEAR_DATA = 'CLEAR_DATA';
// 获取所有的城市点
export const GET_CITY_LIST = 'GET_CITY_LIST';
// 展示订单详情弹窗
export const SHOW_DETAIL_MODAL = 'SHOW_DETAIL_MODAL';
// 手动调度中的当前步骤
export const CHANGE_CURRENT_STEP = 'CHANGE_CURRENT_STEP';
// 修改车辆表格的 selectedRowKeys
export const CHANGE_VEHICLE_SELECTED = 'CHANGE_VEHICLE_SELECTED';
// 展示分配订单的弹窗
export const SHOW_ALLOCAT_ORDER_MODAL = 'SHOW_ALLOCAT_ORDER_MODAL';
// 展示分配路线的弹窗
export const SHOW_ALLOCAT_ROUTE_MODAL = 'SHOW_ALLOCAT_ROUTE_MODAL';
// 设置分配订单穿梭狂的targetKeys
export const SET_ORDER_TARGET_KEYS = 'SET_ORDER_TARGET_KEYS';
// 设置所有为处理的订单
export const SET_ORDERS = 'SET_ORDERS';
// 当前进行分配的车辆
export const CURRENT_ALLOCAT_VEHICLE = 'CURRENT_ALLOCAT_VEHICLE';
// 当前选中的初始订单列表
export const CURRENT_TARGET_KEYS = 'CURRENT_TARGET_KEYS';
// 当前选中的初始路线
export const CURRENT_VEHICLE_ROUTE = 'CURRENT_VEHICLE_ROUTE';
// 设置车辆路线
export const SET_VEHICLE_ROUTE = 'SET_VEHICLE_ROUTE';
// 页面loading
export const SHOW_PAGE_LOADING = 'SHOW_PAGE_LOADING';
// 设置当前调度橄榄 图标数据
export const SET_SCHEDULE_INTRO = 'SET_SCHEDULE_INTRO';
// 当前调度详情
export const GET_CURRENT_SCHEDULE = 'GET_CURRENT_SCHEDULE';
// 获取所有的车辆
export const SET_ALL_VEHICLE = 'SET_ALL_VEHICLE';
// 展示调度详情弹窗
export const SHOW_SCHEDULE_DETAIL_MODAL = 'SHOW_SCHEDULE_DETAIL_MODAL';
// 调度详情信息
export const SCHEDULE_DETAIL = 'SCHEDULE_DETAIL';
// 当前手动调度结果
export const CURRENT_MANUAL_SCHEDULE = 'CURRENT_MANUAL_SCHEDULE';