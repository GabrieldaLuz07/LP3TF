const alunoPlanoController = require('../controllers/aluno_plano');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/aluno_plano', authMiddleware, alunoPlanoController.getAluno_plano
  /*
    #swagger.tags = ["Aluno plano"]
    #swagger.summary = "Obter todas as associações do plano do aluno"
    #swagger.description = "Endpoint para obter a lista de todas as associações do plano do aluno."
    #swagger.responses[200] = {
      description: "Lista de associações do plano do aluno obtida com sucesso.",
      schema: [{
        id_aluno_plano: 1,
        id_aluno: 1,
        id_plano: 1,
        data_inicio: "2024-01-01",
        data_fim: "2024-12-31",
        observacao: "Nenhuma"
      }]
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.post('/aluno_plano', authMiddleware, alunoPlanoController.postAluno_plano
  /*
    #swagger.tags = ["Aluno plano"]
    #swagger.summary = "Adicionar uma nova associação do plano do aluno"
    #swagger.description = "Endpoint para adicionar uma nova associação do plano do aluno."
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados da nova associação do plano do aluno a ser inserida',
      required: true,
      type: 'object',
      schema: {
        id_aluno: 1,
        id_plano: 1,
        data_inicio: "2024-01-01",
        data_fim: "2024-12-31",
        observacao: "Nenhuma"
      }
    }
    #swagger.responses[201] = {
      description: "Associação do plano do aluno criada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.delete('/aluno_plano/:id_aluno_plano', authMiddleware, alunoPlanoController.deleteAluno_plano
  /*
    #swagger.tags = ["Aluno plano"]
    #swagger.summary = "Deletar uma associação do plano do aluno"
    #swagger.description = "Endpoint para deletar uma associação do plano do aluno existente."
    #swagger.parameters['id_aluno_plano'] = {
      in: 'path',
      description: 'ID da associação do plano do aluno a ser deletada',
      required: true,
      type: 'integer'
    }
    #swagger.responses[200] = {
      description: "Associação do plano do aluno deletada com sucesso."
    }
    #swagger.responses[404] = {
      description: "Associação do plano do aluno não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.put('/aluno_plano/:id_aluno_plano', authMiddleware, alunoPlanoController.putAluno_plano
  /*
    #swagger.tags = ["Aluno plano"]
    #swagger.summary = "Atualizar uma associação do plano do aluno"
    #swagger.description = "Endpoint para atualizar as informações de uma associação do plano do aluno existente."
    #swagger.parameters['id_aluno_plano'] = {
      in: 'path',
      description: 'ID da associação do plano do aluno a ser atualizada',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados atualizados da associação do plano do aluno',
      required: true,
      type: 'object',
      schema: {
        id_aluno: 1,
        id_plano: 1,
        data_inicio: "2024-01-01",
        data_fim: "2024-12-31",
        observacao: "Atualizada"
      }
    }
    #swagger.responses[200] = {
      description: "Associação do plano do aluno atualizada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Associação do plano do aluno não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.patch('/aluno_plano/:id_aluno_plano', authMiddleware, alunoPlanoController.patchAluno_plano
  /*
    #swagger.tags = ["Aluno plano"]
    #swagger.summary = "Atualização parcial de uma associação do plano do aluno"
    #swagger.description = "Endpoint para atualização parcial das informações de uma associação do plano do aluno existente."
    #swagger.parameters['id_aluno_plano'] = {
      in: 'path',
      description: 'ID da associação do plano do aluno a ser atualizada',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados parciais atualizados da associação do plano do aluno',
      required: true,
      type: 'object',
      schema: {
        id_aluno: 1,
        id_plano: 1,
        data_inicio: "2024-01-01",
        data_fim: "2024-12-31",
        observacao: "Parcialmente atualizada"
      }
    }
    #swagger.responses[200] = {
      description: "Associação do plano do aluno atualizada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Associação do plano do aluno não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );
}