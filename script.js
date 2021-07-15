function girarDados(){
    const dadoUm = (min, max) => Math.floor(Math.random() * (max -min) + min)
    const dadoDois = (min, max) => Math.floor(Math.random() * (max -min) + min)
    const valor1 = dadoUm(1, 7)
    const valor2 = dadoDois(1,7)
    // console.log(valor1)
    // console.log(valor2)
    const result = valor1 + valor2

    
    return result


}

let result = girarDados()

function girarDadosMil(){
    const dadoUm = (min, max) => Math.floor(Math.random() * (max -min) + min)
    const dadoDois = (min, max) => Math.floor(Math.random() * (max -min) + min)
    const valor1 = dadoUm(1, 7)
    const valor2 = dadoDois(1,7)
    // console.log(valor1)
    // console.log(valor2)
    const result = valor1 + valor2

    
    return result


}




const buttonGira = document.createElement("button")
    buttonGira.addEventListener("click", () => {
        let resultado1 = girarDados()
        dado.innerText = resultado1;

    })



buttonGira.classList.add("giraDados");

buttonGira.innerText = "Girar Dados";
document.body.appendChild(buttonGira)

const dado = document.createElement("div")
dado.classList.add("dado")


document.body.appendChild(dado)


let pegarResultado = [
                    0, 0, 0,
                    0, 0, 0, 
                    0, 0, 0, 
                    0, 0
                ]

let qtd2 = 0
let qtd3 = 0
let qtd4 = 0
let qtd5 = 0
let qtd6 = 0
let qtd7 = 0
let qtd8 = 0
let qtd9 = 0
let qtd10 = 0
let qtd11= 0
let qtd12= 0


const buttonGiraMil = document.createElement("button")
    buttonGiraMil.classList.add("giraDados");

    buttonGiraMil.innerText = "Girar Dados mil vezes";

    document.body.appendChild(buttonGiraMil)  

    buttonGiraMil.addEventListener("click", () => {
        for(let i = 0; i<1000; i++){
            
            let resultMil = girarDadosMil()
            
            // let resultado = girarDadosMil()
            
            if(resultMil === 2){
                qtd2++
                console.log("Deu o dois " + qtd2)
                pegarResultado[0] = qtd2
                
            }
            if(resultMil === 3){
                qtd3++
                console.log("Deu o tres " + qtd3)
                pegarResultado[1] = qtd3
                
            }
            if(resultMil === 4){
                qtd4++
                pegarResultado[2] = qtd4
                
            }
            if(resultMil === 5){
                qtd5++
                pegarResultado[3] = qtd5
                
            }
            if(resultMil === 6){
                qtd6++
                pegarResultado[4] = qtd6
                
            }
            if(resultMil === 7){
                qtd7++
                pegarResultado[5] = qtd7
                
            }
            if(resultMil === 8){
                qtd8++
                pegarResultado[6] = qtd8
                
            }
            if(resultMil === 9){
                qtd9++
                pegarResultado[7] = qtd9
                
            }
            if(resultMil === 10){
                qtd10++
                pegarResultado[8] = qtd10
                
            }
            if(resultMil === 11){
                qtd11++
                pegarResultado[9] = qtd11
                
            }
            if(resultMil === 12){
                qtd12++
                pegarResultado[10] = qtd12
                
            }
        
        }  

        

        
            // console.log("Deu o numero" + (i+2) + " " + pegarResultado[i] + "vezes")
            // const main = document.createElement("main") 
            //         main.classList.add("main")
            //         document.body.appendChild(main)
                    // grafico.style.width = pegarResultado[i]  + "px"
                    // grafico.style.height = 20 + "px"
                    // grafico.innerText = (" deu o numero" +(i+2) +" "+ pegarResultado[i])
    
                    
        
        // }

        for(let i = 0; i < 11; i++){
            
            const grafico = document.createElement("div") 
            grafico.classList.add("grafico")
            main.appendChild(grafico)        
            grafico.style.width = pegarResultado[i]*5 + "px"
            
            grafico.innerText = ("deu o " + (i+2) + " - " + pegarResultado[i] + " vezes")

            } 
            
     })

     
        // console.log("Deu o numero" + (i+2) + " " + pegarResultado[i] + "vezes")
        const main = document.createElement("main") 
                main.classList.add("main")
                document.body.appendChild(main)
                // grafico.style.width = pegarResultado[i]  + "px"
                // grafico.style.height = 20 + "px"
                // grafico.innerText = (" deu o numero" +(i+2) +" "+ pegarResultado[i])

                
    
    
        // const grafico = document.createElement("div") 
        // grafico.classList.add("grafico")
        // main.appendChild(grafico)
        // for(let i = 0; i < 12; i++){
        // console.log("Deu o numero" + (i+2) + " " + pegarResultado[i] + "vezes")
        //         grafico.style.width = pegarResultado[i]  + "px"
        //         grafico.style.height = 20 + "px"
        //         grafico.innerText = pegarResultado[i]

        // }           
    
    // }
    //  for(let i = 0; i < 11; i++){
    //     let qtdDeRepeticao = pegarResultado[i]
    //     console.log("deu " + (i+2) + " " + qtdDeRepeticao)
    //     let newElement = document.createElement("div");
    //     newElement.className = "bar";
    //     newElement.style.width = 20+ "px";
    //     newElement.style.height = qtdDeRepeticao  + "px"
    //     newElement.style.background = "gray"; 
        
        
    //     let destination = document.getElementById("d2");
    //     destination.appendChild(newElement);
    //     }
 

   
// for(let i = 0; i< pegarResultado.length; i++){
//     const grafico = document.createElement("div") 
//             grafico.classList.add("grafico")
//             document.body.appendChild(grafico)
//             grafico.style.width = 10 + "px"
//             grafico.style.height = pegarResultado[i] + "px"
            
// }
    

// for(let i = 0; i < pegarResultado.length; i++){
//     let qtdDeRepeticao = pegarResultado[i]
//     console.log(qtdDeRepeticao)
//     let newElement = document.createElement("div");
//     newElement.className = "bar";
//     newElement.style.width = qtdDeRepeticao + "px";
//     newElement.style.height = 20 + "px"
//     newElement.style.background = "gray"; 
//     newElement.style.margin = 10 + "px"
//     newElement.style.display = "inline-block"
//     let destination = document.getElementById("d2");
//     destination.appendChild(newElement);
//     }
//     console.log(pegarResultado)