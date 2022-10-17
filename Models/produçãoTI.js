//Gerencia POST e GET no Firebase
import app from './app.js'


import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'


export async function postSolicitacao(cadastro) {
    const db = getFirestore(app) 
    const ticketsCollection = collection(db, 'ticketsTI')
    const docReference = await addDoc(ticketsCollection, cadastro)
    return docReference.id
}


export async function getSolicitacao() {
    const db = getFirestore(app)
    const ticketsCollection = collection(db, 'ticketsTI')
    const ticketsCollectionSnapshot = await getDocs(ticketsCollection);
    const dados = ticketsCollectionSnapshot.docs.map(doc => doc.data());
    return dados;
}