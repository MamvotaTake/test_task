// const card = document.getElementById('card');


const apiUrl = 'http://contest.elecard.ru/frontend_data/catalog.json';


async function cardView() {
    const res = await  fetch(apiUrl);
    const data = await res.json();

    if (category.checked ) {
        
        showCardData(data);
        cancelButton()
    }
    else {
        showCardData(data);
    }
    
    
    

}


function treeView() {
    
    showTreeData();
}

dispCard.innerHTML = `
<div class="container">
    <h3 class="text-center text-primary">Items will be displayed here.......</h3>
</div>
    
`
function cancelButton() {

    var element = document.getElementById("myDIV");
    element.remove();

    // console.log("cancelButton")
}

// Showing Data
function showCardData(apiUrl) {
    output = '';
    apiUrl.forEach(catalogs => {
        let current_date = new Date(catalogs.timestamp);
        let formatted_date = current_date.getDate() + "-" + current_date.getMonth() + "-" + current_date.getFullYear()

        console.log(sortByCategory(catalogs.category))
        console.log(sortByFilesize(catalogs.filesize))
        console.log(sortByDate(formatted_date))
    
        output += `
        
            <div class="content-box- catalog" > 
                <div class="card" id="myDIV">
                    <div class="row">
                        <img src="http://contest.elecard.ru/frontend_data/${catalogs.image}" class="card-img-top" alt="..."><span><button onclick="cancelButton()" class="cancel-btn">X</button> </span>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <h2>${catalogs.category}</h2>
                           
                            <p> File Size: ${catalogs.filesize}</p>
                            
                        </div>

                        <div class="col-md-6">
                        <br><br>
                            <p class="card-text">Date: ${formatted_date}</p>
                            
                        </div>
                    </div>
                </div>        
            </div>
        `

        // console.log(catalogs.sort(sortByCategory))
    })

    dispCard.innerHTML = `
        <div class="container ">
            <div class="row">
                <div class="col-md-4">
                    <ul class = "images text-center">
                        ${output}
                    </ul>
                </div>

                <div class="col-md-4">
                    <ul class = "images text-center">
                        ${output}
                    </ul>
                </div>

                <div class="col-md-4">
                    <ul class = "images text-center">
                        ${output}
                    </ul>
                </div>

                
            </div>
        </div>
        
    `  
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }

    
}

//Showing  tree data
function showTreeData() {
    output = '';
    output += `
        <div class="row">
        <ul id="myUL">
        <li><span class="caret">Root</span>
          <ul class="nested">
            <li><span class="caret">Images</span>
              <ul class="nested">
                <li>
                    <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU" alt="Forest" style="width:150px">
                  </a>
                </li>
                <br>

                <li>
                    <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU" alt="Forest" style="width:150px">
                  </a>
                </li>
                <br>

                <li>
                    <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU" alt="Forest" style="width:150px">
                  </a>
                </li>
                <br>
                 <li>
                    <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU" alt="Forest" style="width:150px">
                  </a>
                </li>
                <br>
              </ul>
              <li><span class="caret">Other Pictures</span>
                <ul class="nested">
                <li>
                <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU" alt="Forest" style="width:150px">
              </a>
            </li>
            <br>

            <li>
                <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU" alt="Forest" style="width:150px">
              </a>
            </li>
            <br>

            <li>
                <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU" alt="Forest" style="width:150px">
              </a>
            </li>
            <br>
             <li>
                <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtxeRw2fR1uWvBkBfpPPnT9UAwnW7HPSMGA&usqp=CAU" alt="Forest" style="width:150px">
              </a>
            </li>
            <br>
                </ul>
              </li>
            </li>
          </ul>
        </li>
      </ul>
        </div>
    `

    dispCard.innerHTML = `
        <div class="container ">
            ${output}
        </div>
    `

    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function() {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
}

// Radio function buttons
function checkButton() {
    if (card.checked){
        cardView()
        
    }else {
        treeView()
        
    }    
}

async function resetFunction() {
    const res = await  fetch(apiUrl);
    const data = await res.json();

    showCardData(data);
}

// Sorting function
function sortByCategory() {
    return [].slice.call(arguments).sort((a,b) =>{ 
        return a.category - b.category; 
      }); 
    
}

function sortByDate() {
    return [].slice.call(arguments).sort((a,b) =>{ 
        return new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf(); 
      }); 
    
}

function sortByFilesize() {
    return [].slice.call(arguments).sort((a,b) =>{ 
        return b.filesize - a.filesize;  
      }); 
    
}

function sortByFilename() {
    return [].slice.call(arguments).sort((a,b) =>{ 
        return b.category - a.category;   
      }); 
    
}

// function highest(){ 
//     return [].slice.call(arguments).sort((a,b) =>{ 
//       return b.category - a.category; 
//     }); 
// }

