import clsx from 'clsx';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteAlert, selectAlert } from '../../store/alertSlice';

import styles from './Alert.module.scss';

const Alert = () => {
    const { messages, type } = useAppSelector(selectAlert);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(deleteAlert());
        }, 15000);
        return () => {
            clearTimeout(timer);
        };
    });

    const messageList = messages?.map((message) => {
        return <li key={uuidv4()}>{message}</li>;
    });

    return (
        <div
            className={clsx(styles.alert, {
                [styles.error]: type === 'error',
                [styles.success]: type === 'success',
            })}
        >
            <ul className={styles.messageList}>{messageList}</ul>
            <button
                className={styles.close}
                onClick={() => {
                    dispatch(deleteAlert());
                }}
            >
                <span className='icon-close'></span>
            </button>
        </div>
    );
};
export default Alert;
