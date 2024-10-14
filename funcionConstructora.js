function ValorantPlayer(name, life, power, weapon) {
  this.name = name
  this.life = life
  this.power = power
  this.weapon = weapon
  this.game = function () {
    console.log(`Resultados de la partida:
      Tu personaje fue ${this.name}
      Tu vida total fue de ${this.life}
      Tu personaje tenia el poder de ${this.power}
      El arma que mas usaste en las rondas fue ${this.weapon}`)
  }
}

const jett = new ValorantPlayer('Jett', 300, 'Viento', 'Vandal')
const viper = ValorantPlayer('Viper', 100, 'Acido', 'Awp')

jett.game()
