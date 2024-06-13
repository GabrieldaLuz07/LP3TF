const modalidadeController = require('../controllers/modalidade');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/modalidade', authMiddleware, modalidadeController.getModalidade
  /*
    #swagger.tags = ["Modalidade"]
    #swagger.summary = "Obter todas as modalidades"
    #swagger.description = "Endpoint para obter a lista de todas as modalidades."
    #swagger.responses[200] = {
      description: "Lista de modalidades obtida com sucesso.",
      schema: [{
        id_modalidade: 1,
        nome: "Yoga",
        descricao: "Aulas de Yoga para iniciantes",
        hora_inicio: "08:00",
        hora_fim: "09:00",
        capacidademaxima: 20,
        diassemana: "Segunda, Quarta, Sexta"
      }]
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.post('/modalidade', authMiddleware, modalidadeController.postModalidade
  /*
    #swagger.tags = ["Modalidade"]
    #swagger.summary = "Adicionar uma nova modalidade"
    #swagger.description = "Endpoint para adicionar uma nova modalidade."
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados da nova modalidade a ser inserida',
      required: true,
      type: 'object',
      schema: {
        nome: "Yoga",
        descricao: "Aulas de Yoga para iniciantes",
        hora_inicio: "08:00",
        hora_fim: "09:00",
        capacidademaxima: 20,
        diassemana: "Segunda, Quarta, Sexta"
      }
    }
    #swagger.responses[201] = {
      description: "Modalidade criada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.delete('/modalidade/:id_modalidade', authMiddleware, modalidadeController.deleteModalidade
  /*
    #swagger.tags = ["Modalidade"]
    #swagger.summary = "Deletar uma modalidade"
    #swagger.description = "Endpoint para deletar uma modalidade existente."
    #swagger.parameters['id_modalidade'] = {
      in: 'path',
      description: 'ID da modalidade a ser deletada',
      required: true,
      type: 'integer'
    }
    #swagger.responses[200] = {
      description: "Modalidade deletada com sucesso."
    }
    #swagger.responses[404] = {
      description: "Modalidade não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.put('/modalidade/:id_modalidade', authMiddleware, modalidadeController.putModalidade
  /*
    #swagger.tags = ["Modalidade"]
    #swagger.summary = "Atualizar uma modalidade"
    #swagger.description = "Endpoint para atualizar as informações de uma modalidade existente."
    #swagger.parameters['id_modalidade'] = {
      in: 'path',
      description: 'ID da modalidade a ser atualizada',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados atualizados da modalidade',
      required: true,
      type: 'object',
      schema: {
        nome: "Yoga",
        descricao: "Aulas de Yoga para iniciantes",
        hora_inicio: "08:00",
        hora_fim: "09:00",
        capacidademaxima: 20,
        diassemana: "Segunda, Quarta, Sexta"
      }
    }
    #swagger.responses[200] = {
      description: "Modalidade atualizada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Modalidade não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.patch('/modalidade/:id_modalidade', authMiddleware, modalidadeController.patchModalidade
  /*
    #swagger.tags = ["Modalidade"]
    #swagger.summary = "Atualização parcial de uma modalidade"
    #swagger.description = "Endpoint para atualização parcial das informações de uma modalidade existente."
    #swagger.parameters['id_modalidade'] = {
      in: 'path',
      description: 'ID da modalidade a ser atualizada',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados parciais atualizados da modalidade',
      required: true,
      type: 'object',
      schema: {
        nome: "Yoga",
        descricao: "Aulas de Yoga para iniciantes",
        hora_inicio: "08:00",
        hora_fim: "09:00",
        capacidademaxima: 20,
        diassemana: "Segunda, Quarta, Sexta"
      }
    }
    #swagger.responses[200] = {
      description: "Modalidade atualizada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Modalidade não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );
}