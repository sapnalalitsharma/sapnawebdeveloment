<!DOCTYPE html>
    <html>
    <head>
    <meta charset=utf-8 />
    <title>JavaScript Array Join</title>
    
    
    </head>
    <body>
    

    
 
  /*question 1*/
  
function currentTime() {
  var date = new Date(); 
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
}
function currentTime() {
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
}
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}
document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec; 
function currentTime() {
    var t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime(); 

    //question 2
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

//question 3
var arr1=[-3,8,7,6,5,-4,3,2,1];
var arr2=[];
var min=arr1[0];
var pos;
var max=arr1[0];
for (i=0; i<arr1.length; i++)
{
        if (max<arr1[i]) max=arr1[i];
}

for (var i=0;i<arr1.length;i++)
{
        for (var j=0;j<arr1.length;j++)
        {
                if (arr1[j]!="x")
                {
                        if (min>arr1[j]) 
                        {
                                min=arr1[j];
                                pos=j;
                        }
                }
        }
        arr2[i]=min;
        arr1[pos]="x";
        min=max;
}
console.log(arr2);


//question 4
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var a = 1;
var b = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 b++;
                if (a<b)
                {
                  a=b; 
                  item = arr1[i];
                }
        }
        b=0;
}
console.log(item+" ( " +a +" times ) ") ;




//question 5
<script>
    <input type="text" id="text1"></input>
    <input type="button" id="button1" value="Add" onclick="add_element_to_array();"></input>
    <input type="button" id="button2" value="Display" onclick="display_array();"></input>
    <div id="Result"></div> 
        
    </script>
var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}
//question 6
function removeDuplicates(a) {
    var x,
        len=a.length,
        out=[],
        obj={};
   
    for (x=0; x<len; x++) {
      obj[a[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
  var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
  result = removeDuplicates(Mynum);
  console.log(Mynum);
  console.log(result);


// question 7
<form> 
            <select id="colorSelect"> 
            <option>Web Development</option> 
            <option>Python</option> 
            <option>Fashion Designing</option> 
            <option>Java Script</option> 
            <option>Political Science</option> 
            </select> 
            <input type="button" onclick="removecolor()" value="Select and Remove"> 
            </form>
function removecolor()
{
var a=document.getElementById("colorSelect");
a.remove(a.selectedIndex);
}  
</body>
</html>



