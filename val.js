	function validateForm () 
{

    var r=true;
    var x=document.getElementById("fname").value;
    var y=document.getElementById("uname").value;
    var z=document.getElementById("pass").value;
    var q=document.getElementById("Cp").value;
    var patten1=/^[A-Za-z]+$/;
    var patten2= /(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.\W)/;
    
    if(!(x.match(patten1)))
       {document.getElementById('a1').innerHTML="* only letter is allowed";
        document.getElementById('fname').style.borderColor="red";
        r= false;}

        else 
        {document.getElementById('a1').innerHTML=" ";
        document.getElementById('fname').style.borderColor="black"; }

        if((y == " ")|| (y == ""))
        { document.getElementById('a2').innerHTML="* username must be filled out";
        document.getElementById('uname').style.borderColor="red";
        r=false;}

        else{document.getElementById('a2').innerHTML=" ";
        document.getElementById('uname').style.borderColor="black"; }

        
        if(z=="")
        { document.getElementById('a3').innerHTML="* password must be filled out";
        document.getElementById('pass').style.borderColor="red";
        r=false;}

        else if (y==z)
        {
            { document.getElementById('a3').innerHTML="* your password must be not the same of your username";
           
            r=false;} 
        }

        else if (!(z.length>=6 && (z.length<=10)))
        {
            { document.getElementById('a3').innerHTML="* password should be 6-10 length";
            r=false;}
        }

        else if (!(z.match(patten2)))
        {
            { document.getElementById('a3').innerHTML="* your password should At least one small letter and one capital letter and one digit";
            r=false;}
        }

        else
            { document.getElementById('a3').innerHTML=" "
            document.getElementById('pass').style.borderColor="black";
            }
        if(q!=z)
        {
            document.getElementById('a4').innerHTML="* your password does not match";
            r=false;
            document.getElementById('Cp').style.borderColor="red";
        }
        else{
            document.getElementById('a4').innerHTML=" "
            document.getElementById('Cp').style.borderColor="black";
        }
    return r;
    
    }
	