/**
* class TotalAccount Api
* @description 
*/

'use strict';
import fetch from './fetch.js';
import config from '../config/config.js';

/**
* @param {Number}  pageSize @description 页面大小
* @param {Number}  page @description 当前页码
* @param {string}  keyword @description 查询关键字
* @param {array}  sort @description 排序字段
* @param {string}  orderBy @description 排序方式
 */
const pageOptions = {
    // 页面大小
    pageSize : 20,
    // 当前页码
    page : 1 ,
    // 查询关键字
    keyword : '' ,
    // 排序字段
    sort : '' ,
    // 排序方式
    orderBy : ''
};


/**
* getTotalAccounts 获取 指定仓库的库存总账
GET: api/TotalAccount
* @param {string}  whCode @description 仓库代码
* @param {Date}    accMonth @description 账套月度
* @param {pageOptions} options @description 查询参数
* @returns axios.get Promission
*/
const getTotalAccounts = function(whCode,year,month,options){
    let path = `/api/TotalAccount/${whCode}/${year}/${month}`;
    return fetch.get(path,{pageOptions});
};

/**
 * 获取全年库存总账数据
 * GET:/api/TotalAccount/{whCode}/{year}
 */
const getFullYear = function(whCode,year,options){
    let path = `/api/TotalAccount/${whCode}/${year}`;
    return fetch.get(path,{pageOptions});
};

/**
 * 创建全年库存总账
 */
const createFullYear = function(whCode,year){
    let path = `/api/TotalAccount/createFullYear/${whCode}/${year}`;
    return fetch.post(path);
};

/**
* buildTotalAccount 
* @param {string}  whCode @description 
* @param {Number}  month @description 
* @returns axios.post Promission
*/
const buildTotalAccount = function(whCode,month){
    let path = `/api/TotalAccount/${whCode}/${month}`;
    let params = {};

    return fetch.post(path,{params});
};

/**
* clearTotalAccounts DELETE: api/ApiWithActions/5
* @param {string}  whCode @description 仓库代码
* @param {Number}  month @description 月份
* @returns axios.delete Promission
*/
const clearTotalAccounts = function(whCode,month){
    let path = `/api/TotalAccount/${whCode}/${month}`;
    let params = {};

    return fetch.delete(path,{params});
};

/**
 * 获取 CSV 数据导出链接
 * @param {string} whCode 
 * @param {Number} year 年度
 */
const getExportCsvLink = function(whCode,year){
    return  `${config.baseUrl}api/TotalAccount/exportCsv/${whCode}/${year}`;
};

export default{ 
    pageOptions,
    getTotalAccounts,buildTotalAccount
    ,clearTotalAccounts,
    getFullYear,
    createFullYear,
    getExportCsvLink
};

