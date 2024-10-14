function powerpuffGirls (name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.leader = false
    this.displayInfo = function () {
        console.log(`
            Name: ${name}
            Color: ${color}
            Superpower: ${superpower}
            ${this.leader ? 'Leader: Yes' : 'Leader: No'}
            `)
    }

    this.isLeader = function () {
        this.leader = true
        console.log(`The new leader is ${name} !!`)
    }
}

const blossom = new powerpuffGirls('Blossom', 'Pink', 'Invisibility');
const buttercup = new powerpuffGirls('Buttercup', 'Green', 'Invisibility');
const butterfly= new powerpuffGirls('Butterfly', 'Blue', 'Invisibility');

blossom.displayInfo()
buttercup.displayInfo()
butterfly.displayInfo()

buttercup.isLeader()

blossom.displayInfo()
buttercup.displayInfo()
butterfly.displayInfo()
