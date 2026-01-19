<h1 align="center">DevWeather ⛅</h1>

<h3 align="center">Previsão do Tempo Inteligente Para Mobile</h3>

<br>

<p align="center">
  <a href="#art-sobre-o-projeto">Sobre o Projeto</a> | 
  <a href="#computer-tecnologias-usadas">Tecnologias Usadas</a> | 
  <a href="#package-como-rodar-o-projeto-localmente">Como Rodar</a>
</p>

<img src="https://res.cloudinary.com/dtgimo0rh/image/upload/celular-computador-imagem_2_ggmt6u.png" alt="Imagem representativa do app"/>

<br>

# :art: Sobre o Projeto

O **DevWeather** é um aplicativo mobile moderno desenvolvido com **React Native** e **Expo** que oferece previsão do tempo em tempo real para qualquer lugar do mundo. O foco do projeto foi criar uma experiência de usuário fluida, combinando performance com um visual agradável.

O grande diferencial é sua **Interface Adaptativa**: o aplicativo muda suas cores e gradientes dinamicamente de acordo com a temperatura da cidade visualizada (tons de azul para frio, turquesa para clima ameno e laranja/vermelho para calor), proporcionando uma imersão visual imediata.

<br>

## ✨ Features Principais

* **Busca Global:** Pesquise o clima de qualquer cidade do mundo consumindo a API da OpenWeatherMap.
* **Geolocalização (GPS):** Recurso "Usar minha localização" que detecta automaticamente onde o usuário está para entregar a previsão local.
* **Dados Detalhados:** Exibição de temperatura atual, sensação térmica, umidade e velocidade do vento.
* **Tratamento de Erros:** Feedbacks visuais amigáveis para cidades não encontradas ou falhas de conexão.
* **Alta Performance:** Código otimizado e formatado utilizando Biome.

# :computer: Tecnologias Usadas

### Core & Interface
* **React Native** (0.81)
* **Expo** (SDK 54)
* **TypeScript** (Tipagem Estática)
* **Expo Router** (Roteamento baseado em arquivos - v6)
* **React Native Reanimated** (Animações fluídas)

### Dados & Ferramentas
* **Axios** (Requisições HTTP)
* **Expo Location** (Acesso ao GPS do dispositivo)
* **OpenWeatherMap API** (Fonte de dados meteorológicos)
* **Biome** (Linter e Formatter de alta performance - substituto do ESLint/Prettier)

# :package: Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o aplicativo no seu simulador ou dispositivo físico.

1.  **Clone o repositório:**
    ```sh
    git clone [https://github.com/EltonVitorettiJr/DevWeather.git](https://github.com/EltonVitorettiJr/DevWeather.git)
    cd DevWeather
    ```

2.  **Instale as dependências:**
    ```sh
    npm install
    # ou se preferir
    yarn install
    ```

3.  **Configuração da API Key:**
    Crie um arquivo `.env` na raiz do projeto (baseado nas chaves da OpenWeatherMap) e adicione:
    
    ```env
    EXPO_PUBLIC_OPENWEATHER_API_KEY=sua_chave_da_api_aqui
    EXPO_PUBLIC_BASE_URL=[https://api.openweathermap.org/data/2.5](https://api.openweathermap.org/data/2.5)
    ```

4.  **Rodando o App:**
    ```sh
    npx expo start
    ```
    * Pressione `a` para abrir no Emulador Android.
    * Pressione `i` para abrir no Simulador iOS.
    * Ou escaneie o QR Code com o app **Expo Go** no seu celular físico.

## 📦 Estrutura de Pastas (Expo Router)

O projeto utiliza a estrutura moderna do Expo Router:

* `app/`: Contém as rotas e telas (`index.tsx`, `details.tsx`, `_layout.tsx`).
* `src/components/`: Componentes reutilizáveis (WeatherCard, SearchBar).
* `src/services/`: Lógica de chamadas à API (`weatherService.ts`).
* `src/hooks/`: Custom Hooks (`useLocation.ts`).
* `src/styles/`: Arquivos de estilização e temas (`colors.ts`).

# :bug: Problemas

Sinta-se à vontade para registrar problemas caso encontre bugs ou tenha sugestões de melhoria!

<p align="center"> Feito com 💜 por <strong>Elton Vitoretti Jr</strong>.

Entre em contato: <a href="https://www.linkedin.com/in/elton-vitoretti-jr">LinkedIn</a> </p>
