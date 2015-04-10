MVC.Alert.Controller = function(model, views) {
  this.model = model;
  this.views = views;

  this.initialize = function() {
    this.listenButtonClick()
  }

  this.listenButtonClick = function() {
    $('#do-shit').click(function() {
      var response = this.model.makeAjaxCall()
      this.views.renderThisFuckingMessage(response)
    }.bind(this))
  }
}
