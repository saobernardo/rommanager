const helpers = {
    permissao: (value) => {
    
      if(value == 'S')
        return true
      else
        return false
    },
    permissao_phone: (telefone, whatsapp) => {
      if(telefone == 'S' || whatsapp == 'S')
        return true
      else
        return false
    },
    vazio: (value) => {
      if(value == null || value == '')
        return false
      else
        return true
    },
    foto_youtube: value => {
      if(value == 'F')
        return true
      else
       return false
    },
    h_message: (value) => {
      console.log(value)
      if(value == 1)
        return true
      else
        return false
    }
  }
  
  module.exports = helpers