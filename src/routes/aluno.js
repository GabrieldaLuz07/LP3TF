const alunoController = require('../controllers/aluno');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/aluno', authMiddleware, alunoController.getAluno
  /*
    #swagger.tags = ["Aluno"]
    #swagger.summary = "Obter todos os alunos"
    #swagger.description = "Endpoint para obter a lista de todos os alunos."
    #swagger.responses[200] = {
      description: "Lista de alunos obtida com sucesso.",
      schema: [{
        id: 1,
        nome: "João Silva",
        cpf: "123.456.789-00",
        nascimento: "2000-01-01",
        sexo: "Masculino",
        endereco: "Rua A, 123",
        telefone: "1234-5678"
      }]
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.post('/aluno', authMiddleware, alunoController.postAluno
  /*
    #swagger.tags = ["Aluno"]
    #swagger.summary = "Adicionar um novo aluno"
    #swagger.description = "Endpoint para adicionar um novo aluno."
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados do novo aluno a ser inserido',
      required: true,
      type: 'object',
      schema: {
        nome: "João Gabriel",
        cpf: "123.456.789-00",
        nascimento: "2000-01-01",
        sexo: "M",
        endereco: "Rua B, 456",
        telefone: "9876-5432"
      }
    }
    #swagger.responses[201] = {
      description: "Aluno criado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.delete('/aluno/:id_aluno', authMiddleware, alunoController.deleteAluno
  /*
    #swagger.tags = ["Aluno"]
    #swagger.summary = "Deletar um aluno"
    #swagger.description = "Endpoint para deletar um aluno existente."
    #swagger.parameters['id_aluno'] = {
      in: 'path',
      description: 'ID do aluno a ser deletado',
      required: true,
      type: 'integer'
    }
    #swagger.responses[200] = {
      description: "Aluno deletado com sucesso."
    }
    #swagger.responses[404] = {
      description: "Aluno não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.put('/aluno/:id_aluno', authMiddleware, alunoController.putAluno
  /*
    #swagger.tags = ["Aluno"]
    #swagger.summary = "Atualizar um aluno"
    #swagger.description = "Endpoint para atualizar as informações de um aluno existente."
    #swagger.parameters['id_aluno'] = {
      in: 'path',
      description: 'ID do aluno a ser atualizado',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados atualizados do aluno',
      required: true,
      type: 'object',
      schema: {
        nome: "Cypher",
        cpf: "123.456.789-00",
        nascimento: "2000-01-01",
        sexo: "Masculino",
        endereco: "Rua B, 456",
        telefone: "9876-5432"
      }
    }
    #swagger.responses[200] = {
      description: "Aluno atualizado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Aluno não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );

  app.patch('/aluno/:id_aluno', authMiddleware, alunoController.patchAluno
  /*
    #swagger.tags = ["Aluno"]
    #swagger.summary = "Atualização parcial de um aluno"
    #swagger.description = "Endpoint para atualização parcial das informações de um aluno existente."
    #swagger.parameters['id_aluno'] = {
      in: 'path',
      description: 'ID do aluno a ser atualizado',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Dados parciais atualizados do aluno',
      required: true,
      type: 'object',
      schema: {
        nome: "Cypher",
        cpf: "123.456.789-00",
        nascimento: "2000-01-01",
        sexo: "Masculino",
        endereco: "Rua B, 456",
        telefone: "9876-5432"
      }
    }
    #swagger.responses[200] = {
      description: "Aluno atualizado com sucesso."
    }
    #swagger.responses[400] = {
      description: "Dados inválidos."
    }
    #swagger.responses[404] = {
      description: "Aluno não encontrado."
    }
    #swagger.responses[500] = {
      description: "Erro interno do servidor."
    }
  */
  );
}