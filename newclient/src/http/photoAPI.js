import {$authHost} from './axiosManager';

export const sendPhoto = async (photo) => {
    const {data} = await $authHost.post('api/photo', photo);
    return data;
}