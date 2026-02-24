import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync, writeFileSync } from 'fs';

async function extractText() {
  const pdfBuffer = readFileSync('C:/Archivio/Dev/unite-italia/decoded-moves.pdf');
  const data = new Uint8Array(pdfBuffer);
  const loadingTask = getDocument({ data, useWorkerFetch: false, isEvalSupported: false, useSystemFonts: true });
  const pdf = await loadingTask.promise;
  console.log('Num pages:', pdf.numPages);
  let fullText = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map(item => item.str).join(' ');
    fullText += 'PAGE ' + i + ':\n' + pageText + '\n\n';
  }
  writeFileSync('C:/Archivio/Dev/unite-italia/pdf-text.txt', fullText);
  console.log('Total text length:', fullText.length);
  const italianStart = fullText.indexOf('PAGE 27:');
  console.log('Italian section starts at index:', italianStart);
  console.log(fullText.substring(italianStart, italianStart + 5000));
}
extractText().catch(e => console.error(e.message, e.stack));
