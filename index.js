// let i = 1;
// const table = document.querySelector('table tbody');
// const pagination = document.querySelector('ul#pagination');
// const url = `https://api.odcloud.kr/api/15077586/v1/centers?page=${i}&perPage=10&serviceKey=6yFQgdR5387eodCbxm71SXriPOI%2FtOYARS3pPXf53y4qkHUm9%2BUGERmHnKKfLqp1Dzs%2F7za%2BOJX7nc5ZW%2BOOVA%3D%3D`

// fetch(url)
// .then(response=>response.json())
// .then(function(data){

//     // create table
//     for(let x=0; x<data.data.length; x++){
//         const sido = data.data[x].sido;
//         const centerName = data.data[x].centerName;
//         const address = data.data[x].address;
//         const phoneNumber = data.data[x].phoneNumber;
        
//         const newRow = table.insertRow();
//         const newCell1 = newRow.insertCell(0);
//         const newCell2 = newRow.insertCell(1);
//         const newCell3 = newRow.insertCell(2);
//         const newCell4 = newRow.insertCell(3);
//         const newCell5 = newRow.insertCell(4);

//         newCell1.innerText = sido;
//         newCell2.innerText = centerName;
//         newCell3.innerText = address;
//         newCell5.innerText = phoneNumber;
//     }

//     // create pagination
//     for(let y=1; y<data.totalCount/data.perPage; y++){
//         const li = document.createElement("li");
//         pagination.appendChild(li);
//         li.innerText = y;
//     }

//     i=2;
//     console.log('1' + i);

    
// })

// console.log(i)
