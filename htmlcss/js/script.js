
function getn()
{
   

    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
    var oper=document.getElementById("oper").value;
    var r;


   if(oper=="add")
   {
      r=addn(n1,n2) 
   }
   else if(oper="sub")
   {
       r=subn(n1,n2)
   }
   else if(oper="mul")
   {
       r=muln(n1,n2)
   }
   else if(oper="div")
   {
       r=divn(n1,n2)
   }
  document.getElementById("n").innerHTML=r;
}
function addn(a,b)
{
    var c=a+b;
    return c;

}
function subn(a,b)
{
    var c=a-b;
    return c;
}
function muln(a,b)
{
    var c=a*b;
    return c;
}
function div(a,b)
{
    var c=a/b;
    return c;
}
