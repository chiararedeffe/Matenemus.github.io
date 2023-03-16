var aperto=false;

function cambia()
{
    console.log(aperto);
    if(!aperto)
    {
            document.getElementById("main-menu").style.paddingBottom="468px";
        
        aperto=true;

    }else
    {
        document.getElementById("main-menu").style.paddingBottom="0px";
        aperto=false;
    }
}