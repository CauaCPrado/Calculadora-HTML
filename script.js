

const display = document.getElementById("display");


// =====================================================
// ADICIONAR VALORES
// =====================================================

function adicionar(valor) {

    if (display.value === "0" || display.value === "Erro") {
        display.value = valor;
    } else {
        display.value += valor;
    }
}


// =====================================================
// LIMPAR
// =====================================================

function limpar() {
    display.value = "0";
}


// =====================================================
// APAGAR
// =====================================================

function apagar() {

    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }
}


// =====================================================
// CONVERTER GRAUS PARA RADIANOS
// =====================================================

function grausParaRadiano(graus) {
    return graus * Math.PI / 180;
}


// =====================================================
// FUNÇÕES CIENTÍFICAS
// =====================================================

function funcao(tipo) {

    let valor = parseFloat(display.value);

    if (isNaN(valor)) {
        display.value = "Erro";
        return;
    }

    switch (tipo) {

        // Seno
        case "sin":
            display.value = Math.sin(
                grausParaRadiano(valor)
            );
            break;


        // Cosseno
        case "cos":
            display.value = Math.cos(
                grausParaRadiano(valor)
            );
            break;


        // Tangente
        case "tan":
            display.value = Math.tan(
                grausParaRadiano(valor)
            );
            break;


        // Raiz quadrada
        case "sqrt":

            if (valor < 0) {
                display.value = "Erro";
            } else {
                display.value = Math.sqrt(valor);
            }

            break;


        // Logaritmo base 10
        case "log":

            if (valor <= 0) {
                display.value = "Erro";
            } else {
                display.value = Math.log10(valor);
            }

            break;


        // Logaritmo natural
        case "ln":

            if (valor <= 0) {
                display.value = "Erro";
            } else {
                display.value = Math.log(valor);
            }

            break;


        // Número ao quadrado
        case "square":
            display.value = Math.pow(valor, 2);
            break;


        // Número ao cubo
        case "cube":
            display.value = Math.pow(valor, 3);
            break;
    }
}


// =====================================================
// CALCULAR
// =====================================================

function calcular() {

    try {

        let expressao = display.value;

        // Substitui π por Math.PI
        expressao = expressao.replace(/π/g, "Math.PI");

        // Substitui ^ por **
        expressao = expressao.replace(/\^/g, "**");

        // Calcula a porcentagem
        expressao = expressao.replace(
            /(\d+(?:\.\d+)?)%/g,
            "($1/100)"
        );

        display.value = eval(expressao);

    } catch (erro) {

        display.value = "Erro";
    }
}

