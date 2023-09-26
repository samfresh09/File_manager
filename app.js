import fs from "node:fs/promises"
import { findSourceMap } from "node:module"

// const fs = require("fs");
// const express = require("express")
// const uuid = require("uuid")

// const app = express()
// const { router } = require("./controllers/file.controller")

//sans promesse (lecture de ficher)
//#######################################################################################
// //METHODE SYNCHRONE
// const contenu = fs.readFileSync("demo.txt", { encoding: "utf-8" })

// console.log(contenu)
// console.log("hello word")

// //METHODE SYNCHRONE

// const contenuAsync = fs.readFile("demo.txt", { encoding: "utf-8" }, (err, data) => {
//     console.log(data)
// })

// console.log("hello word")

//#######################################################################################


//avec promesse (lecture de ficher)
//#######################################################################################
// const contenu = await fs.readFile('demo.txt', { encoding: 'utf-8' })
// console.log(contenu);
// console.log("Hello Word")


//#######################################################################################


//avec promesse (ecriture de ficher)
//#######################################################################################

// //information sur un ficher
// const i = await fs.stat("demo2.txt")

// console.log(i.ctime);

// //ajout du text dans un ficher s'il existe et cree sinon
// await fs.writeFile("demo2.txt", ' LEFA', {
//     flag: 'a'
// })

//suppression d'un ficher
// await fs.unlink("demo2.txt")

const archi = await fs.readdir("./", {
    withFileTypes: true
})

/* this is an example for new snippet extension make by me xD */
for (const element of archi) {

    if (element.isDirectory()) {
        const { size } = await fs.stat(element.name)
        console.log("d-", element, { size });
    } else {
        const { size } = await fs.stat(element.name)
        console.log("f-", element, { size });

    }


}






//#######################################################################################

// app.listen(3001, () => {
//     console.log(uuid.v4())

// })