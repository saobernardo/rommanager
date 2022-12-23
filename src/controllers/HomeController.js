class HomeController{
  main(request, response){
    response.render('example', {});
    //return response.json({msg: 'teste'})
  }
}

module.exports = new HomeController();