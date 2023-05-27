import { json } from 'react-router-dom';

export const getAllShopsRequest = async (route: string) => {
    const response = await fetch(`http://localhost:7070/api/${route}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const resData = await response.json();
    if (response.ok) {
        return resData.result;
    } else {
        throw json({ message: `Cannot load ${route} list.` }, { status: 500 });
    }
};
