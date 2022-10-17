//CRIA ENTRADAS NO FIREBASE (POST)
import { postSolicitacao } from '../Models/produçãoTI.js'


const nivel = document.getElementById('cardNivel')
const setor = document.getElementById('cardSetor')
const titulo = document.getElementById('cardTitulo')
const descricao = document.getElementById('cardDescricao')
const data = document.getElementById('cardData')
const solicitante = document.getElementById('cardSolicitante')

const btnCriar = document.getElementById('btnCriar')


//NOVO CODIGO QUE DA POST EM TODAS AS COLEÇÕES (VER DEPOIS COMO AUTOMATIZAR INVÉS DE REPETIR O CODIGO)
  btnCriar.addEventListener('click', async () => {
    const cadastro = {
        nivel: nivel.value,
        setor: setor.value,
        titulo: titulo.value,
        descricao: descricao.value,
        data: data.value,
        solicitante: solicitante.value
    }

//MELHORAR POSTERIORMENTE ? TRY CATCH ?
if (cadastro.setor != "" && cadastro.descricao != "" && cadastro.conteudo != "" && cadastro.nivel != "" && cadastro.solicitante != "") {
  const cadastroId = await postSolicitacao(cadastro)
  console.log(`Solicitação cadastrada com sucesso ${cadastroId}`)
  alert(`Solicitação cadastrada com sucesso`);
  nivel.value = ''
  setor.value = ''
  titulo.value = ''
  descricao.value = ''
  data.value = ''
  solicitante.value = ''  
  // const cadastroId = await postSolicitacao(cadastro)
    // console.log(`Solicitação cadastrada com sucesso ${cadastroId}`)
    // alert(`Solicitação cadastrada com sucesso`);
    // nivel.value = ''
    // setor.value = ''
    // titulo.value = ''
    // descricao.value = ''
    // solicitante.value = ''
} else alert(`Os dados informados estão incorretos e/ou incompletos \n...\nTicket não registrado\n`)

  })