const pagamentoService = require('../services/pagamento');
const planoService = require('../services/plano');
const alunoService = require('../services/aluno');
const { validate } = require('../validates/pagamento');

const getPagamento = async (req, res, next) => {
  try {
    const retorno = await pagamentoService.getPagamento()
    res.status(200).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const postPagamento = async (req, res, next) => {
  try {
    const erro = validate(req.body);
    if (erro.length > 0) {
      return res.status(400).json({ erro });
    }

    const aluno = await alunoService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    const plano = await planoService.getById(req.params.id_aluno);
    if (!plano) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }

    const retorno = await pagamentoService.postPagamento(req.body)
    res.status(201).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const deletePagamento = async (req, res, next) => {
  try {
    const aluno = await alunoService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    const plano = await planoService.getById(req.params.id_aluno);
    if (!plano) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }

    await pagamentoService.deletePagamento(req.params)
    .then(ret => res.status(204).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const putPagamento = async (req, res, next) => {
  try {
    const aluno = await alunoService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    const plano = await planoService.getById(req.params.id_aluno);
    if (!plano) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }

    let params = req.body
    params.id = req.params.id
    await pagamentoService.putPagamento(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const patchPagamento = async (req, res, next) => {
  try {
    const aluno = await alunoService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    const plano = await planoService.getById(req.params.id_aluno);
    if (!plano) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }
    
    let params = req.body
    params.id = req.params.id
    await pagamentoService.patchPagamento(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

module.exports.getPagamento = getPagamento
module.exports.postPagamento = postPagamento
module.exports.deletePagamento = deletePagamento
module.exports.putPagamento = putPagamento
module.exports.patchPagamento = patchPagamento