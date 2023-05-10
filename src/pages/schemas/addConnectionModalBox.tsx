import Buttons from '@/components/ComposePage/buttons/buttons';
import { Col, Form, Input, Modal, Row } from 'antd'
import Item from 'antd/es/descriptions/Item';
import React from 'react'
import { cancel } from 'redux-saga/effects';

interface MyModalProps {
    showConnectionBox?: boolean;
    onCancel?: () => void;
}

const addConnectionModalBox: React.FC<MyModalProps> = ({ showConnectionBox, onCancel }) => {
    return (
        <Modal
            visible={showConnectionBox}
            onCancel={onCancel}
            footer={null}
            closable={false}
            // width={1000}
            bodyStyle={{ borderRadius: "5px", minWidth: "15rem", minHeight: "15rem" }}
        >
            <Row style={{ padding: '0.5rem' }}>
                <Form>
                    <Form.Item label="Name" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Connection URL" name="connectionURL">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Username" name="username">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Row>
            <Row style={{display:'flex', flexDirection:'row-reverse'}}>
                <Buttons text={"Cancel"} onClick={onCancel} />
                <Buttons text={"Ok"} onClick={()=>{}} />
            </Row>
        </Modal >
    )
}

export default addConnectionModalBox