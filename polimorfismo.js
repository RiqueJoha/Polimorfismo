const GemaAlma = require("./GemaAlma");
const GemaInfinito = require("./GemaInfinito");
const GemaTiempo = require("./GemaTiempo");
const Oso = require("./Oso");

const laGemaInfinito=new GemaInfinito();
const oso= new Oso();

const laGemaAlma=new GemaAlma();
const laGemaTiempo=new GemaTiempo();

/* laGemaInfinito.poder();
laGemaAlma.poder();
laGemaTiempo.poder();
 */

function usarGema(obj) {
    if (obj instanceof GemaInfinito) {
        obj.poder();
    }else{
        console.log("No es una Gema");
    }
}

usarGema(laGemaInfinito);
usarGema(laGemaAlma);
usarGema(laGemaTiempo);
usarGema(oso);