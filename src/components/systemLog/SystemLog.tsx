import * as React from 'react';
import SystemLogTableContainer from '../../containers/logContainer/LogTableContainer';
import { useEffect } from 'react';

interface SystemLogProps {
    handleClearPage: () => void
}

const SystemLog = ({
    handleClearPage
}: SystemLogProps) => {
    // 清空页面数据
    useEffect(() => {
        return () => {
            handleClearPage();
        }
    },[]);
    return (
        <>
            <div className='page-header'>
                <div className='page-title'>日志管理</div>
            </div>
            <div className='page-content'>
                <div className='page-content-wrap'>
                    <div className='card'>
                        <div className='card-body'>
                            <SystemLogTableContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SystemLog;