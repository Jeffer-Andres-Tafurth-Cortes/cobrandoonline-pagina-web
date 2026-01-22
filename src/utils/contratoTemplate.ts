export const contratoHTML = (data: {
  nombre: string;
  tipoPersona: string;
  documento: string;
  correo: string;
  telefono: string;
  valorCartera: number;
}) => `
<!DOCTYPE html>
<html lang="es-CO">
<head>
  <meta charset="UTF-8" />
  <title>Contrato</title>

  <style>
    body {
      font-family: "Times New Roman", serif;
      font-size: 12pt;
      line-height: 1.6;
      padding: 40px;
    }

    h1, h2 {
      text-align: center;
    }

    h1 {
      font-size: 16pt;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 13pt;
      margin-bottom: 30px;
    }

    p {
      text-align: justify;
      margin-bottom: 12px;
    }

    .divider {
      border-bottom: 1px solid #000;
      margin: 20px 0;
    }

    .bold {
      font-weight: bold;
    }

    .signature {
      margin-top: 60px;
    }
  </style>
</head>

<body>
  <h1>Contrato de Prestación de Servicios</h1>
  <h2>Recuperación de Cartera</h2>

  <p>
    Entre <span class="bold">COBRANDO ONLINE</span> y
    <span class="bold">${data.nombre}</span>, identificado(a) como
    <span class="bold">${data.tipoPersona}</span> No.
    <span class="bold">${data.documento}</span>.
  </p>

  <div class="divider"></div>

  <p class="bold">VALOR DE LA CARTERA</p>
  <p class="bold">
    $${data.valorCartera.toLocaleString("es-CO")} COP
  </p>

  <div class="divider"></div>

  <p class="bold">DATOS DE CONTACTO</p>
  <p>Correo: ${data.correo}</p>
  <p>Teléfono: ${data.telefono}</p>

  <div class="signature">
    <p class="bold">EL CLIENTE</p>
    <p>Nombre: ${data.nombre}</p>
    <p>Documento: ${data.documento}</p>

    <br />

    <p class="bold">EL PRESTADOR</p>
    <p>COBRANDO ONLINE</p>
  </div>
</body>
</html>
`;
