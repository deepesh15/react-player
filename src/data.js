import {v4 as uuidv4} from "uuid";

function chillHop(){
    return[
        
        {
            name : "Got it",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
            artist: " Misha, Jussi Halme ",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=15041",
            id: uuidv4(),
            color:['#e7716f','#2B2F49'],
            active:true
        },
        {
            name : "Dreamstate",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/8ef1fa972003495d1ecfba6292116174e9c5d940-1024x1024.jpg",
            artist: "Toonorth",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=17947",
            id: uuidv4(),
            color:['#2A4057','#000000'],
            active:false
        },
        {
            name : "By Chance",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            artist: "SwuM",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=15224",
            id: uuidv4(),
            color:['#574328','#1F3032'],
            active:false
        },
        {
            name : "Woodnote",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Aarigod, imagiro",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=13014",
            id: uuidv4(),
            color:['#9AB563','#1A1309'],
            active:false
        },
        {
            name : "Harbor",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "Stan Forebee, The Field Tapes, azula, Francis",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=11245",
            id: uuidv4(),
            color:['#DBE8DF','#5D6975'],
            active:false
        },
        {
            name : "Cruisin'",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/0a8fdf9ca628e5224eaf22373e05fb579989f9b6-1024x1024.jpg",
            artist: "Cloudchord, G Mills",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=8200",
            id: uuidv4(),
            color:['#FFB1A7','#001920'],
            active:false
        },
        {
            name : "Function",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/8404541e3b694d16fd79433b142ed910f36764dd-1024x1024.jpg",
            artist: "The Kount, Moods",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=2567",
            id: uuidv4(),
            color:['#FE4A36','#011D58'],
            active:false
        },
    ];
}

export default chillHop;