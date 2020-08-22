// const db = require("../models");
const fs = require("fs");
const json2csv = require("json2csv");

module.exports = {


  create: function(employees) {
        const fields = ['firstName', 'lastName', 'description'];
        const csv = json2csv({ data: employees.body.employecb, fields: fields })
        const path = employees.body.fileName +".csv";
    // console.log(csv)
      fs.writeFile("./client/public/file/"+path, csv, function(err) {
          if (err) throw err;
          console.log("csv saved");
      })
 }
};
