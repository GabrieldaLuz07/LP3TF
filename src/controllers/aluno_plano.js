const aluno_planoService = require('../services/aluno_plano');
const alunoService = require('../services/aluno');
const planoService = require('../services/plano');
const { validate } = require('../validates/aluno_plano');

const getAluno_plano = async (req, res, next) => {
  try {
    const retorno = await aluno_planoService.getAluno_plano()
    res.status(200).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const postAluno_plano = async (req, res, next) => {
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

    const retorno = await aluno_planoService.postAluno_plano(req.body)
    res.status(201).send(retorno)
  } catch (err) {
    res.status(500).send(err.message)
  }

}

const deleteAluno_plano = async (req, res, next) => {
  try {
    const aluno = await alunoService.getById(req.params.id_aluno);
    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    const plano = await planoService.getById(req.params.id_aluno);
    if (!plano) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }

    await aluno_planoService.deleteAluno_plano(req.params)
    .then(ret => res.status(204).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const putAluno_plano = async (req, res, next) => {
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
    await aluno_planoService.putAluno_plano(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

const patchAluno_plano = async (req, res, next) => {
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
    await aluno_planoService.patchAluno_plano(params)
    .then(ret => res.status(200).send(ret))
    .catch(err => res.status(500).send(err))
  } catch (err) {
    next(err);
  }
}

module.exports.getAluno_plano = getAluno_plano
module.exports.postAluno_plano = postAluno_plano
module.exports.deleteAluno_plano = deleteAluno_plano
module.exports.putAluno_plano = putAluno_plano
module.exports.patchAluno_plano = patchAluno_plano