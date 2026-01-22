import { NextResponse } from "next/server";
import htmlToPdf from "html-pdf-node";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { nombre, tipoPersona, documento, correo, telefono, valorCartera } =
      data;

    const html = `
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              line-height: 1.6;
              font-size: 14px;
            }
            h1 {
              text-align: center;
              margin-bottom: 30px;
            }
            .section {
              margin-bottom: 20px;
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
          <h1>Contrato de Gestión de Recuperación de Cartera</h1>

          <div class="section">
            <p>
              Entre <span class="bold">COBRANDO ONLINE</span> y
              <span class="bold">${nombre}</span>,
              identificado como <span class="bold">${tipoPersona}</span>,
              con documento <span class="bold">${documento}</span>,
              se celebra el presente contrato.
            </p>
          </div>

          <div class="section">
            <p>
              El cliente autoriza la gestión de recuperación de cartera por un
              valor aproximado de <span class="bold">${valorCartera}</span>.
            </p>
          </div>

          <div class="section">
            <p>
              Datos de contacto:<br />
              Correo: ${correo}<br />
              Teléfono: ${telefono}
            </p>
          </div>

          <div class="signature">
            <p>Firma del cliente:</p>
            <p>______________________________</p>
          </div>
        </body>
      </html>
    `;

    const file = { content: html };
    const options = { format: "A4" };

    const pdfBuffer = await htmlToPdf.generatePdf(file, options);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          "attachment; filename=Contrato_Cobrando_Online.pdf",
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
