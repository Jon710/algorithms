class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`I'm ${this.name}. I'm a ${this.type}`);
  }
}

const joao = new Player("joao", "jogador");
const moraes = new Player("moraes", "engenheiro");

joao.introduce();
moraes.introduce();
