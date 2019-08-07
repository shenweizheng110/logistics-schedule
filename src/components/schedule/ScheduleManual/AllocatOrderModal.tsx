import * as React from 'react';
import { Modal, Transfer, Table } from 'antd';
import { useState } from 'react';

type AllocatOrderModalProps = {
    isShowModal: boolean,
    orders: any
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
    dataIndex: 'load',
},{
    title: '体积',
    dataIndex: 'volume',
},{
    title: '起始点',
    dataIndex: 'currentCityName',
},{
    title: '目的点',
    dataIndex: 'targetCityName',
}];

const rightTableColumns = [{
    title: '订单编号',
    dataIndex: 'number',
}];

const AllocatOrderModal = ({
    isShowModal,
    orders
}: AllocatOrderModalProps) => {
    // 已经选中的数组 出现在右边的
    const [targetKeys, setTargetKeys] = useState([]);
    // 两栏之间转移的 change 函数
    const handleChange = (nextTargetKeys: any) => {
        setTargetKeys(nextTargetKeys);
    };

    return (
        <>
            <Modal
                title='订单分配'
                width={1000}
                visible={isShowModal}
                destroyOnClose={true}
            >
                <TableTransfer
                    titles={['未处理','已选中']}
                    dataSource={orders}
                    targetKeys={targetKeys}
                    onChange={handleChange}
                    leftColumns={leftTableColumns}
                    rightColumns={rightTableColumns}
                />
            </Modal>
        </>
    )
}

export default AllocatOrderModal;