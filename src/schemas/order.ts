import * as Yup from 'yup';

export const orderSchema = Yup.object({
    name: Yup.string()
        .trim()
        .min(2, 'Name should be at least 2 characters.')
        .required('Name is required'),
    email: Yup.string().trim().email('Provide valid email.').required('Email is required'),
    phone: Yup.string()
        .trim()
        .min(12, 'Phone should be at least 12 characters.')
        .required('Phone is required'),
    address: Yup.string()
        .trim()
        .min(5, 'Address should be at least 5 characters.')
        .required('Address is required'),
    items: Yup.array().min(1, 'At least one item should be added.').required(),
});

export type Order = Yup.InferType<typeof orderSchema>;
