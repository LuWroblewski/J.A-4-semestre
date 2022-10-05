const router = require('express').Router()
const { justPonto, justFerias } = require('../models/models.js')

//leitura de dados, read
router.get('/getPonto', async (req, res) => {

  try {
    const solicitacao = await justPonto.find()

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

router.delete('/del/:matriculaPonto', async (req, res) => {
  const matriculaPonto = req.params.matriculaPonto

  const matriculaSolicitacao = await justPonto.findOne({ matriculaPonto: matriculaPonto })

  if (!matriculaSolicitacao) {
    res.status(422).json({ message: 'Id não encontrado' })
    return;
  }

  try {
    await justPonto.deleteOne({ matriculaPonto: matriculaPonto })
    res.status(200).json({ message: 'Usuario removido' })


  } catch (error) {
    res.status(500).json({ error: error })

  }
})
//update

router.patch('/update/:matriculaPonto', async (req, res) => {
  const mPonto = req.params.matriculaPonto

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
    const updateSolicitacao = await justPonto.updateOne({ matriculaPonto: mPonto }, justPonto2)
    res.status(200).json(justPonto2)

    if (updateSolicitacao.matchedCount === 0) {
      res.status(422).json({ message: 'não realizado' })
      return;
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }

})


router.get('/:dataInicio', async (req, res) => {
  const dataInicio = req.params.dataInicio

  try {
    const idSolicitacao = await justPonto.findOne({ dataInicio: dataInicio })

    if (!idSolicitacao) {
      res.status(422).json({ message: 'Id não encontrado' })
      return;
    }
    res.status(200).json(idSolicitacao)
  } catch (error) {
    res.status(500).json({ error: error })
  }

})

module.exports = router