const personal_modalidadeController = require('../controllers/personal_modalidade');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/personal_modalidade', authMiddleware, personal_modalidadeController.getPersonal_modalidade
  /*
    #swagger.tags = ["Personal Modalidade"]
    #swagger.summary = "Obter todas as associações entre personal e modalidade"
    #swagger.description = "Endpoint para obter a lista de todas as associações entre personal e modalidade."
    #swagger.responses[200] = {
      description: "Lista de associações obtida com sucesso.",
      schema: [{
        id_personal_modalidade: 1,
        id_personal: 1,
        id_modalidade: 1,
        hora_entrada: "08:00",
        hora_saida: "10:00",
        id_status: 1
      }]
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.post('/personal_modalidade', authMiddleware, personal_modalidadeController.postPersonal_modalidade
  /*
    #swagger.tags = ["Personal Modalidade"]
    #swagger.summary = "Adicionar uma nova associação entre personal e modalidade"
    #swagger.description = "Endpoint para adicionar uma nova associação entre personal e modalidade."
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados da nova associação a ser inserida',
      required: true,
      type: 'object',
      schema: {
        id_personal: 1,
        id_modalidade: 1,
        hora_entrada: "08:00",
        hora_saida: "10:00",
        id_status: 1
      }
    }
    #swagger.responses[201] = {
      description: "Associação criada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.delete('/personal_modalidade/:id_personal_modalidade', authMiddleware, personal_modalidadeController.deletePersonal_modalidade
  /*
    #swagger.tags = ["Personal Modalidade"]
    #swagger.summary = "Deletar uma associação entre personal e modalidade"
    #swagger.description = "Endpoint para deletar uma associação existente entre personal e modalidade."
    #swagger.parameters['id_personal_modalidade'] = {
      in: 'path',
      description: 'ID da associação a ser deletada',
      required: true,
      type: 'integer'
    }
    #swagger.responses[200] = {
      description: "Associação deletada com sucesso."
    }
    #swagger.responses[404] = {
      description: "Associação não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.put('/personal_modalidade/:id_personal_modalidade', authMiddleware, personal_modalidadeController.putPersonal_modalidade
  /*
    #swagger.tags = ["Personal Modalidade"]
    #swagger.summary = "Atualizar uma associação entre personal e modalidade"
    #swagger.description = "Endpoint para atualizar as informações de uma associação existente entre personal e modalidade."
    #swagger.parameters['id_personal_modalidade'] = {
      in: 'path',
      description: 'ID da associação a ser atualizada',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados atualizados da associação',
      required: true,
      type: 'object',
      schema: {
        id_personal: 1,
        id_modalidade: 1,
        hora_entrada: "08:00",
        hora_saida: "10:00",
        id_status: 1
      }
    }
    #swagger.responses[200] = {
      description: "Associação atualizada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Associação não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.patch('/personal_modalidade/:id_personal_modalidade', authMiddleware, personal_modalidadeController.patchPersonal_modalidade
  /*
    #swagger.tags = ["Personal Modalidade"]
    #swagger.summary = "Atualização parcial de uma associação entre personal e modalidade"
    #swagger.description = "Endpoint para atualização parcial das informações de uma associação existente entre personal e modalidade."
    #swagger.parameters['id_personal_modalidade'] = {
      in: 'path',
      description: 'ID da associação a ser atualizada',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados parciais atualizados da associação',
      required: true,
      type: 'object',
      schema: {
        id_personal: 1,
        id_modalidade: 1,
        hora_entrada: "08:00",
        hora_saida: "10:00",
        id_status: 1
      }
    }
    #swagger.responses[200] = {
      description: "Associação atualizada com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Associação não encontrada."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );
}