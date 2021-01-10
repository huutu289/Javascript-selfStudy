
//cái hay của module: chỉ import những gì cần thiết
import { TYPE_LOG} from '../10.2.constant.js';

function logger(log, type = TYPE_LOG) {
    console[type](log);

}

//1 module chỉ dùng default 1 lần
export default logger;