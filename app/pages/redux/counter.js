/**
 * 数据模型
 */
let c = 0;

import {trigger} from './event';

export const setValue=(value)=>{
    trigger('counter-change',value);
    c = value;
}

export const getValue=()=>{
    return c;
}