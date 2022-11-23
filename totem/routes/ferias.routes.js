const router = require('express').Router()
const { justPonto, justFerias } = require('../models/models.js')
const { transporter } = require('../api/mainApi.js')

router.post("/", async (req, res) => {

  //req body

  const { matriculaFerias, nomeFerias, areaAtuacaoFerias, setorFerias, dataInicio, dataFim, motivoFerias, tempoTotal, aprovado, emailFerias } = req.body

  const justFerias2 = {
    matriculaFerias,
    nomeFerias,
    areaAtuacaoFerias,
    setorFerias,
    dataInicio,
    dataFim,
    motivoFerias,
    tempoTotal,
    aprovado,
    emailFerias
  }

  transporter.sendMail({
    from: "Totem <testeluwroblewski@gmail.com>",
    to: `${emailFerias}`,
subject: "Solicitação colaborador",
html: `<div style= "border: 4px; border-style: solid; border-color: rgb(93, 85, 133); width: 500px; height: 500px; background-color: rgb(127, 117, 179)" >
<h2 style="font-family: roboto-condesed; color: rgb(255, 255, 255); text-align: center;" >Solicitação de ferias</h2>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;">Matricula:${matriculaFerias}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;">Nome do colaborador: ${nomeFerias}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;">Area de atuação: ${areaAtuacaoFerias}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;">Setor: ${setorFerias}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;">Data de inicio das ferias: ${dataInicio}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;">Data do fim das ferias: ${dataFim}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;">Motivo das ferias: ${motivoFerias}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;">Tempo total de ferias: ${tempoTotal}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;">Email usado: ${emailFerias}</p>
<p style="font-family: Arial; color: rgb(255, 255, 255);  text-align: center;"  ><small>Se voce não fez a solicitação por favor ignorar.</small></p>
</div> `

}).then(message =>{
console.log(message)
}).catch(err =>{
    console.log(err)
})

  try {
    await justFerias.create(justFerias2)
    res.status(201).json({ message: 'Solicitação de ferias insirido no sistema' })
  } catch (error) {
    res.status(500).json({ error: error })

  }


});

module.exports = router