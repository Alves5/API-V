export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500
};

export const RESPONSE = {
    SUCCESS: 'Sucesso',
    WARNING: 'Aviso',
    ERROR: 'Erro'
}

export const MESSAGES = {
    FIND: 'Registros encontrados com sucesso.',
    FIND_NO_EXISTS: 'Nenhum registro encontrado.',
    CREATED: 'Registro criado com sucesso.',
    CREATED_EXISTS: 'O registro já existe.',
    UPDATED: 'Registro atualizado com sucesso.',
    UPDATED_NO_UPDATED: 'Registro não atualizado.',
    DELETE: 'Registro deletado com sucesso.',
    DELETE_NO_DELETE: 'Registro não existe ou não deletado.',
    ERROR_SERVIDOR: 'Erro interno no servidor.',
    ERROR_JSON: 'JSON não é compatível com o modelo de dados.',
    ERROR_NO_BODY: 'O corpo da requisição não foi enviado. Certifique-se de incluir os dados necessários no corpo da sua requisição antes de tentar novamente.'
}