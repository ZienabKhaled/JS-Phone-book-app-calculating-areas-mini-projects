var input = prompt ("What shape are you calculating area for?\n (circle , triangle , square , rectangle \n parallelogram , trapezium or ellipse)");
console.log(input);
switch (input)
{
    case "circle" :
        var raduis = Number(prompt("Please enter the raduis"));
        area = 3.14*raduis*raduis;
        alert ("The area equals to " + area ); 
        break;

    case "triangle" :
        var base = Number(prompt("Please enter base length"));
        var height = Number(prompt("Please enter the height"));
        area = 0.5 *base* height;
        alert ("The area equals to " + area ); 
    break;

    case "square":
        var a = Number(prompt("Please enter the length of side"));
        area = a*a ;
        alert ("The area equals to " + area ); 
        break;
    
    case "rectangle" :
        var l = Number(prompt("Please enter the length "));
        var w = Number(prompt("Please enter the width"));
        area = l*w ;
        alert ("The area equals to " + area ); 
        break;
    case "parallelogram":
        var base = Number(prompt("Please enter base length"));
        var h = Number(prompt("Please enter the vertical height"));
        area = base*h ;
        alert ("The area equals to " + area ); 
        break;
    case "trapezium ":
        var height = Number(prompt("Please enter the height"));
        var a = Number(prompt("Please enter the length of side"));
        var b = Number(prompt("Please enter the length of side"));
        area = 0.5*height*(a+b);
        alert ("The area equals to " + area ); 
        break;
    case "ellipse":
        var a = Number(prompt("Please enter the minor axis length "));
        var b = Number(prompt("Please enter the major axis length "));
        area = 0.25*3.147*a*b;
    
        alert ("The area equals to " + area.tofixed() ); 
        break;
}