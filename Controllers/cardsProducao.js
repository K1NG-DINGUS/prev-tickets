//RECUPERA ENTRADAS DO FIREBASE (GET)
import { getSolicitacao } from '../Models/produçãoTI.js'

const colecaoCards = document.getElementById('data');

//FUNÇÃO SIMPLES PARA MOSTRAR DATAS NO NOSSO PADRÃO
function inverterData(str){
  return str.split('-').reverse().join('/');
}


//CRIA CARDS DE SOLICITAÇÃO DINAMICAMENTE
async function loadData() {
  let i = 0;
  const data = await getSolicitacao()

  colecaoCards.innerHTML = data.map(d => `
    <div class="card border-primary mb-3 fb-item" style="max-width: 20rem;">
    <div class="card-header">${d.setor}</div>
    <div class="card-header">Prioridade: ${d.nivel}</div>
    <div class="card-header">${inverterData(d.data)}</div>
    <div class="card-body">
      <h4 class="card-title">${d.titulo}</h4>
      <button type="button" class="btn btn-lg btn-light" id="carregaSolicitacao${i++}">Carregar</button>
      <p hidden class="card-text">${d.descricao}</p>
    </div>
  </div>
   `,
  ).join('')


  //OCULTA OS CARDS E MOSTRA A DESCRIÇÃO DA SOLICITACÃO SELECIONADA
  for (let i = 0; i <= data.length; i++) {
    let btnCarregar = document.getElementById(`carregaSolicitacao${i}`)

    btnCarregar.addEventListener('click', () => {

      colecaoCards.innerHTML = data[i].descricao;

      colecaoCards.style.backgroundImage = "none";

      document.body.appendChild(colecaoCards);



    })
  }

}
document.onload = loadData();