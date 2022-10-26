const router = require('express').Router()
const { transporter } = require('./Api/mainApi.js')
const { justPonto, justFerias } = require('./models.js')



//criação de dados


router.post("/", async (req, res) => {

  //req body

  const { matriculaPonto, nomePonto, areaAtuacao, setorPonto, dataJust, motivoPonto, entrada, saida, descricao, hExtras, observacao,  aprovado, emailPonto } = req.body

  const justPonto2 = {
    matriculaPonto,
    nomePonto,
    areaAtuacao,
    setorPonto,
    dataJust,
    motivoPonto,
    entrada,
    saida,
    descricao,
    hExtras,
    observacao,
    aprovado,
    emailPonto
  }

  transporter.sendMail({
    from: "Totem <testeluwroblewski@gmail.com>",
    to: `${emailPonto}`,
subject: "Solicitação colaborador",
html: `<div style= "border: 4px; border-style: solid; border-color: rgb(93, 85, 133); width: 500px; height: 630px; background-color: rgb(127, 117, 179)" >
<h2 style="font-family: roboto-condesed; color: rgb(255, 255, 255); text-align: center;" >Justificativa de ponto</h2>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Matricula: ${matriculaPonto}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Nome do colaborador: ${nomePonto}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Area de atuação: ${areaAtuacao}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Setor: ${setorPonto}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Data da justificativa: ${dataJust}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Motivo da solicitação: ${motivoPonto}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Entrada: ${entrada}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Saida: ${saida}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Descrição do motivo: ${descricao}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Horas extras: ${entrada}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Observações: ${observacao}</p>
<p style="font-family: roboto-condesed; color: rgb(255, 255, 255);  text-align: center; font-size: large;"  >Email usado: ${emailPonto}</p>
<p style="font-family: Arial; color: rgb(255, 255, 255);  text-align: center;"  ><small>Se voce não fez a solicitação por favor ignorar.</small></p>
</div> `

}).then(message =>{
console.log(message)
}).catch(err =>{
    console.log(err)
})

  try {
    await justPonto.create(justPonto2)
    res.status(201).json({ message: 'justificativa de ponto insirida no sistema' })
  } catch (error) {
    res.status(500).json({ error: error })

  }

});




module.exports = router
