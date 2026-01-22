import { NextResponse } from "next/server";
import htmlToPdf from "html-pdf-node";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { nombre, tipoPersona, documento, correo, telefono, valorCartera } =
      data;

    const html = `
<!DOCTYPE html>
<html lang="es-CO">
  <head>
    <meta charset="UTF-8" />
    <title>Contrato de Prestación de Servicios</title>

    <style>
      @page {
        size: A4;
        margin: 2.5cm;
      }

      body {
        font-family: "Times New Roman", serif;
        font-size: 12pt;
        line-height: 1.6;
        color: #000;
      }

      h1, h2 {
        text-align: center;
        margin-bottom: 20px;
      }

      h1 {
        font-size: 16pt;
        text-transform: uppercase;
      }

      p {
        margin-bottom: 12px;
        text-align: justify;
      }

      .divider {
        border-bottom: 1px solid #000;
        margin: 20px 0;
      }

      .bold {
        font-weight: bold;
      }

      ul {
        margin-left: 20px;
      }

      .signature {
        margin-top: 60px;
      }

      .logo {
        text-align: center;
        margin-bottom: 20px;
      }

      .logo img {
        width: 180px;
      }
    </style>
  </head>

  <body>
    <div class="logo">
      <img src="https://via.placeholder.com/300x100?text=COBRANDO+ONLINE" />
    </div>

    <h1>Contrato de Prestación de Servicios</h1>
    <h2>Recuperación de Cartera</h2>

    <p>Entre los suscritos a saber:</p>

    <p>
      <span class="bold">COBRANDO ONLINE</span>, plataforma digital propiedad de
      <span class="bold">PRAVICE ABOGADOS ESPECIALIZADOS</span>, quien en adelante
      se denominará <span class="bold">EL PRESTADOR</span>, y
    </p>

    <p>
      <span class="bold">${nombre}</span>, identificado(a) con
      <span class="bold">${tipoPersona} No. ${documento}</span>, quien en adelante
      se denominará <span class="bold">EL CLIENTE</span>, se celebra el presente
      <span class="bold">Contrato de Prestación de Servicios</span>.
    </p>

    <div class="divider"></div>

    <p class="bold">PRIMERA – OBJETO</p>
    <p>
      EL PRESTADOR se obliga a prestar los servicios de
      <span class="bold">gestión y recuperación de cartera</span>, conforme a la
      información suministrada por EL CLIENTE.
    </p>

    <div class="divider"></div>

    <p class="bold">SEGUNDA – VALOR DE LA CARTERA</p>
    <p>
      El valor aproximado de la cartera es:
    </p>
    <p class="bold">
      $${Number(valorCartera).toLocaleString("es-CO")} COP
    </p>

    <div class="divider"></div>

    <p class="bold">TERCERA – HONORARIOS</p>
    <p>
      Los honorarios corresponderán aproximadamente al
      <span class="bold">25%</span> de los valores recuperados.
    </p>

    <div class="divider"></div>

    <p class="bold">CUARTA – CONTACTO</p>
    <ul>
      <li><span class="bold">Correo:</span> ${correo}</li>
      <li><span class="bold">Teléfono:</span> ${telefono}</li>
    </ul>

    <div class="divider"></div>

    <p class="bold">FIRMAS</p>
    <p>
      En constancia se firma en la ciudad de ____________, a los ___ días del mes
      de __________ de ______.
    </p>

    <div class="signature">
      <p class="bold">EL CLIENTE</p>
      <p>
        Nombre: ${nombre}<br />
        Documento: ${documento}<br />
        Firma: ___________________________
      </p>

      <br />

      <p class="bold">EL PRESTADOR</p>
      <p>
        COBRANDO ONLINE<br />
        PRAVICE ABOGADOS ESPECIALIZADOS<br />
        Firma: ___________________________
      </p>
    </div>
  </body>
</html>
    `;

    const file = { content: html };
    const options = { format: "A4" };

    // html-pdf-node devuelve Buffer (Node)
    const pdfBuffer = (await htmlToPdf.generatePdf(
      file,
      options,
    )) as unknown as Buffer;

    // 🔑 Conversión necesaria para NextResponse
    const pdfUint8 = new Uint8Array(pdfBuffer);

    return new NextResponse(pdfUint8, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Contrato_Cobrando_Online.pdf"',
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error generando el contrato PDF" },
      { status: 500 },
    );
  }
}
