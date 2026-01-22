import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { nombre, documento, correo, telefono, valorCartera } = data;

    const html = `
      <html>
        <body>
          <h1>Contrato</h1>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Documento:</strong> ${documento}</p>
          <p><strong>Correo:</strong> ${correo}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Valor:</strong> $${Number(valorCartera).toLocaleString("es-CO")}</p>
        </body>
      </html>
    `;

    let browser;

    if (process.env.VERCEL) {
      const chromium = (await import("@sparticuz/chromium")).default;
      const puppeteer = (await import("puppeteer-core")).default;

      browser = await puppeteer.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath(),
      });
    } else {
      const puppeteer: any = (await import("puppeteer")).default;

      browser = await puppeteer.launch({
        headless: true,
      });
    }

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfUint8Array = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    const pdfBuffer = Buffer.from(pdfUint8Array);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Contrato_Cobrando_Online.pdf"',
      },
    });
  } catch (error) {
    console.error("PDF ERROR:", error);
    return NextResponse.json(
      { error: "Error generando el PDF" },
      { status: 500 },
    );
  }
}
