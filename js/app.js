let date_birthday = document.getElementById('fecha');

const compararEdad = document.getElementById('mostrar');
const mostrarResultadoValidacion = document.getElementById('validation-text');

compararEdad.addEventListener('click', mostrar);

function mostrar(){

    let birthday_user = date_birthday.value;
    
    let birthday = birthday_user.split('-');
    
    let current_year = new Date();
    let year = current_year.getFullYear();
    let month = current_year.getMonth()+1;
    let day = current_year.getDate();

    userYear = parseInt(birthday[0]);
    userMonth = parseInt(birthday[1]);
    userDay = parseInt(birthday[2]);
    
    console.log(userYear);
    console.log(userMonth);
    console.log(userDay);

    userAgeYears = year - userYear;
    userAgeMonths = month - userMonth;
    userAgeDay = day - userDay;

    if (userAgeYears >= 18 && userAgeMonths >=0 && userAgeDay >= 0) {
       mostrarResultadoValidacion.textContent = `Usted es mayor de edad` ;
    }else{
         mostrarResultadoValidacion.textContent = `Usted es menor de edad` ;
      }
}
