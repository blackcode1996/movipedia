const romantic=[{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/07/4/1656933221865_mith_1098x1626_fef_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Murder in the Hills',
    rating:9
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/06/21/1655798364054_vinci_da_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Vinci Da',
    rating:9
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/07/30/1596084746760_josh1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Josh',
    rating:7
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/05/21/1653114499116_accident1098x162631_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Accident',
    rating:4
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2022/02/2/1643783423569_hemlock_society_3_1098x1626_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Hemlock Society',
    rating:5
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2021/06/5/1622886622691_1098x1626_eagolerchokh_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Eagler chokh',
    rating:8
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/ba/6f/9ee596654e5cb52876518c4657c5/1570179455742_sheshthekeshuru2_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Sesh Thake Suru',
    rating:9
},
{
    img:'https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2021/02/20/1613798404780_nayantara_3x4Images.jpg?impolicy=resize&w=300&h=444',
    name:'Nayantra',
    rating:9.5
},
]

localStorage.setItem('romantic',JSON.stringify(romantic));

let data=JSON.parse(localStorage.getItem('romantic'));

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

        let button=document.createElement('button');
        button.innerText="Watch Movie"
        button.onclick=function(){
            location.href="./authentication.html"
        }

        div.append(poster,name,rating,button)
        data_body_div.append(div);

    })
}
appendmovies(data)