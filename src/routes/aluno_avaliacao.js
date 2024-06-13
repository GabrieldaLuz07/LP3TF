const aluno_avaliacaoController = require('../controllers/aluno_avaliacao');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/aluno_avaliacao', authMiddleware, aluno_avaliacaoController.getAluno_avaliacao
  /*
    #swagger.tags = ["Aluno Avaliacao"]
    #swagger.summary = "Obter todas as avaliações de alunos"
    #swagger.description = "Endpoint para obter a lista de todas as avaliações dos alunos."
    #swagger.responses[200] = {
      description: "Lista de avaliações obtida com sucesso.",
      schema: [{
        id_avaliacao: 1,
        data_avaliacao: "2023-05-01",
        altura: 1.75,
        peso: 70.5,
        ombros: 45.0,
        peitoral: 90.0,
        abdomen: 80.0,
        quadril: 95.0,
        bracos: 30.0,
        pernas: 50.0,
        id_aluno: 1,
        id_personal: 1
      }]
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.post('/aluno_avaliacao', authMiddleware, aluno_avaliacaoController.postAluno_avaliacao
  /*
    #swagger.tags = ["Aluno Avaliacao"]
    #swagger.summary = "Adicionar uma nova avaliação de aluno"
    #swagger.description = "Endpoint para adicionar uma nova avaliação de um aluno."
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados da nova avaliação a ser inserida',
      required: true,
      type: 'object',
      schema: {
        data_avaliacao: "2023-05-01",
        altura: 1.75,
        peso: 70.5,
        ombros: 45.0,
        peitoral: 90.0,
        abdomen: 80.0,
        quadril: 95.0,
        bracos: 30.0,
        pernas: 50.0,
        id_aluno: 1,
        id_personal: 1
      }
    }
    #swagger.responses[201] = {
      description: "Avaliação criada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.delete('/aluno_avaliacao/:id_aluno_avaliacao', authMiddleware, aluno_avaliacaoController.deleteAluno_avaliacao
  /*
    #swagger.tags = ["Aluno Avaliacao"]
    #swagger.summary = "Deletar uma avaliação de aluno"
    #swagger.description = "Endpoint para deletar uma avaliação de aluno existente."
    #swagger.parameters['id_aluno_avaliacao'] = {
      in: 'path',
      description: 'ID da avaliação a ser deletada',
      required: true,
      type: 'integer'
    }
    #swagger.responses[200] = {
      description: "Avaliação deletada com sucesso."
    }
    #swagger.responses[404] = {
      description: "Avaliação não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.put('/aluno_avaliacao/:id_aluno_avaliacao', authMiddleware, aluno_avaliacaoController.putAluno_avaliacao
  /*
    #swagger.tags = ["Aluno Avaliacao"]
    #swagger.summary = "Atualizar uma avaliação de aluno"
    #swagger.description = "Endpoint para atualizar as informações de uma avaliação de aluno existente."
    #swagger.parameters['id_aluno_avaliacao'] = {
      in: 'path',
      description: 'ID da avaliação a ser atualizada',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados atualizados da avaliação',
      required: true,
      type: 'object',
      schema: {
        data_avaliacao: "2023-05-01",
        altura: 1.75,
        peso: 70.5,
        ombros: 45.0,
        peitoral: 90.0,
        abdomen: 80.0,
        quadril: 95.0,
        bracos: 30.0,
        pernas: 50.0,
        id_aluno: 1,
        id_personal: 1
      }
    }
    #swagger.responses[200] = {
      description: "Avaliação atualizada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Avaliação não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.patch('/aluno_avaliacao/:id_aluno_avaliacao', authMiddleware, aluno_avaliacaoController.patchAluno_avaliacao
  /*
    #swagger.tags = ["Aluno Avaliacao"]
    #swagger.summary = "Atualização parcial de uma avaliação de aluno"
    #swagger.description = "Endpoint para atualização parcial das informações de uma avaliação de aluno existente."
    #swagger.parameters['id_aluno_avaliacao'] = {
      in: 'path',
      description: 'ID da avaliação a ser atualizada',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados parciais atualizados da avaliação',
      required: true,
      type: 'object',
      schema: {
        data_avaliacao: "2023-05-01",
        altura: 1.75,
        peso: 70.5,
        ombros: 45.0,
        peitoral: 90.0,
        abdomen: 80.0,
        quadril: 95.0,
        bracos: 30.0,
        pernas: 50.0,
        id_aluno: 1,
        id_personal: 1
      }
    }
    #swagger.responses[200] = {
      description: "Avaliação atualizada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Avaliação não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );
}