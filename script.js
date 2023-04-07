// lista de piadas
const piadas = [
  "Por que a galinha atravessou a rua? Para chegar do outro lado!",
  "Qual é o fim da picada? O canhoto!",
  "O que é um pontinho amarelo na água? Um yellow submarine.",
  "Qual é o animal que tem o pescoço comprido e adivinha o futuro? A girafa-céga!",
  "Por que o jacaré tirou o jacarezinho da escola? Porque ele réptiu de ano!",
  "O que o pato falou para a pata? Vem quá!",
  "Por que a tartaruga atravessou a parede? Para chegar ao outro lado!",
  "Qual é a fruta que é vampira? Morango!",
  "O que é uma nuvem vestida de preto? Uma black-nuvem.",
  "Qual é o inseto que sabe sempre a hora certa? O mosqui-tique-taque."
];

// função para exibir piadas aleatórias
function novaPiada() {
  const piadaIndex = Math.floor(Math.random() * piadas.length);
  const piada = piadas[piadaIndex];
  document.getElementById("piadas").innerHTML = piada;
}
