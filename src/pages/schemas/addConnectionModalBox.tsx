import Buttons from '@/components/ComposePage/buttons/buttons';
import { dBConnectionPostAction } from '@/redux/actions/dbConnectionAction';
import { Input, Modal } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import styles from './connectionbox.module.css'
import { showErrorToast, showSuccessToast } from './toast';


interface MyModalProps {
    showConnectionBox?: boolean;
    onCancel?: () => void;
}

function showWarningToast(message: string) {
    toast.warn(message);
}

const addConnectionModalBox: React.FC<MyModalProps> = ({ showConnectionBox, onCancel }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [connectionURL, setconnectionURL] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleOnClickCancel = () => {
        setName('')
        setDescription('')
        setconnectionURL('')
        setUsername('')
        setPassword('')
        onCancel()
    }

    const handleOnClickConnect = async () => {

        if (!name || !connectionURL || !username || !password) {
            showWarningToast('Please fill in all required fields.');
            return;
        }

        const action = dispatch(
            dBConnectionPostAction(name, description, connectionURL, username, password)
        )

        if (action) {
            setName('')
            setDescription('')
            setconnectionURL('')
            setUsername('')
            setPassword('')

            onCancel()
            showSuccessToast("Connection Successfull")
        } else {
            setUsername('')
            setPassword('')
            showErrorToast("Connection Failed")
        }

    }

    return (
        <Modal
            title="Connection Details"
            visible={showConnectionBox}
            onCancel={onCancel}
            footer={null}
            closable={false}
            bodyStyle={{
                borderRadius: "5px", minWidth: "18rem", minHeight: "17rem", display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <div className={styles.inputSection}>
                <div className={styles.inputDiv}>
                    <label htmlFor="name" className={styles.label}> Name:<span className={styles.required}>*</span></label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.inputDiv}>
                    <label htmlFor="description" className={styles.label}>Description:</label>
                    <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.inputDiv}>
                    <label htmlFor="connectionURL" className={styles.label}>Connection URL:<span className={styles.required}>*</span></label>
                    <Input id="connectionURL" value={connectionURL} onChange={(e) => setconnectionURL(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.inputDiv}>
                    <label htmlFor="username" className={styles.label}>Username:<span className={styles.required}>*</span></label>
                    <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.inputDiv}>
                    <label htmlFor="password" className={styles.label}>Password:<span className={styles.required}>*</span></label>
                    <Input.Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <Buttons text={"Cancel"} onClick={handleOnClickCancel} />
                <Buttons text={"Connect"} onClick={handleOnClickConnect} />
            </div>


        </Modal >
    )
}

export default addConnectionModalBox    