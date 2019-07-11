import * as React from 'react';
import { Button, Icon } from 'antd';
import { pageHeaderProp } from '../interfaces';

const PageHeader = ({
    isUnflod,
    showFilterPanel,
    title,
    handleShowModal
}:pageHeaderProp) => {
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