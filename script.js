function girarDados(){
    const dadoUm = (min, max) => Math.floor(Math.random() * (max -min) + min)
    const dadoDois = (min, max) => Math.floor(Math.random() * (max -min) + min)
    const valor1 = dadoUm(1, 7)
    const valor2 = dadoDois(1,7)
    const result = valor1 + valor2

    return result
}

let result = girarDados()

function girarDadosMil(){
    const dadoUm = (min, max) => Math.floor(Math.random() * (max -min) + min)
    const dadoDois = (min, max) => Math.floor(Math.random() * (max -min) + min)
    const valor1 = dadoUm(1, 7)
    const valor2 = dadoDois(1,7)
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

const buttonGiraMil = document.createElement("button")
    buttonGiraMil.classList.add("giraDados");

    buttonGiraMil.innerText = "Girar Dados mil vezes";

    document.body.appendChild(buttonGiraMil)  

    buttonGiraMil.addEventListener("click", () => {

        for(let i = 0; i<1000; i++){
            
            let resultMil = girarDadosMil()
            
            if(resultMil === 2){
                pegarResultado[0]++
                
            }
            if(resultMil === 3){
                pegarResultado[1]++
                
            }
            if(resultMil === 4){
                pegarResultado[2]++
                
            }
            if(resultMil === 5){
                pegarResultado[3]++
                
            }
            if(resultMil === 6){
                pegarResultado[4]+=1
                
            }
            if(resultMil === 7){
                pegarResultado[5]+=1
                
            }
            if(resultMil === 8){
                pegarResultado[6]+=1
                
            }
            if(resultMil === 9){
                pegarResultado[7]+=1
                
            }
            if(resultMil === 10){
                pegarResultado[8]+=1
                
            }
            if(resultMil === 11){
                pegarResultado[9]+=1
                
            }
            if(resultMil === 12){
                pegarResultado[10]+=1
                
            }
        
        }  

        console.log(pegarResultado[0])

        const main = document.createElement("main") 
                main.classList.add("main")
                document.body.appendChild(main)

        
    
            const graficoTexto = document.createElement("div") 
            graficoTexto.classList.add("graficoTexto")
            main.appendChild(graficoTexto)  
            for(let i = 0; i < 11; i++){
                const graficoTextoH6 = document.createElement("h6") 
                graficoTextoH6.classList.add("graficoTextoH6")
                graficoTexto.appendChild(graficoTextoH6)  
                graficoTextoH6.innerText = ("Deu o N° " + (i+2) + ": " + pegarResultado[i] + " vezes")
            }

            const text = document.createElement("h2") 
            text.classList.add("text")
            main.appendChild(text)
            text.innerText = ("GRÁFICO")

            const grafico = document.createElement("div") 
            grafico.classList.add("grafico")
            main.appendChild(grafico)  
            
            for(let i = 0; i < 11; i++){
            const graficoContent = document.createElement("div") 
            graficoContent.classList.add("graficoContent")
            grafico.appendChild(graficoContent)       
            graficoContent.style.height = pegarResultado[i]*1 + "px"
           

            } 
        
            
     })

     
        
        
                
    
    
        