const mongoose = require("mongoose");


const justPontoSchema = new mongoose.Schema({
    matriculaPonto: String,
    nomePonto: String,
    emailPonto: String,
    areaAtuacao: String,
    setorPonto: String,
    dataJust: String,
    motivoPonto: String,
    entrada: String,
    saida: String,
    descricao: String,
    hExtras: String,
    observacao: String,
    aprovado: String
});

const justPonto = mongoose.model("justPonto", justPontoSchema);


const justFeriasSchema = new mongoose.Schema({
    matriculaFerias: String,
    nomeFerias: String,
    emailFerias: String,
    areaAtuacaoFerias: String,
    setorFerias: String,
    dataInicio: String,
    dataFim: String,
    motivoFerias: String,
    tempoTotal: String,
    aprovado: String
});

const justFerias = mongoose.model("justFerias", justFeriasSchema);

module.exports = { justPonto, justFerias }
