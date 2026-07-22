---
title: 'Construindo meu Homelab: o melhor laboratório de tecnologia que já tive'
description: 'Como transformei um notebook antigo em um ambiente self-hosted com Docker, WireGuard, Nextcloud, Jellyfin, Pi-hole e IA local para estudar infraestrutura, segurança e DevOps.'
pubDate: 'Jul 22 2026'
heroImage: '../../assets/homelab.png'
---

Quando comecei minha carreira em TI, sempre ouvi que a melhor forma de aprender era colocando a mão na massa. Depois de muitos anos trabalhando com suporte, implantação de sistemas e Identity and Access Management (IAM), decidi montar algo que me permitisse testar tecnologias sem depender de ambientes corporativos.

Foi assim que nasceu meu **Homelab**.

Mais do que um simples servidor dentro de casa, ele se tornou meu ambiente de estudos, laboratório de testes e plataforma para experimentar novas soluções antes de utilizá-las em projetos profissionais.

## O que é um Homelab?

Um Homelab é um ambiente de infraestrutura montado em casa para aprender, testar e hospedar serviços.

Ele pode ser construído utilizando um computador antigo, um mini PC, um Raspberry Pi ou até mesmo um servidor dedicado. O objetivo não é possuir um equipamento extremamente poderoso, mas criar um ambiente onde seja possível experimentar tecnologias reais.

No meu caso, reutilizei um notebook antigo que já não era utilizado no dia a dia. Mesmo sendo um equipamento bastante simples, ele ainda possui capacidade suficiente para hospedar diversos serviços simultaneamente.

## Meu hardware

Meu servidor é um Notebook HP bem velho equipado com:

- Intel Celeron N2830 (2 núcleos)
- 4 GB de memória RAM
- HD de 500 GB
- Ubuntu Server 24.04 LTS

É um hardware bastante modesto, mas mostrou que é possível aprender muito sem investir uma fortuna.

## Toda a infraestrutura roda em Docker

Desde o início defini que praticamente todos os serviços seriam executados em containers Docker.

Essa escolha trouxe diversas vantagens:

- isolamento entre aplicações;
- facilidade para atualizar serviços;
- backups simplificados;
- maior organização dos projetos;
- possibilidade de reconstruir todo o ambiente rapidamente utilizando apenas arquivos Docker Compose.

Hoje cada aplicação possui seu próprio diretório, contendo seu respectivo `docker-compose.yml`, facilitando bastante a manutenção.

## Os serviços que utilizo

Atualmente meu Homelab possui alguns serviços que utilizo periodicamente.

### 🔐 WireGuard

O primeiro serviço que configurei foi uma VPN utilizando WireGuard.

Agora consigo acessar minha rede doméstica de qualquer lugar com segurança, sem precisar expor aplicações diretamente para a internet.

Além disso, o WireGuard serviu como excelente oportunidade para aprender sobre:

- VPNs;
- roteamento;
- NAT;
- DNS Dinâmico;
- encaminhamento de portas no roteador.

## 🌐 Pi-hole

Em seguida configurei o Pi-hole.

Ele funciona como um servidor DNS para toda minha rede e bloqueia anúncios, rastreadores e diversos domínios maliciosos antes mesmo que eles sejam acessados pelos dispositivos.

Além da melhoria na privacidade, foi uma ótima forma de entender melhor como funciona a resolução de nomes na internet.

## ☁️ Nextcloud

Queria uma alternativa aos serviços tradicionais de armazenamento em nuvem.

Com o Nextcloud passei a ter meu próprio ambiente para:

- sincronização de arquivos;
- compartilhamento de documentos;
- calendário;
- contatos;
- produtividade pessoal.

Tudo hospedado no meu próprio servidor.

## 🎬 Jellyfin

Outro serviço indispensável foi o Jellyfin.

Ele organiza automaticamente filmes, séries e músicas, criando uma biblioteca semelhante às plataformas de streaming.

Durante sua configuração aprendi bastante sobre:

- mapeamento de volumes no Docker;
- permissões de arquivos no Linux;
- organização de armazenamento.

Curiosamente, um dos problemas que enfrentei foi causado por algo simples: eu havia configurado os caminhos das mídias pensando na minha máquina local, quando na verdade precisava utilizar os diretórios existentes dentro do servidor.

Pequenos detalhes como esse acabam ensinando muito sobre como containers enxergam o sistema de arquivos.

## 🤖 Open WebUI + IA Local

Um dos projetos mais interessantes foi instalar uma interface para executar modelos de linguagem localmente.

Embora meu hardware seja bastante limitado para modelos maiores, consegui experimentar LLMs leves utilizando Ollama e Open WebUI.

Isso abriu portas para estudar:

- Inteligência Artificial local;
- privacidade de dados;
- integração entre aplicações;
- automações futuras.

## O que aprendi durante esse projeto?

Muito além de instalar aplicações, esse projeto acabou fortalecendo conhecimentos que utilizo diariamente no trabalho.

Entre eles:

- Docker e Docker Compose;
- Linux Server;
- SSH;
- gerenciamento de usuários e permissões;
- redes;
- DNS;
- VPN;
- containers;
- segurança;
- troubleshooting.

Também passei a enxergar melhor como diferentes tecnologias se conectam para formar uma infraestrutura completa.

É aquele tipo de aprendizado que dificilmente acontece apenas assistindo vídeos ou lendo documentação.

## Próximos passos

Meu Homelab ainda está longe de ser considerado "pronto". Na verdade, acredito que ele nunca ficará.

Os próximos projetos incluem:

- Reverse Proxy com Nginx Proxy Manager;
- HTTPS utilizando Let's Encrypt;
- Autenticação centralizada (Keycloak ou Authentik);
- Monitoramento com Grafana e Prometheus;
- Backups automatizados;
- Observabilidade;
- CI/CD para aplicações pessoais;
- Mais experimentos envolvendo IA local.

## Vale a pena montar um Homelab?

Na minha opinião, sim.

Mesmo utilizando um hardware antigo, consegui criar um ambiente extremamente útil para estudar tecnologias modernas, testar aplicações e desenvolver habilidades que fazem diferença no mercado de trabalho.

Se você trabalha com infraestrutura, segurança, DevOps, Cloud, desenvolvimento ou IAM, montar um Homelab talvez seja um dos investimentos com melhor custo-benefício que você pode fazer.

No final, você não aprende apenas a instalar ferramentas. Aprende como elas realmente funcionam quando precisam conversar entre si.

E essa experiência prática vale muito.