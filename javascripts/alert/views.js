MVC.Alert.Views = function() {
  this.renderThisFuckingMessage = function(response) {
    $('span').text(response.message)
  }
}
