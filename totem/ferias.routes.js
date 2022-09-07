const router = require('express').Router()
const { justPonto, justFerias } = require('./models.js')

router.post("/", async (req, res) => {

  //req body

  const { MatriculaFerias, nomeFerias, areaAtuacaoFerias, setorFerias, dataInicio, dataFim, motivoFerias, tempoTotal } = req.body

  const justFerias2 = {
    MatriculaFerias,
    nomeFerias,
    areaAtuacaoFerias,
    setorFerias,
    dataInicio,
    dataFim,
    motivoFerias,
    tempoTotal,
  }

  try {
    await justFerias.create(justFerias2)
    res.status(201).json({ message: 'Solicitação de ferias insirida no sistema' })
  } catch (error) {
    res.status(500).json({ error: error })

  }


});

module.exports = router