import * as React from 'react';
import { Form, Modal, Input, InputNumber } from 'antd';
import { modalProps } from '../../interfaces';
import { withRouter } from 'react-router-dom';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

interface CityAddModalProps {
    match: any,
    isShowModal: boolean,
    form: any,
    modalData: any,
    handleCloseModal: (form: any) => void,
    handleModalSubmit: (form: any, type: string) => void
}

const CityAddModal = (props: any) => {
    let {
        isShowModal,
        form,
        modalData,
        handleModalSubmit,
        handleCloseModal,
        match
    }: CityAddModalProps = props;
    const { getFieldDecorator } = form;
    return (
        <Modal
            visible={isShowModal}
            title={modalData.id ? '修改城市点' : '添加城市点'}
            onOk={() => handleModalSubmit(form, match.params.type)}
            onCancel={() => handleCloseModal(form)}
        >
            <Form {...formItemLayout}>
                <Form.Item label='城市点名称'>
                    {
                        getFieldDecorator('cityName',{
                            rules: [{
                                required: true, message: '城市点名称不为空'
                            },{
                                max: 32, message: '最大长度不超过32'
                            }],
                            initialValue: modalData.cityName
                        })(
                            <Input />
                        )
                    }
                </Form.Item>
                <Form.Item label='经度' className='input-number'>
                    {
                        getFieldDecorator('longitude',{
                            rules: [{
                                required: true, message: '经度不为空'
                            }],
                            initialValue: modalData.longitude
                        })(
                            <InputNumber />
                        )
                    }
                </Form.Item>
                <Form.Item label='纬度' className='input-number'>
                    {
                        getFieldDecorator('latitude',{
                            rules: [{
                                required: true, message: '纬度不为空'
                            }],
                            initialValue: modalData.latitude
                        })(
                            <InputNumber />
                        )
                    }
                </Form.Item>
            </Form>
        </Modal>
    )
}

const CityAddModalWrap = withRouter(CityAddModal);

export default Form.create<CityAddModalProps>()(CityAddModalWrap);