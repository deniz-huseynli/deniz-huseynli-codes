//Task 1              
let qehreman = prompt("Ən sevdiyiniz superqəhrəmanın adını daxil edin: (məsələn: hörümçək adam, betmen, supermen)");

switch (qehreman){
    case "hörümçək adam":
        console.log("Xüsusiyyəti: Divarlara dırmaşır və tor ata bilir.");
        break;
    case "betmen":
        console.log("Xüsusiyyəti: Yüksək texnologiyalı avadanlıqları var");
        break;
    case "supermen":
        console.log("Xüsusiyyəti: Uçmaq və super gücə malikdir.");
        break;
    default:
        console.log("Bu superqəhrəman siyahıda yoxdur.");
        break;
}

//Task 2
let hava = prompt("Çöldə hava necədir? (məsələn: günəşli, yağışlı, qarlı):");

switch (hava){
    case "günəşli":
        console.log("Nazik geyinin və gün eynəyinizi götürməyi unutmayın.");
        break;
    case "yağışlı":
        console.log("Çətirinizi götürməyi unutmayın.");
        break;
    case "qarlı":
        console.log("Qalın palto geyinin, şərf və əlcəklərinizi taxın.");
        break;
    default:
        console.log("Bu hava durumu bilinmir.");
        break;
}

//Task 3
let planet = prompt("Hansı planetə uçmaq istəyirsiniz? (məsələn: mars, yupiter, yer):");

switch (planet){
    case "mars":
        console.log("Mars: Qırmızı rəngli səth və soyuq iqlim.");
        break;
    case "yupiter":
        console.log("Yupiter: Nəhəng qaz planeti və çoxlu peykləri var.");
        break;
    case "yer":
        console.log("Yer: Yaşamaq üçün ideal planet.");
        break;
    default:
        console.log("Kosmik gəminin yanacağı bitir.");
        break;
}

//Task 4
let peşə = prompt("Böyüyəndə nə olmaq istəyirsiniz? (məsələn: həkim, polis, proqramçı, aşpaz):");

switch (peşə){
    case "həkim":
        console.log("İnsanların həyatını xilas etmək ən qiymətli işdir.")
        break;
    case "polis":
        console.log("Cəmiyyətin təhlükəsizliyini təmin etmək vacibdir.")
        break;
    case "proqramçı":
        console.log("Texnologiya dünyasında böyük imkanlar var.")
        break;
    case "aşpaz":
        console.log("Dadlı yeməklər hazırlamaq insanları xoşbəxt edir.")
        break;
    default:
        console.log("Hansı peşəni seçirsinizsə seçin, ümid edirik ki, sizin üçün ən yaxşısı olsun")
        break;
}

//Task 5
let meyvə = prompt("Sevdiyiniz meyvəni daxil edin (məsələn: alma, banan, çiyələk, limon): ");

switch (meyvə){
    case "alma":
        console.log("Rəng: Qırmızı və ya yaşıl. Dad: Şirin və ya turş.");
        break;
    case "banan":
        console.log("Rəng: Sarı. Dad: Şirin və yumşaq.");
        break;
    case "çiyələk":
        console.log("Rəng: Qırmızı. Dad: Şirəli və ətirli.");
        break;
    case "limon":
        console.log("Rəng: Sarı. Dad: Çox turş və təravətli.");
        break;
    default:
        console.log("Bu meyvə səbətdə yoxdur.");
        break;
}

//Task 6
let heyvan = prompt("Hansı heyvanı yedizdirmək istəyirsiniz? (məsələn: pişik, dovşan, panda):");

switch (heyvan){
    case "pişik":
        console.log("Pişiklər balıq və xüsusi pişik yeməklərini çox sevirlər.");
        break;
    case "dovşan":
        console.log("Dovşanlar kök və təzə kahıyla qidalanırlar.");
        break;
    case "panda":
        console.log("Pandalar əsasən bambuk yeyir.");
        break;
    default:
        console.log("Bu heyvanın qidalanması haqqında məlumat yoxdur.");
        break;
}

//Task 7

let cizgiFilm = prompt("Hansı cizgi filmi qəhrəmanı ilə görüşmək istəyirsiniz? (məsələn: şrek, süngər bob, mikki maus): ");

switch (cizgiFilm){
    case "şrek":
        console.log("What are doing in my swamp?!");
        break;
    case "süngər bob":
        console.log("I'm ready!");
        break;
    case "mikki maus":
        console.log("See ya real soon!");
        break;
    default:
        console.log("Qəhrəman hazırda tətildədir.");
        break;
}

//Task 8
let neqliyyat = prompt("Səyahətə nə ilə çıxmaq istəyirsiniz? (məsələn: gəmi, təyyarə, qatar, qayıq):");

switch (neqliyyat){
    case "gəmi":
    case "qayıq":
        console.log("Hərəkət yeri: dəniz");
        break;
    case "təyyarə":
        console.log("Hərəkət yeri: göy");
        break;
    case "qatar":
        console.log("Hərəkət yeri: dəmiryolu");
        break;
    default:
        console.log("Bu nəqliyyat siyahıda yoxdur, piyada gəzmək daha yaxşıdır.");
        break;
}