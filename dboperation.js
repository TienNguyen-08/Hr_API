var config = require("./dbconfig");
const sql = require("mssql");

async function getdata(){
    try{
        let pool = await sql.connect(config);
        console.log("sql server connected");
    }catch (err){
        console.log(err);
    }
}

async function getdata_withQuery() {
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().query(" SELECT Employee_ID,First_Name,Last_Name,Gender,Shareholder_Status,Benefit_Plans,Ethnicity  FROM Personal"); 
        return res.recordsets;
    }catch (err){
        console.log(err);
    }
}

async function getdata_withQuery_Job_History() {
    try{
        let pool = await sql.connect(config);
        let res = await pool.request().query(" SELECT *  FROM Job_History"); 
        console.log("da ket noi");
        return res.recordsets;
    }catch (err){
        console.log(err);
    }
}

module.exports = {
    getdata: getdata,
    getdata_withQuery: getdata_withQuery,
    getdata_withQuery_Job_History: getdata_withQuery_Job_History
};