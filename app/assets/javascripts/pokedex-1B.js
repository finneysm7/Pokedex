Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $el = $("<div class='detail'>").html("<img src='" + pokemon.get("image_url") + "'></img>");
  $el.append("<table>")
  _.each(pokemon.attributes, function (val, key) {
    $el.append("<tr><td>" + key + ":  </td><td>" + val + "</td></tr>");
  })
  $el.append("</table>")
  $el.append("<ul>");
  var that = pokemon;
  var xthat = this
  pokemon.fetch({
    success: function() {
      _.each(that.toys().models, function(toy) { xthat.addToyToList(toy); })
    }
  })
  $el.append("</ul>");
  this.$pokeDetail.html($el);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {

  var pokeId = event.target.dataset['pokeId'];
  this.renderPokemonDetail(this.pokes.get(pokeId));
};
