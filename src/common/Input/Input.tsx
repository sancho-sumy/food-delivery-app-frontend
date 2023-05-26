import { ChangeEventHandler } from 'react';

interface Props {
    id: string;
    name: string;
    type?: string;
    defaultValue?: string;
    value?: string;
    placeholderText?: string;
    labelText?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    min?: number;
    max?: number;
}

export const Input = ({
    id,
    name,
    type,
    defaultValue,
    value,
    placeholderText,
    labelText,
    onChange,
    min,
    max,
}: Props) => {
    return (
        <>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input
                id={id}
                name={name}
                type={type || 'text'}
                defaultValue={defaultValue}
                value={value}
                placeholder={placeholderText}
                onChange={onChange}
                min={min}
                max={max}
            />
        </>
    );
};
