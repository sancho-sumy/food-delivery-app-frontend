import { Goods } from '.';

export interface Shop {
    id?: string;
    name: string;
    menu?: Goods[];
}
