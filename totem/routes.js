const router = require('express').Router()

const { justPonto, justFerias } = require('./models.js')



//criação de dados


router.post("/", async (req, res) => {

  //req body

  const { matriculaPonto, nomePonto, areaAtuacao, setorPonto, dataJust, motivoPonto, entrada, saida, descricao, hExtras, observacao, aprovado } = req.body

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
    aprovado
  }

  try {
    await justPonto.create(justPonto2)
    res.status(201).json({ message: 'justificativa de ponto insirida no sistema' })
  } catch (error) {
    res.status(500).json({ error: error })

  }

});



module.exports = router
