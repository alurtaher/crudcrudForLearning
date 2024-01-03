const form = document.querySelector('#form');
const deleteBtn=document.querySelector("#deleteBtn");
const  updateBtn=document.querySelector("#updateBtn");
const list=document.querySelector("#list");
let apiUrl = "https://crudcrud.com/api/0170335d47514c86a8ca72fbd9236248/myLearning";

form.addEventListener("submit", event =>{
    event.preventDefault();
    let myname=document.querySelector('#Name')
    let myPnumber=document.querySelector('#CellNumber')
    PostData(myname.value,myPnumber.value)
    getAllUsersData();
})

deleteBtn.addEventListener("click",event=>{
    event.preventDefault();
   // deleteUserData("659406408f133a03e8f915cd");
})

updateBtn.addEventListener("click",event=>{
    event.preventDefault();
    updateUserData("65940ca58f133a03e8f915f6","MOIN SP","9963662087")
})

window.addEventListener("DOMContentLoaded",()=>{
    getAllUsersData();
})


// This method is used for posting the data to the crud-crud server                   
function PostData(name, Pnumber){
    const obj={name,Pnumber}
    axios.post(apiUrl,obj)
    .then((resolve)=>console.log("posting the data is completed"))
    .catch((error)=>console.log(error))
}


// This method is used for getting the data from the crud-crud server
function getAllUsersData(){
    let response=axios.get(apiUrl)
    .then((resolve)=>{
        //console.log(response.data)
        resolve.data.forEach((ele)=>{
            //console.log(ele.name+'  '+ ele.Pnumber)
            list.innerHTML=`${ele.name} ${ele.Pnumber}`
            updateBtn.innerHTML='Update';
            list.appendChild(updateBtn)
        })
    })
    .catch((error)=>console.log(error))
}

// This method is used for deleting the data of the user from the crudcrud Server
function deleteUserData(id){
    axios.delete(`${apiUrl}/${id}`)
    .then((resolve)=>console.log("The data is deleted Successfully"))
    .catch((error)=> console.log(error))
}

//This method is used for updating the data of the user on the crudcrud Server
function updateUserData(id,name,Pnumber){
    let obj={
                name:`${name}`,
                Pnumber:`${Pnumber}`
            }
    axios.put(`${apiUrl}/${id}`,obj)
}