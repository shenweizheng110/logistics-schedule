import * as React from 'react';
import { Modal, Transfer, Table } from 'antd';
import { useEffect, useState } from 'react';

type AllocatOrderModalProps = {
    isShowAllocatOrderModal: boolean,
    orderList: any,
    currentTargetKeys: any,
    handleAllocatSubmit: (nextTargetKeys: any) => void,
    handleCloseModal: () => void,
    handleOrderChange: (nextTargetKeys: any) => void,
    getAllUndispoedOrders: () => void
}

type TableTransferProps = {
    leftColumns: any,
    rightColumns: any,
    titles: string[],
    dataSource: any,
    targetKeys: any,
    onChange: (nextTargetKeys: any, direction?: string, moveKeys?: any) => void
}

const TableTransfer = ({
    leftColumns,
    rightColumns,
    ...restProps
}: TableTransferProps) => {
    return (
        <Transfer
            {...restProps}
            showSelectAll={false}
            rowKey={record => record.number}
        >
            {
                ({
                    direction,
                    filteredItems,
                    onItemSelectAll,
                    onItemSelect,
                    selectedKeys: listSelectedKeys,
                }) => {
                    const columns = direction === 'left' ? leftColumns : rightColumns;
                    const rowSelection = {
                        onSelectAll(selected: boolean, selectedRows: any) {
                            const treeSelectedKeys = selectedRows
                                .map(({key}: any) => key);
                            const diffKeys = selected
                                ? treeSelectedKeys
                                : listSelectedKeys
                            onItemSelectAll(diffKeys, selected);
                        },
                        onSelect({ key }: any, selected: boolean) {
                            onItemSelect(key, selected);
                        },
                        selectedRowKeys: listSelectedKeys,
                    };
                    return (
                        <Table
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={filteredItems}
                            size="small"
                            onRow={({ key }) => ({
                                onClick: () => {
                                    onItemSelect(key, !listSelectedKeys.includes(key));
                                },
                            })}
                        />
                    );
                }
            }
        </Transfer>
    )
}

const leftTableColumns = [{
    title: '订单编号',
    dataIndex: 'number',
},{
    title: '重量',
    dataIndex: 'orderLoad',
},{
    title: '体积',
    dataIndex: 'orderVolume',
},{
    title: '起始点',
    dataIndex: 'startCityName',
},{
    title: '目的点',
    dataIndex: 'targetCityName',
}];

const rightTableColumns = [{
    title: '订单编号',
    dataIndex: 'number',
}];

const AllocatOrderModal = ({
    isShowAllocatOrderModal,
    orderList,
    currentTargetKeys,
    handleAllocatSubmit,
    handleCloseModal,
    getAllUndispoedOrders,
    handleOrderChange
}: AllocatOrderModalProps) => {
    // 获取所有的订单列表
    useEffect(() => {
        getAllUndispoedOrders();
    }, []);
    return (
        <>
            <Modal
                title='订单分配'
                width={1000}
                visible={isShowAllocatOrderModal}
                destroyOnClose={true}
                onCancel={handleCloseModal}
                onOk={() => handleAllocatSubmit(currentTargetKeys)}
            >
                <TableTransfer
                    titles={['未处理','已选中']}
                    dataSource={orderList}
                    targetKeys={currentTargetKeys}
                    onChange={handleOrderChange}
                    leftColumns={leftTableColumns}
                    rightColumns={rightTableColumns}
                />
            </Modal>
        </>
    )
}

export default AllocatOrderModal;