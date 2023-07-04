let dias;
let dineroInicial = prompt("Ingresar dinero disponible");

while (isNaN(dineroInicial)) {
  dineroInicial = prompt("Por favor, ingrese un número válido para el dinero disponible");
}

let saldoFinalDia = dineroInicial;
let gastosDiarios = [];

function restar(a, b) {
  return a - b;
}

let opcionDias = prompt("Ingrese la cantidad de días para calcular su gasto (ingrese '0' para seleccionar por mes)");

while (isNaN(opcionDias)) {
  opcionDias = prompt("Por favor, ingrese un número válido para la cantidad de días");
}

dias = parseInt(opcionDias);

for (let i = 0; i < dias; i++) {
  let dineroGastado = prompt(`Ingrese cuánto gastó en el día ${i + 1}`);

  while (isNaN(dineroGastado)) {
    dineroGastado = prompt(`Por favor, ingrese un número válido para el gasto del día ${i + 1}`);
  }

  gastosDiarios.push(parseFloat(dineroGastado));
  saldoFinalDia = restar(saldoFinalDia, dineroGastado);

  if (saldoFinalDia < 0) {
    alert(`Su capital es insuficiente, por favor recargue. Tiene que abonar: ${saldoFinalDia}`);
    break; 
  } else {
    alert(`Su capital final en el día ${i + 1} es de ${saldoFinalDia}`);
  }
}

let totalGastado = gastosDiarios.reduce((a, b) => a + b, 0); 
let ahorro = restar(dineroInicial, totalGastado);
alert(`Usted pudo ahorrar este mes: ${ahorro}`);

let informeMes = {
  dineroInicial: dineroInicial,
  saldoFinalDia: saldoFinalDia,
  gastosDiarios: gastosDiarios,
  totalGastado: totalGastado,
  ahorro: ahorro
};

console.log(informeMes);

let resultados = [];
let continuar = true;

while (continuar) {
  let menuOpciones = prompt("Si desea abrir un menú con opciones escriba 0");

  while (menuOpciones !== "salir") {
    switch (menuOpciones) {
      case "0":
        let opcion = prompt("Seleccione una opción:\n1. Buscar un valor específico\n2. Buscar valores mayores filtrados\nEscriba 'salir' para finalizar");

        switch (opcion) {
          case "1":
            resultados = [];
            let gastoBuscado = parseFloat(prompt("Ingrese el valor de un gasto a buscar:"));

            while (isNaN(gastoBuscado)) {
              gastoBuscado = parseFloat(prompt("Por favor, ingrese un número válido para el valor de gasto a buscar:"));
            }

            let gastoEncontrado = buscarGasto(gastoBuscado);

            for (let i = 0; i < gastosDiarios.length; i++) {
              if (gastosDiarios[i] === gastoBuscado) {
                resultados.push(`Día ${i + 1}: $${gastosDiarios[i]}`);
              }
            }

            if (resultados.length > 0) {
              alert(`Los gastos de valor ${gastoBuscado} fueron encontrados en los siguientes días:\n${resultados.join("\n")}`);
            } else {
              alert(`No se encontraron gastos de valor ${gastoBuscado}.`);
            }
            continuar = false;
            break;



                      case "2":
            resultados = [];
            let valorFiltro = parseFloat(prompt("Ingrese un valor para filtrar los gastos mayores a él:"));

            while (isNaN(valorFiltro)) {
              valorFiltro = parseFloat(prompt("Por favor, ingrese un número válido para el valor de filtro:"));
            }

            let gastosFiltrados = filtrarGastosMayores(valorFiltro);

            for (let i = 0; i < gastosDiarios.length; i++) {
              if (gastosDiarios[i] > valorFiltro) {
                resultados.push(`Día ${i + 1}: $${gastosDiarios[i]}`);
              }
            }

            if (resultados.length > 0) {
              alert(`Los gastos mayores a ${valorFiltro} son:\n${resultados.join("\n")}`);
            } else {
              alert(`No se encontraron gastos mayores a ${valorFiltro}.`);
            }
            continuar = false;
            break;

          case "salir":
            break;

          default:
            alert("Opción inválida");
            break;
        }
        break;

      default:
        alert("Opción inválida");
        break;
    }

    menuOpciones = prompt("Si desea abrir un menú con opciones escriba 0");



// buscar 
function buscarGasto(valor) {
  let gastoEncontrado = gastosDiarios.find(gasto => gasto === valor);
  return gastoEncontrado;
}

// filtrar
function filtrarGastosMayores(valor) {
  let gastosMayores = gastosDiarios.filter(gasto => gasto > valor);
  return gastosMayores;
}



    }

  }

  

  

  
