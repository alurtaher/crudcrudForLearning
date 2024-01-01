const form = document.querySelector('#form');
let apiUrl = 'https://crudcrud.com/api/d83052303cb04fdb8b851eb6ddc5f901/myLearning'

form.addEventListener("submit", event =>{
    event.preventDefault();
    let myname=document.querySelector('#Name')
    let myPnumber=document.querySelector('#CellNumber')
    PostData(myname.value,myPnumber.value)
    getAllUsersData()
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
    let data=axios.get(apiUrl)
    .then((resolve)=>{
        console.log('Name'+'Phone Number')
        resolve.data.forEach((ele)=>console.log(ele.name+'  '+ ele.Pnumber))
    })
    .catch((error)=>console.log(error))
}