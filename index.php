<php>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>Territorium | Promedios</title>
</head>
<body>
    <section class="container">
        <div class="card" style="width:40vw; height:90vh;">
            <img style="object-fit: cover; height: 35vh;" src="img/student.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <p id="need" class="card-text" style="text-align: center;">Ingresa tus notas</p>
              <fieldset class="form-group">
                <legend style="text-align: center;"><span>Calculo de notas</span></legend>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label" for="">Nota 1</label>
                  <div class="col-sm-8">
                    <input id="numberone" class="form-control" placeholder="Primer nota" type="number">
                  </div>
                </div>
                <br>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label" for="">Nota 2</label>
                  <div class="col-sm-8">
                    <input id="numbertwo" class="form-control" placeholder="Segunda nota" type="number">
                  </div>
                </div>
                <br>
                <div class="form-group row">
                    <label class="col-sm-4 col-form-label" for="">Nota 3</label>
                    <div class="col-sm-8">
                      <input id="numberthree" class="form-control" placeholder="Tercer nota" type="number">
                    </div>
                  </div>  
                </div>
                <button id="button" type="button" class="btn btn-primary" style="background-color: aqua; color: black;">Resultado</button>
              </fieldset>
            </div>
        </div>
    </section>
    <script src="js/app.js"></script>
</body>
</html>
</php>