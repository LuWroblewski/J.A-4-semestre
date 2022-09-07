const router = require('express').Router()

const { justPonto, justFerias } = require('./models.js')



//criação de dados


router.post("/", async (req, res) => {

  //req body

  const { matriculaPonto, nomePonto, areaAtuacao, setorPonto, dataJust, motivoPonto, entrada, saida, descricao, hExtras, observacao } = req.body

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
    observacao

  }

  try {
    await justPonto.create(justPonto2)
    res.status(201).json({ message: 'justificativa de ponto insirida no sistema' })
  } catch (error) {
    res.status(500).json({ error: error })

  }

});



/*leitura de dados, read
router.get('/justPonto', async (req,res)=>{ 

  try {
    const solicitacao = await justPonto.find()

    if(!solicitacao){
      res.status(422).json({message: 'erooooou' })
      return;
        }
res.status(200).json(solicitacao)

  } catch (error) {
    res.status(500).json({error: error})
  }
})

router.get('/:id', async (req,res)=>{
const id = req.params.id

try {
  const idSolicitacao = await justPonto.findOne({_id: id})

  if(!idSolicitacao){
res.status(422).json({message: 'Id não encontrado' })
return;
  }
  res.status(200).json(idSolicitacao)
} catch (error) {
  res.status(500).json({error: error})
}

})

//update
router.patch('/:id', async (req,res)=>{
  const id = req.params.id
  
  const {matriculaPonto, nomePonto, areaAtuacao, setorPonto, dataJust, motivoPonto, entrada, saida, descricao, hExtras, observacao} = req.body
  
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
      observacao
  
  }

  try {
    const updateSolicitacao = await justPonto.updateOne({_id: id}, justPonto2)
    res.status(200).json(justPonto2)

    if(updateSolicitacao.matchedCount === 0){
      res.status(422).json({message: 'não realizado' })
return;
    }
  } catch (error) {
    res.status(500).json({error: error})
  }
  
  })


//delete

router.delete('/:id', async (req,res)=>{
  const id = req.params.id


    const idSolicitacao = await justPonto.findOne({_id: id})
  
    if(!idSolicitacao){
  res.status(422).json({message: 'Id não encontrado' })
  return;
    }
try {
  await justPonto.deleteOne({_id: id})
  res.status(200).json({message: 'Usuario removido' })


} catch (error) {
  res.status(500).json({error: error})
  
}



})
*/
module.exports = router