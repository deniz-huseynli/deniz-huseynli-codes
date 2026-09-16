function updateClock() {
    let tarix = new Date();
    
    let spanGun = document.getElementById("gün");
    let spanIl = document.getElementById("il");
    let spanSaat = document.getElementById("saat");
    let spanDeqiqe = document.getElementById("deqiqə");
    let spanSaniye = document.getElementById("saniyə");
    let spanAmPm = document.getElementById("am-pm");

    let saat = tarix.getHours();
    let deqiqe = tarix.getMinutes();
    let saniye = tarix.getSeconds();

    let ampm ='AM';
    if (saat>=12){
        ampm ='PM';
    }

    saat=saat%12;
    if (saat===0){
        saat=12;
    }

    if (saat<10){
        saat ="0"+saat;
    }

    if (deqiqe<10){
        deqiqe ="0"+deqiqe;
    }

    if (saniye<10) {
        saniye = "0"+saniye;
    }

    let gunReqem = tarix.getDay();
    let gununAdi = "";

    if (gunReqem === 1) { 
        gununAdi = "Monday"; 
    } else if (gunReqem===2){ 
        gununAdi = "Tuesday"; 
    } else if (gunReqem===3){ 
        gununAdi = "Wednesday"; 
    } else if (gunReqem===4){ 
        gununAdi = "Thursday"; 
    } else if (gunReqem===5){ 
        gununAdi = "Friday"; 
    } else if (gunReqem===6){ 
        gununAdi = "Saturday"; 
    } else if (gunReqem===0){ 
        gununAdi = "Sunday"; 
    }

    let ayReqem = tarix.getMonth();
    let ayinAdi = "";

    if (ayReqem === 0) { 
        ayinAdi = "January"; 
    } else if (ayReqem===1){ 
        ayinAdi = "February"; 
    } else if (ayReqem===2){ 
        ayinAdi = "March"; 
    } else if (ayReqem===3){ 
        ayinAdi = "April"; 
    } else if (ayReqem===4){ 
        ayinAdi = "May"; 
    } else if (ayReqem===5){ 
        ayinAdi = "June"; 
    } else if (ayReqem===6){ 
        ayinAdi = "July"; 
    } else if (ayReqem===7){ 
        ayinAdi = "August"; 
    } else if (ayReqem===8){ 
        ayinAdi = "September"; 
    } else if (ayReqem===9){ 
        ayinAdi = "October"; 
    } else if (ayReqem===10){ 
        ayinAdi = "November"; 
    } else if (ayReqem===11){ 
        ayinAdi = "December"; 
    }

    let ayinGunu=tarix.getDate();
    let il=tarix.getFullYear();
    let tamTarix=ayinAdi+" " +ayinGunu+", "+il;

    spanGun.innerText=gununAdi;
    spanIl.innerText=tamTarix;
    spanSaat.innerText=saat;
    spanDeqiqe.innerText=deqiqe;
    spanSaniye.innerText=saniye;
    spanAmPm.innerText=am-pm;
}


setInterval(updateClock, 1000);