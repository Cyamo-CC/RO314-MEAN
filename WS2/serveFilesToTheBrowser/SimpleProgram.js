var data = require('./sampledata.json');
/* 9a)Then write a command line program which reads the “sampledata.json” data and does the
following things:

for (let i=0; i<data.length; i++){
    console.log(data[i].name);
    console.log(data[i].age);
    console.log(data[i].company);
    console.log(data[i].address);
} */
//9b) with tags
/* console.log(`<table border='1'>`);
for (let i=0; i<data.length; i++){
    console.log(`<tr>`)
    console.log(`<td>`+data[i].name+`</td>`);
    console.log(`<td>`+data[i].age+`</td>`);
    console.log(`<td>`+data[i].company+`</td>`);
    console.log(`<td>`+data[i].address+`</td>`);
    console.log(`</tr>`);
} 
console.log(`</table>`);  */

`<table border='1'>`;
for (let i=0; i<data.length; i++){
    `<tr>`
    `<td>`+data[i].name+`</td>`;
    `<td>`+data[i].age+`</td>`;
    `<td>`+data[i].company+`</td>`;
    `<td>`+data[i].address+`</td>`;
    `</tr>`;
} 
console.log(`</table>`); 

