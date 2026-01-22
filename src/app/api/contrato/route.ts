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
                size: letter;
                margin: 2.5cm;
              }
        
              body {
                font-family: "Times New Roman", serif;
                font-size: 12pt;
                line-height: 1.6;
                color: #000;
              }
        
              h1,
              h2 {
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
            </style>
          </head>
        
          <body>
            <h1>Contrato de Prestación de Servicios</h1>
            <h2>Para Recuperación de Cartera</h2>
        
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
              <span class="bold"
                >Contrato de Prestación de Servicios para la Recuperación de
                Cartera</span
              >, el cual se regirá por las siguientes cláusulas:
            </p>
        
            <div class="divider"></div>
        
            <p class="bold">PRIMERA - OBJETO</p>
            <p>
              EL PRESTADOR se obliga a prestar a favor de EL CLIENTE los servicios de
              <span class="bold">gestión y recuperación de cartera</span>, de manera
              extrajudicial y, de ser necesario, mediante acciones jurídicas, conforme a
              la información suministrada por EL CLIENTE.
            </p>
        
            <div class="divider"></div>
        
            <p class="bold">SEGUNDA - VALOR DE LA CARTERA</p>
            <p>
              EL CLIENTE declara que el valor aproximado de la cartera a recuperar es de:
            </p>
            <p class="bold">
              $${Number(valorCartera).toLocaleString("es-CO")} COP
            </p>
            <p>
              Este valor es <span class="bold">referencial</span> y podrá variar de
              acuerdo con el análisis jurídico del caso.
            </p>
        
            <div class="divider"></div>
        
            <p class="bold">TERCERA - HONORARIOS</p>
            <p>
              EL CLIENTE acepta que los honorarios del servicio corresponden a un
              <span class="bold">porcentaje aproximado del 25%</span> sobre los valores
              efectivamente recuperados.
            </p>
            <p>
              Este porcentaje es <span class="bold">orientativo</span> y podrá ajustarse
              previo acuerdo entre las partes, según las condiciones particulares del
              caso.
            </p>
        
            <div class="divider"></div>
        
            <p class="bold">CUARTA - ASESORÍA INICIAL</p>
            <p>
              EL CLIENTE tendrá derecho a una
              <span class="bold">asesoría inicial gratuita de quince (15) minutos</span>,
              destinada a la evaluación preliminar del caso y orientación general del
              proceso.
            </p>
        
            <div class="divider"></div>
        
            <p class="bold">QUINTA - OBLIGACIONES DEL CLIENTE</p>
            <p>EL CLIENTE se compromete a:</p>
            <ul>
              <li>Suministrar información veraz y completa.</li>
              <li>Entregar los documentos necesarios para la gestión de cobro.</li>
              <li>Mantener comunicación activa durante el proceso.</li>
            </ul>
        
            <div class="divider"></div>
        
            <p class="bold">SEXTA - MEDIOS DE CONTACTO</p>
            <p>
              Para efectos de notificaciones y contacto, EL CLIENTE suministra la
              siguiente información:
            </p>
            <ul>
              <li><span class="bold">Correo electrónico:</span> ${correo}</li>
              <li><span class="bold">Teléfono:</span> ${telefono}</li>
            </ul>
        
            <div class="divider"></div>
        
            <p class="bold">SÉPTIMA - NATURALEZA DEL SERVICIO</p>
            <p>
              EL CLIENTE entiende y acepta que EL PRESTADOR
              <span class="bold">no garantiza resultados</span>, ya que la recuperación
              depende de múltiples factores externos, incluyendo la voluntad de pago del
              deudor.
            </p>
        
            <div class="divider"></div>
        
            <p class="bold">OCTAVA - VIGENCIA</p>
            <p>
              El presente contrato tendrá vigencia a partir de la fecha de su firma y se
              mantendrá activo hasta la finalización del proceso de recuperación o por
              mutuo acuerdo entre las partes.
            </p>
        
            <div class="divider"></div>
        
            <p class="bold">NOVENA - ACEPTACIÓN</p>
            <p>
              Las partes declaran haber leído, entendido y aceptado el contenido del
              presente contrato.
            </p>
        
            <div class="divider"></div>
        
            <p class="bold">FIRMAS</p>
            <p>
              En constancia se firma en la ciudad de ____________, a los ___ días del mes
              de __________ de ______.
            </p>
        
            <div class="signature">
              <p class="bold">EL CLIENTE</p>
              <p>
                Nombre: <span class="bold">${nombre}</span><br />
                Documento: <span class="bold">${documento}</span><br />
                Firma: ___________________________
              </p>
        
              <br />
        
              <p class="bold">EL PRESTADOR</p>
              <p>
                <span class="bold">COBRANDO ONLINE</span><br />
                Plataforma propiedad de
                <span class="bold">PRAVICE ABOGADOS ESPECIALIZADOS</span><br />
                Firma: ___________________________
              </p>
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
