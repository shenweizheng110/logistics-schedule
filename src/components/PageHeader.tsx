import * as React from 'react';
import { Button, Icon } from 'antd';

interface PageHeaderProps{
    title: string
    isUnflod: boolean,
    showFilterPanel: (isUnflod: boolean) => void,
    handleShowModal: (isShowModal: boolean) => void
}

const PageHeader = ({isUnflod, showFilterPanel, title, handleShowModal}:PageHeaderProps) => {
    return(
        <>
            <div className='page-title'>{title}</div>
            <div className='page-header-base-button'>
                <Button className='left-button' type='primary' onClick={() => handleShowModal(true)}>添加</Button>
                <Button type='default' onClick={() => showFilterPanel(!isUnflod)}>
                    筛选<Icon type={isUnflod ? 'up' : 'down'} />
                </Button>
            </div>
        </>
    )
}

export default PageHeader;