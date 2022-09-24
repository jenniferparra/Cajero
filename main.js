const usuarios = [
    {
        nombre: 'Laura',
        documento: 1001,
        clave: '4357',
        tipo: 'administrador',
    },
    {
        nombre: 'Andrés',
        documento: 1212,
        clave: '8751',
        tipo: 'cliente',
    },
    {
        nombre: 'Sofía',
        documento: 1021,
        clave: '6312',
        tipo: 'cliente',
    },
];

function acceso(){
    let tipoUsuario = '';
    while (true) {
       const docUser = Number(prompt('Ingrese su número de documento'));
       let claveUser='';
       let userFound = usuarios.find((element) => element.documento === docUser);
       
       if(userFound==undefined){
          alert('El usuario no existe');
       } else {
          claveUser= prompt('Ingrese su clave');
          if (userFound.clave == claveUser){
             console.log(userFound.tipo); 
             tipoUsuario = userFound.tipo;
             console.log("Bienvenido "+ ''+tipoUsuario);
             if(tipoUsuario=="administrador"){
                   cargarCajero()
                }else{
                   retirarDinero()
                }
          }
          while(userFound.clave != claveUser){
             console.log('Clave incorrecta, ingrésela nuevamente');
             claveUser= prompt('Ingrese su clave');
             if (userFound.clave == claveUser){
                console.log(userFound.tipo); 
                tipoUsuario = userFound.tipo
                console.log("Bienvenido "+ ''+tipoUsuario);
                if(tipoUsuario=="administrador"){
                   cargarCajero()
                }else{
                   retirarDinero()
                }
                
             }
          }
          break; 
       }
    }
    
   
 }
 
 function cargarCajero(){
       let billetes = [];
       let denominaciones = [100, 50, 20, 10, 5];
       
       let i=0;
       let cargado = 0;
       for (i;i<denominaciones.length;i++){
          let billete = {
             denominacion: denominaciones[i],
             cantidad_billetes: prompt('Escriba la cantidad de billetes de '+denominaciones[i]+' mil'),
          }
          billetes.push(billete);
       }
       for(i=0;i<denominaciones.length;i++){
          console.log("Dinero en billetes de "+ billetes[i].denominacion + ' es: '+billetes[i].denominacion*parseInt(billetes[i].cantidad_billetes,10))

          total += billetes[i].denominacion*parseInt(billetes[i].cantidad_billetes,10)

          cargado += billetes[i].denominacion*parseInt(billetes[i].cantidad_billetes,10)
       }
       console.log("El total de dinero cargado en el cajero es: "+cargado)  
       console.log("El total de dinero en el cajero es: "+total);
       acceso();     
 }

 function retirarDinero(){
    let retiro = Number(prompt('¿Cuánto dinero desea retirar?'));
    if (retiro>total) {
        alert('Cajero en mantenimiento, vuelva pronto.');
        acceso();
    }
    // for (i=0;i<denominaciones.length;i++)
    console.log("Funcion para retirar")
 }

 let total = 0;
 let usuario = '';
 usuario = acceso();

