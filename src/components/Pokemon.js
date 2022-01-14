class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name[0].toUpperCase() + data.name.slice(1)
        this.sprite = data.sprites.other.home.front_default
        this.type = data.types[0].type.name.toUpperCase(0)
        this.height = (data.height / 3.9).toFixed(2)
        this.weight = data.weight
        this.ability = data.abilities[0].ability.name
        this.icon = data.abilities[0].ability.url
        this.moves = data.moves[0].move.name
        this.stats = data.states.stat.name
    }
}

export default Pokemon