//cách 1: dùng destructring nếu không phải export default
import logger from './logger/index.js'
//cách 2: dùng *
import * as constant from './10.2.constant.js'
console.log( logger)
console.log(constant);
logger('test message TYPE LOG: ', constant.TYPE_LOG);
logger('test message TYPE WARN', constant.TYPE_WARN);
logger('test message TYPE ERROR', constant.TYPE_ERROR);
