const eyeClick = document.querySelector("[data-password]");
const password_elem = document.getElementById("password");

eyeClick.onclick = () => {
  const icon = eyeClick.children[0];
  icon.classList.toggle("fa-eye-slash");
  if (password_elem.type === "password") {
    password_elem.type = "text";
  } else if (password_elem.type === "text") {
    password_elem.type = "password";
  }
};



let movies=[{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/7/1662528394949_kora_paak_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
},
{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/6/1662450548208_mondpbashar_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
 
},
{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/5/1662396093641_bng_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
},
{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/3/1662211247087_jhumura_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
},
{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/9/1662718472508_glamour_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
},
{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/8/1662656885751_ka_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
 
},
{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/7/1662526882313_tirandaajshabor_1098x16261_3x4Images.jpg?impolicy=resize&w=300&h=444',
  
},
{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/6/1662457680194_aba_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
 
},
{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/08/22/1661165801835_rudrabinar_obhishap_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
},
{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/08/26/1661520963733_fg_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
  
},
{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/07/25/1658744033184_theeken_1098x1626_2_3x4Images.jpg?impolicy=resize&w=300&h=444',
  
},
{
  img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/08/16/1660636755695_mahabharatmurders_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
},
]

function show_data(){

  let details=JSON.parse(localStorage.getItem("movies"))

  let i=0;
  let img=document.getElementById('movie-image')
  img.src=details[0].img

  i=i+1;
  
  setInterval(function(){
      if(i==11){
          i=0
      }
      img.src=details[i].img;
      i=i+1;
  },3000)
}
show_data()


async function Login(){

  let login_data={
    username:document.getElementById('username').value,
    password:document.getElementById('password').value, 
  };
  console.log(login_data)


  const login_url=`https://masai-api-mocker.herokuapp.com/auth/login`

  let res =await fetch(login_url,{
    method: 'POST',
    body: JSON.stringify(login_data),
    headers: {
    'Content-Type': 'application/json',
    },
  });

  let data =await res.json();
  let token=data.token;
  // getprofile(login_data.username,token)

  console.log("data:", data)
  
  if(data.error==false){
    alert ("Login Successful");
    localStorage.setItem('name',JSON.stringify(login_data.username));
    window.location.href="./index.html";
  }else{
    alert("Invalid login creadentials")
  }


}

// async function getprofile(username,token){
//   //url,username,token

//   let api=`https://masai-api-mocker.herokuapp.com/user/${username}`;

//   let res=await fetch(api,{
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer${token}`,
//       },
//   });

//   let data=await res.json();
//   console.log('data:',data);

// }