import * as React from 'react';
import PageHeader from '../common/PageHeader';
import { listProps } from '../../interfaces';
import CityFilterPanelContainer from '../../containers/cityContainer/CityFilterPanelContainer';
import CityTableContainer from '../../containers/cityContainer/CityTableContainer';
import CityAddModal from '../../containers/cityContainer/CityAddModalContainer';
import { Button } from 'antd';
import CityDistanceContainer from '../../containers/cityContainer/CityDistanceContainer';
import CityDistanceFilterPanelContainer from '../../containers/cityContainer/CityDistanceFilterPanelContainer';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';

const City = ({
    isUnflod,
    showFilterPanel,
    handleShowModal,
    handleClearPage,
    history
}: listProps) => {
    let pageArr = history.location.pathname.split('/');
    let pageType = pageArr[pageArr.length - 1];
    const showDistanceButton = (
        <Button className='right-button' onClick={() => handlePageChange()}>
            {
                pageType === 'list' ? '城市距离' : '城市列表'
            }
        </Button>
    )
    const handlePageChange = () => {
        let type = pageType === 'list' ? 'distance' : 'list';
        showFilterPanel(false);
        history.push(`/console/city/${type}`);
    }
    // 清空页面数据
    useEffect(() => {
        return () => {
            handleClearPage();
        }
    },[]);
    return(
        <>
            <PageHeader
                title='城市点管理'
                isUnflod={isUnflod}
                showFilterPanel={showFilterPanel}
                handleShowModal={handleShowModal}
                slot={showDistanceButton}
            />
            {
                isUnflod ? (
                    pageType === 'list' ? <CityFilterPanelContainer /> : <CityDistanceFilterPanelContainer />
                ) : null
            }
            <div className='page-content'>
                <div className='page-content-wrap'>
                    <div className='card'>
                        <div className='card-body'>
                            <Route path='/console/city/list' component={CityTableContainer} />
                            <Route path='/console/city/distance' component={CityDistanceContainer} />
                        </div>
                    </div>
                </div>
            </div>
            <CityAddModal />
        </>
    )
}

export default City;