let nomeDoHeroi = "Hiro"
let nivelDoHeroi = 1050

switch (true) {
    case nivelDoHeroi <= 1000:
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ferro")
        break

    case nivelDoHeroi > 1001 && nivelDoHeroi <= 2000:
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Bronze")
        break

    case nivelDoHeroi > 2001 && nivelDoHeroi <= 5000:
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Prata")
        break
    
    case nivelDoHeroi > 5001 && nivelDoHeroi <= 7000:
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ouro")
        break
        
    case nivelDoHeroi > 7001 && nivelDoHeroi <= 8000:
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Platina")
        break
    
    case nivelDoHeroi > 8001 && nivelDoHeroi <= 9000:
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível Ascendente")
        break

    case nivelDoHeroi > 9001 && nivelDoHeroi <= 10000:
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível Imortal")
        break

    case nivelDoHeroi >= 10001:
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível Radiante")
        break
        
}
