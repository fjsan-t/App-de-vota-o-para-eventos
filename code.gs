function doPost(e) {
  var planilha = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Votos");
  var dados = JSON.parse(e.postData.contents);
  var votos = dados.votos || {};
  
  var novaLinha = [new Date(), dados.email];
  
  for (var i = 1; i <= 9; i++) {
    novaLinha.push(votos[i] !== undefined ? votos[i] : "");
  }
  
  planilha.appendRow(novaLinha);
  
  return ContentService.createTextOutput("OK");
}

function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var abaMedia = ss.getSheetByName("MediaFinal");
  
  var ultimaLinha = abaMedia.getLastRow();
  if (ultimaLinha <= 1) {
    return ContentService.createTextOutput(JSON.stringify([])).setMimeType(ContentService.MimeType.JSON);
  }
  
  var dados = abaMedia.getRange(2, 1, ultimaLinha - 1, 4).getValues();
  
  var lista = dados.map(function(linha) {
    return {
      id: linha[0],
      nota: parseFloat(linha[3]) || 0
    };
  });
  
  lista.sort(function(a, b) {
    return b.nota - a.nota;
  });
  
  var top3 = lista.slice(0, 3);

  return ContentService.createTextOutput(JSON.stringify(top3))
    .setMimeType(ContentService.MimeType.JSON);
}

