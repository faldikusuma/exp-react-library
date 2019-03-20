
const mintadata = new XMLHttpRequest()

mintadata.open('GET','https://swapi.co/api/planets/?format=json',true)
//  mintadata.onreadystatechange =(e)=>{
//       console.log(mintadata.responseText)
//  }

    mintadata.onload = function ()
    {       

        let data = JSON.parse(this.response)   
    if (mintadata.status >= 200 && mintadata.status < 400) 
        {
            // console.log(data.results);
            let col = [];     
            for (let i = 0; i < data.results.length; i++) {
                for (let key in data.results[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            let table = document.createElement("table");
            table.setAttribute('class','table')
            let tr = table.insertRow(-1);                  
            
            for (let i = 0; i < col.length; i++) {
                let th = document.createElement("th");            
                th.setAttribute('scope','col')             
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
      
            for (let i = 0; i < data.results.length; i++) {

                tr = table.insertRow(-1);
                for (let j = 0; j < col.length; j++) {
                    let tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = data.results[i][col[j]];
                }
            }
 
            let divrow = document.getElementById('showData')
            divrow.innerHTML = "";
            divrow.appendChild(table);         
     
    //   function renderInfo(data){
    //        for (let i = 0; i < data.length; i++) {
    //               console.log(data[i].stylename)
    //          }
    //         }   
        }
        else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = ', gagal koneksi periksa lagi'
            app.appendChild(errorMessage)
          }
    }
mintadata.send()