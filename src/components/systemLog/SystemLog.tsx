import * as React from 'react';
import PageHeader from '../common/PageHeader';
import { listProps } from '../../interfaces';
import SystemLogFilterPanel from './SystemLogFilterPanel';
import SystemLogTable from './SystemLogTable';

const SystemLog = ({
    isUnflod,
    showFilterPanel,
    handleShowModal,
    handleClearPage
}: listProps) => {
    const handleFilterSubmit = (form: any) => {

    }
    const handleResetFilter = (form: any) => {

    }
    return (
        <>
            <PageHeader
                title='系统日志'
                isUnflod={isUnflod}
                showFilterPanel={showFilterPanel}
                handleShowModal={handleShowModal}
            />
            {
                isUnflod ? <SystemLogFilterPanel
                                handleFilterSubmit={handleFilterSubmit}
                                handleResetFilter={handleResetFilter}
                            /> : null
            }
            <div className='page-content'>
                <div className='page-content-wrap'>
                    <div className='card'>
                        <div className='card-body'>
                            <SystemLogTable
                                isLoading={false}
                                dataSource={[]}
                                page={1}
                                total={0}
                                pageSize={10}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SystemLog;