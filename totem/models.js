const mongoose = require("mongoose");


const justPontoSchema = new mongoose.Schema({
    matriculaPonto: String,
    nomePonto: String,
    areaAtuacao: String,
    setorPonto: String,
    dataJust: String,
    motivoPonto: String,
    entrada: String,
    saida: String,
    descricao: String,
    hExtras: String,
    observacao: String,

});

const justPonto = mongoose.model("justPonto", justPontoSchema);


const justFeriasSchema = new mongoose.Schema({
    MatriculaFerias: String,
    nomeFerias: String,
    areaAtuacaoFerias: String,
    setorFerias: String,
    dataInicio: String,
    dataFim: String,
    motivoFerias: String,
    tempoTotal: String,
});

const justFerias = mongoose.model("justFerias", justFeriasSchema);

module.exports = { justPonto, justFerias }
