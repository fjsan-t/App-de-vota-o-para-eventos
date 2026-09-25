 <h1>Sistema de votação utilizando Apps Script</h1>

<h2>Descrição</h2>

<p>Aplicação web para registrar votos/avalição de apresentações em eventos de forma simples, utilizando Apps Script para receber requisições via fetch, salvando os dados da votação numa planilha do Google.</p>
<p>O sistema utiliza Google Apps Script como backend serverless para receber requisições `POST` (via `fetch`) e armazenar os dados diretamente numa planilha do Google Sheets, onde os cálculos e médias são processados automaticamente.</p>
<p>O projeto inclui uma interface intuitiva para os eleitores e uma página que exibe a colocação dos três melhores colcoados.</p>

<h2>Obvjetivo</h2>

<p>Desenvolvido para atender às necessidades de um evento interno institucional, o projeto teve como foco:</p>
<p>Autonomia operacional: Permitir que a comissão organizadora acompanhe e administre os resultados sem necessidade de conhecimentos em programação ou suporte direto da equipe de TI.</p>
<p>Custo Zero: Solução 100% gratuita utilizando infraestrutura serverless (GitHub Pages + Google Workspace).</p>

<h2>Tecnologias utilizadas</h2>

<p><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6)</p>
<strong>Backend / Banco de Dados:</strong> Google Apps Script, Google Sheets API.</p>
<strong>Hospedagem:</strong>GitHub Pages

<h2>Próximas Melhorias</h2>

- Implementar trava de submissão no cliente/servidor para impedir votos duplicados por latência de rede.
- Adicionar validação de e-mail e confirmação de envio.
- Habilitar transição automática para a página de resultados após o encerramento do evento.
