/*console.log("hello world boss")
const family_members=['Alin','Robert','Mum','Tat'];
  
let index=1;
function addMembers(){
	let html='';
	family_members.forEach(member=>{
		html+=`<li id="li_item_${index}">${member}&nbsp;<span 
		onclick="deleteItem(${index})" style="color:red;cursor:pointer;">X</span></li>`
	index+=1;
	});
	$('#member').html(html); 

} 
// Get the input field

// Get the input field
const input = document.getElementById("name");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
	console.log('event.key',event.key)
  if (event.key === "Enter") {
	addNewName();
  }
});

// Execute a function when the user presses a key on the keyboard
// $('input').keypress( function(event) {
// 	console.log('event',event)
//   // If the user presses the "Enter" key on the keyboard
//   if (event.originalEvent.charCode === 13) {
//     // Cancel the default action, if needed
//    addNewName()
//   }
// });

$(document).ready(function(){
	addMembers();
})
function deleteItem(item_index){
	console.log('item_index',item_index)
	$(`#li_item_${item_index}`).remove()
}

    $('#insert').click(function() {
    	addNewName();
    });

    function addNewName(){
    	const name_input=$('#name');
        const name = name_input.val();
       
        if(!name){
         alert('Please enter a name');
         return;
        }
	$('#member').append(`<li id="li_item_${index}">${name}&nbsp;<span 
		onclick="deleteItem(${index})" 
		style="color:red;cursor:pointer;">X</span></li>`);
	index+=1;
    name_input.val('')
    }
    */
 //var myList = [["cereal",3],["milk",2], ["bananas",3]]

/*var i;
var numar = 1;
var jucatori = {

	1:"Alin",
	2:"Robert",
	3:"Iema",
	4:"Giorghi",
};
jucatori[5] = "Sorina";
delete jucatori[4];
jucatori[numar] = "Marius"; 
for(i=0;i<4;i++)
{

var numarNume = jucatori[numar];
console.log(numarNume);
numar ++
} */
  
  /*function phoneName(val)
  {
  	var rezultat = "";

  	var schimbnume = {

  		"alpha" : "adams",
  		"bravo" : "boston",
  		"charlie" : "chicago",
  		"delta" : "denver",
  		"echo" : "easy",
  		"foxtrot" : "frank"

  	};

  	rezultat = schimbnume[val];
  	return rezultat;

  }
console.log (phoneName("foxtrot"));
*/
 
 /*const planteleMele = [
 {
 	genul : "floare",
 	lista : 
 	 [
 	 	"lalea",
 	 	"trandafir",
 	 	"garofita"
 		]
 	},

 	{
 		genul :"arbori",
 		lista :
 		[ 
 		"pin",
 		"mesteacan",
 		"stejar"
 		]

 	}
 	];
 planteleMele[1].lista[0]='test'
 // const alfa='beta';
 // alfa='delta';
 var test = planteleMele[1].lista[0];
 console.log(planteleMele[1].genul+":");
 const trees=planteleMele[1].lista.join(', ');
 console.log(trees);
 console.log('trees is ', typeof trees)
 console.log('lista is ', typeof planteleMele[1].lista)
 const lista_trees=planteleMele[1].lista
 try{
 trees.forEach(tree=>console.log('tree',tree))
 }catch(e){
 	console.log('Erroare la procesare string trees: '+e);
 }
  lista_trees.forEach(tree=>console.log('tree->',tree))

  const copyArray=planteleMele;
  copyArray.push({genul :"copy element",
 		lista :
 		[ 
 		"copy prop",
 	
 		]})
    const shallowCopy=[...planteleMele]; //shallow copy
    let deepCopy = JSON.parse(JSON.stringify(planteleMele)); 
shallowCopy.push({genul :"new element",
 		lista :
 		[ 
 		"new prop",
 	
 		]})
  copyArray[1].lista[1]='Robert';
  console.log('copyArray',copyArray);
  console.log('planteleMele',planteleMele)
    console.log('shallowCopy',shallowCopy)
        console.log('deepCopy',deepCopy)
        */
 
 var contact = [
 {
 	"primulNume" : "Alina",
 	"ultimulNume" : "Rotaru",
 	"numarul" : "0756221122",
    "placeri" : ["pizza","fasole","carnat"]
 },
 {
 	"primulNume" : "Ema",
 	"ultimulNume" : "Cavaleru",
 	"numarul" : "07231221122",
 	"placeri" : ["branza","cirese","cai"]
 },
 {
 	"primulNume" : "Alin",
 	"ultimulNume" : "Ghiurca",
 	"numarul" : "0751221422",
 	"placeri" : ["brocolli","fassole","ceapa"]
 },
 {
 	"primulNume" : "Robert",
 	"ultimulNume" : "Ghiurca",
 	"numarul" : "075196822",
 	"placeri" : ["burger","fier","castravete"]
 }
 ];
 //console.log(contact[0].placeri);
 function verifica(nume,prop)
 {
 	 	for (var i = 0; i < contact.length; i++)
 	{
 		if ( contact[i].primulNume === nume)
 		{
 			return contact[i][prop]; //'numarul'
 		}
 	}
 	return "nu exista";
 }
//var a = verifica("Robert","numarul");
 console.log(verifica("Robert","ultimulNume"));

console.log('Salut Robert! Asta e un commit nou!');