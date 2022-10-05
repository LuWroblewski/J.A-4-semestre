const router = require('express').Router()
const { justPonto, justFerias } = require('../models/models.js')


//leitura de dados, read
router.get('/getFerias', async (req, res) => {

  try {
    const solicitacao = await justFerias.find()



    if (!solicitacao) {
      res.status(422).json({ message: 'erooooou' })
      return;
    }
    res.status(200).json(solicitacao)

  } catch (error) {
    res.status(500).json({ error: error })
  }
})

//delete
router.delete('/del/:matriculaFerias', async (req, res) => {
  const matriculaFerias = req.params.matriculaFerias

  const matriculaSolicitacao = await justFerias.findOne({ matriculaFerias: matriculaFerias })

  if (!matriculaSolicitacao) {
    res.status(422).json({ message: 'Id não encontrado' })
    return;
  }

  try {
    await justFerias.deleteOne({ matriculaFerias: matriculaFerias })
    res.status(200).json({ message: 'Usuario removido' })


  } catch (error) {
    res.status(500).json({ error: error })

  }
})
//update
router.patch('/update/:matriculaFerias', async (req, res) => {
  const mFerias = req.params.matriculaFerias

  const { matriculaFerias, nomeFerias, areaAtuacaoFerias, setorFerias, dataInicio, dataFim, motivoFerias, tempoTotal, aprovado } = req.body

  const justFerias2 = {
    matriculaFerias,
    nomeFerias,
    areaAtuacaoFerias,
    setorFerias,
    dataInicio,
    dataFim,
    motivoFerias,
    tempoTotal,
    aprovado
  }

  try {
    const updateSolicitacao = await justFerias.updateOne({ matriculaFerias: mFerias }, justFerias2)
    res.status(200).json(justFerias2)

    if (updateSolicitacao.matchedCount === 0) {
      res.status(422).json({ message: 'não realizado' })
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }

})

module.exports = router