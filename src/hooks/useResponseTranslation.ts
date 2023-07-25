const useResponseTranslation = () => {
  const translateError = (code: number) => {
    switch (code) {
      case 400:
        return 'Bad Request'
      case 401:
        return 'Credenciais incorretas'
      case 403:
        return 'Forbidden'
      case 404:
        return 'Not Found'
      case 500:
        return 'Erro interno'
      default:
        return 'Erro desconhecido'
    }
  }

  const traslateSuccess = (code: number) => {
    switch (code) {
      case 200:
        return 'Alteração realizada com sucesso'
      case 201:
        return 'Criação realizada com sucesso'
      case 204:
        return 'Sucesso'
      default:
        return 'Unknown Success'
    }
  }
  return { translateError, traslateSuccess }
}

export default useResponseTranslation
