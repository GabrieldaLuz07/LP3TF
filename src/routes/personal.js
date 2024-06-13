const personalController = require('../controllers/personal');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/personal', authMiddleware, personalController.getPersonal
  /*
    #swagger.tags = ["Personal"]
    #swagger.summary = "Obter todos os personal trainers"
    #swagger.description = "Endpoint para obter a lista de todos os personal trainers."
    #swagger.responses[200] = {
      description: "Lista de personal trainers obtida com sucesso.",
      schema: [{
        id_personal: 1,
        nome: "João Silva",
        cpf: "123.456.789-10",
        telefone: "11999999999",
        sexo: "M",
        nascimento: "1980-01-01",
        cref: 12345
      }]
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.post('/personal', authMiddleware, personalController.postPersonal
  /*
    #swagger.tags = ["Personal"]
    #swagger.summary = "Adicionar um novo personal trainer"
    #swagger.description = "Endpoint para adicionar um novo personal trainer."
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados do novo personal trainer a ser inserido',
      required: true,
      type: 'object',
      schema: {
        nome: "João Silva",
        cpf: "123.456.789-10",
        telefone: "11999999999",
        sexo: "M",
        nascimento: "1980-01-01",
        cref: 12345
      }
    }
    #swagger.responses[201] = {
      description: "Personal trainer criado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.delete('/personal/:id_personal', authMiddleware, personalController.deletePersonal
  /*
    #swagger.tags = ["Personal"]
    #swagger.summary = "Deletar um personal trainer"
    #swagger.description = "Endpoint para deletar um personal trainer existente."
    #swagger.parameters['id_personal'] = {
      in: 'path',
      description: 'ID do personal trainer a ser deletado',
      required: true,
      type: 'integer'
    }
    #swagger.responses[200] = {
      description: "Personal trainer deletado com sucesso."
    }
    #swagger.responses[404] = {
      description: "Personal trainer não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.put('/personal/:id_personal', authMiddleware, personalController.putPersonal
  /*
    #swagger.tags = ["Personal"]
    #swagger.summary = "Atualizar um personal trainer"
    #swagger.description = "Endpoint para atualizar as informações de um personal trainer existente."
    #swagger.parameters['id_personal'] = {
      in: 'path',
      description: 'ID do personal trainer a ser atualizado',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados atualizados do personal trainer',
      required: true,
      type: 'object',
      schema: {
        nome: "João Silva",
        cpf: "123.456.789-10",
        telefone: "11999999999",
        sexo: "M",
        nascimento: "1980-01-01",
        cref: 12345
      }
    }
    #swagger.responses[200] = {
      description: "Personal trainer atualizado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Personal trainer não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.patch('/personal/:id_personal', authMiddleware, personalController.patchPersonal
  /*
    #swagger.tags = ["Personal"]
    #swagger.summary = "Atualização parcial de um personal trainer"
    #swagger.description = "Endpoint para atualização parcial das informações de um personal trainer existente."
    #swagger.parameters['id_personal'] = {
      in: 'path',
      description: 'ID do personal trainer a ser atualizado',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados parciais atualizados do personal trainer',
      required: true,
      type: 'object',
      schema: {
        nome: "João Silva",
        cpf: "123.456.789-10",
        telefone: "11999999999",
        sexo: "M",
        nascimento: "1980-01-01",
        cref: 12345
      }
    }
    #swagger.responses[200] = {
      description: "Personal trainer atualizado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Personal trainer não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );
}