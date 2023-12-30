let siteName=document.getElementById("sites");
let siteUrl=document.getElementById("url");
let submit=document.getElementById("submit");
let siteTabs=document.getElementById("siteTabs");
let buttonVisit=document.getElementsByClassName("visit");
let buttonDelete=document.getElementsByClassName("delete");
let buttonUpdate=document.getElementsByClassName("update");
let buttonSearch=document.getElementById("search");
let inputSearch=document.getElementById("inputSearch")
let list=[];
function siteAdd() {
    let items={
        siteName:siteName.value,
        siteUrl:siteUrl.value,
       
      

    }
  
    list.push(items);
    displaylist();
    clear();
}
function displaylist() {
    let site="";
    for (let index = 0; index <list.length; index++) {
         site+=`<td class="fw-bolder fs-5 text-white-50" >
         ${list[index].siteName}
       </td>
       <td>
         <button type="button" class="btn btn-warning visit" onclick="visit(${index})">visit</button>
       </td>
       <td>
         <button type="button" class="btn btn-danger delete" onclick=" deleteData(${index})">delete</button>
       </td>
       <td>
         <button type="button" class="btn btn-success update"  onclick=" update(${index})">update</button>
       </td>
     </tr>`
   
    }
   siteTabs.innerHTML=site;
  
  

}

 function clear() {
  siteName.value=null;
  siteUrl.value=null;
}  

function visit(index) {
  window.open(list[index].siteUrl, "_blank")
  
}

function deleteData(index) {
list.splice(index,1)
displaylist();

  
}
function update(index) {
submit.innerText="update"
siteName.value=list[index].siteName
siteUrl.value=list[index].siteUrl
submit.innerText="submit"
}
