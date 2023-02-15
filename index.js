function slider(){
    const arr=[
        "https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/8/1662656889966_ka_2560x720_32x9Images.jpg?impolicy=resize&w=1136&h=319.5",
        "https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/9/1662718680708_glamour_2560x720_32x9Images.jpg?impolicy=resize&w=1136&h=319.5",
        "https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/4/1662300760883_tirandaajshabor_2560x7201_32x9Images.jpg?impolicy=resize&w=1136&h=319.5",
        "https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/5/1662384665494_karagar_2560x7201_32x9Images.jpg?impolicy=resize&w=1136&h=319.5",
        "https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/2/1662128810836_thumbnail_sampurna_2560x720_32x9Images.jpg?impolicy=resize&w=1136&h=319.5",
        "https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/10/1662821868227_punoschho_2560x720_32x9Images.jpg?impolicy=resize&w=1136&h=319.5"
    ];

    let i=0;
    let div=document.getElementById('slider');
    let img=document.createElement('img');
    img.src=arr[0];

    div.append(img);
    i++;

    setInterval(function(){
        if(i==6){
            i=0
        }
        img.src=arr[i];
        i=i+1;
        div.append(img);
        
    }, 3000);


}
slider()

const movies=[{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/7/1662528394949_kora_paak_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'korapak',
    rating:8
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/6/1662450548208_mondpbashar_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Mabdobasar Galpo',
    rating:7
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/5/1662396093641_bng_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Babar nam gandiji',
    rating:6
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/3/1662211247087_jhumura_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Jhumura',
    rating:5
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/9/1662718472508_glamour_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Glamour',
    rating:9.5
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/8/1662656885751_ka_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Kuler Achaar',
    rating:7
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/7/1662526882313_tirandaajshabor_1098x16261_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Tirandaj Shabor',
    rating:4
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/09/6/1662457680194_aba_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Anubroto Bhalo Acho?',
    rating:3
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/08/22/1661165801835_rudrabinar_obhishap_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Rudrabinar Obhisaap',
    rating:5
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/08/26/1661520963733_fg_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Feludar Goyandagiri',
    rating:8
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/07/25/1658744033184_theeken_1098x1626_2_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'The Eken',
    rating:9
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/08/16/1660636755695_mahabharatmurders_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Mahabharat Murders',
    rating:9.5
},
]

localStorage.setItem('movies',JSON.stringify(movies));

let data=JSON.parse(localStorage.getItem('movies'));

function appendmovies(data){

    let data_body_div=document.getElementById('data_body');
   

    data_body_div.innerHTML=null;

    data.forEach(function(el){
        let div=document.createElement('div');

        let poster=document.createElement('img');
        poster.id="poster"
        poster.src=el.img;

        let name=document.createElement('h3');
        name.innerHTML='Name:'+" "+el.name;

        let rating=document.createElement('h3');
        rating.innerHTML='Rating:'+" "+el.rating;


        div.append(poster,name,rating)
        data_body_div.append(div);

    })
}

let mypromise=new Promise(function(resolve,reject){

    setTimeout(function(){
        let data=movies;
        if(data!=null){
            resolve(data);
        }else{
            reject("Issue from Server")
        }
    },2000)
})

async function main(){
    try{
        let response=await mypromise;
        appendmovies(response);
    }
    catch(error){
        console.log("error",error)
    }
}
main();

function Hightolow(){
    let data=JSON.parse(localStorage.getItem("movies"));

    data=data.sort((a,b)=> b.rating - a.rating);

    appendmovies(data);
}
function lowtohigh(){
    let data=JSON.parse(localStorage.getItem("movies"))

    data=movies.sort((a,b)=> a.rating-b.rating);

    appendmovies(data);
}

async function searchmovies(){
    let query=document.getElementById('query').value;
    console.log(query)
    
    response=await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=5c420756&s="+query)

    let data=await response.json();
    console.log(data)


    // data.Search
    let main=document.getElementById('show_search_result')
    
    main.innerHTML=null;

    if(data==undefined){
        main.style.display="none"
    }
    data.Search.forEach(el=>{
        

        let div=document.createElement('div')
        

        let poster=document.createElement('img')
        poster.src=el.Poster
        
        let name=document.createElement('h4')
        name.innerText=el.Title;

        div.append(poster,name)
        main.append(div)

        

    })
}

//making menu function
let menu=document.getElementById('menu')
let count=0;

function myFunction(x) {
    x.classList.toggle("change");

    menu.style.display="grid";
    count++;



    let div=document.createElement('div');
    menu.innerHTML=null;
    if(count%2!==0){
        let h2_1=document.createElement('h2')
        h2_1.innerHTML="Romance"
        h2_1.onclick=function(){
            location.href="./romantic.html"
        }
        let hr_1=document.createElement('hr')


        h2_2=document.createElement('h2')
        h2_2.innerText="Drama"
        h2_2.onclick=function(){
            location.href="./drama.html"
        }
        let hr_2=document.createElement('hr')

        let h3_3=document.createElement('h2');
        h3_3.innerText="Thriller"
        h3_3.onclick=function(){
            location.href="./thriller.html"
        }
        
        let hr_3=document.createElement('hr')

        let h4_4=document.createElement('h2');
        h4_4.innerText="Comedy"
        h4_4.onclick=function(){
            location.href="./comedy.html"
        }


        div.append(h2_1,hr_1,h2_2,hr_2,h3_3,hr_3,h4_4)
        menu.append(div);
        return true;
    }else{
        menu.style.display="none";
    }
    
}


function appendname(){
    let name=JSON.parse(localStorage.getItem('name'));
    let showname=document.getElementById('showname')
    showname.innerText="Welcome"+" "+name+"!";
}
appendname()
