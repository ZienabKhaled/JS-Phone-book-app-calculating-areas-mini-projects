var contactlist = [];
var app = true ;
do{
var input = prompt("What type of operation do you want \n add, search or exit?");
console.log(input);

if (input == "add"){

    addcontact();
}
else if (input == "search"){
    searchcontact();
}
if (input == "exit"){
    app = false;
}

}
while(app)

function addcontact(){
    var contactins = {
        name:prompt("please enter the name of contact here"),
        phone:prompt("please enter the phone number")
    }
    
    contactlist.push(contactins);

    alert("Contact added successfully");
    
}


function searchcontact()
{
    var input2 = prompt("do you want to search for the contact through name or telephone number ? \n (name/number)");
    if (input2 == "name")
    {
        var inputname = prompt("what name you want to search for ?");
        
            contactlist.filter(function(item){
            item.name == inputname ;
            for(var i in item){
            alert("the search result is of " + item.name + " and his telephone number is " + item.tel );
            }
        }
        
      
        )
      }
    else if (input2 == "number")
    {
        var inputnumber = prompt("what number you want to search for ?");
    
        contactlist.filter(function(item){
        item.tel == inputnumber ;
        for(var i in item){
        alert("the search result is of " + item.name + " and his telephone number is " + item.tel );
        }
        
      }
        )
    }
  }
