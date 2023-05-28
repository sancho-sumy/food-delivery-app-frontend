import { MouseEventHandler } from 'react';

import clsx from 'clsx';
import styles from './Button.module.scss';

interface Props {
    type?: 'button' | 'submit' | 'reset' | undefined;
    buttonText: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    size?: 'standard' | 'big' | 'medium' | 'small';
    design?: 'primary' | 'success' | 'danger';
    isDisabled?: boolean;
}

export const Button = ({
    type = 'button',
    buttonText,
    onClick,
    size = 'standard',
    design = 'primary',
    isDisabled = false,
}: Props) => {
    return (
        <button
            className={clsx(styles.btn, {
                [styles.standard]: size === 'standard',
                [styles.big]: size === 'big',
                [styles.medium]: size === 'medium',
                [styles.small]: size === 'small',
                [styles.primary]: design === 'primary',
                [styles.success]: design === 'success',
                [styles.danger]: design === 'danger',
            })}
            type={type}
            onClick={onClick}
            disabled={isDisabled}
        >
            {buttonText}
        </button>
    );
};
