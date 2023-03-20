var aperto=false;

function cambia()
{
    console.log(aperto);
    if(!aperto)
    {
            document.getElementById("main-menu").style.paddingBottom="395px";
            document.getElementById("menu2").style.top="18%";
        aperto=true;

    }else
    {
        document.getElementById("main-menu").style.paddingBottom="0px";
        document.getElementById("menu2").style.top="100%";
        aperto=false;
    }
}