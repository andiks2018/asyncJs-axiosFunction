import axios from "axios"

//buat sebuah function untuk mendapatkan data dengan FEtch
async function getUserData() {
  let res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // lanjut dari sini seteeah hapus data statis
  let data = await res.json(); //[...{}]
  let user_tbody = document.getElementById("user_tbody");
  data.forEach((e)=>{
    user_tbody.innerHTML += `
      <tr>
        <td>${e.id}</td>
        <td>${e.username}</td>
        <td>${e.email}</td>
        <td>${e.address.city}</td>
        <td>
          <button>Detail</button>
        </td>
      </tr>
    `
  });
  console.info(data);
}
//getUserData();

// get data dengan axios
async function getUserData2 (){
  console.info("Fetching data menggunakan axios");
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  let data =  await res.data

  console.info(data) 
  let user_tbody = document.getElementById("user_tbody");

  data.forEach((e)=>{
    user_tbody.innerHTML +=`
      <tr>
        <td>${e.id}</td>
        <td>${e.username}</td>
        <td>${e.email}</td>
        <td>${e.address.city}</td>
        <td>
          <button onclick="handleDetail(${e.id})">Detail</button>
        </td>
      </tr>
    `
  })
}
getUserData2();

// window.handleDetail = function(id){
//   console.info(id)//ini untuk mentest berhasil gak secara console, dapetin id

//   axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//   .then(res=>{
//     console.info(res.data)
//     let data = res.data;
//     alert(`
//     username : ${data.username}
//     email : ${data.email}
//     city : ${data.address.city}
//     `)
//   })
// }

//coba menggunakan async
window.handleDetail = async function(id){
  let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  let data = await res.data;
  alert(`
    username " : ${data.username}
    Email : ${data.email}
    Address : ${data.address.city}
  `)
}