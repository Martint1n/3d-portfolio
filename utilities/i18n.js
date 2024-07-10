import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      welcomeCub: "Welcome in my portfolio",
      projectsCube: "Check out my projects",
      contactCube: 'Do you want to contact me ?',
      changeColorCube: "Change the cube's color",
      github: 'My github',
      introduction: "Hello, my name is Martin, and I am a passionate fullstack developer. My professional and personal journey reflects a main quest marked by challenges and explorations.",
      introduction2: "Professionally, I decided to pivot towards web development, a field where I can express my creativity and solve problems.",
      introduction3: "I have also embarked on personal projects and freelance missions. On a personal level, I am equally driven by challenges. I have hiked the GR20 and am learning Japanese.",
      instruction: "waiting for cube's orders",
      projects: {
        renoskem: {
          introduction: "The RenoSkem project is a mobile application created with react native to help users in their future renovations.",
          linkGithubFront: "Frontend github link",
          linkGithubBack: "Backend github link",
          video: "Introduction video",
        },
        tournoi: {
          introduction: "This project is a website that shows points attributed to participants earned when they do certain actions on Instagram.",
          design : "Design smartphone only",
          websiteLink: "Website link",
          linkGithubFront: "Frontend github link",
          linkGithubBack: "Backend github link",
        },
        lunetoile: {
          introduction: "this project is a pre-order website for a 52 cards game. Each card is design by a tatto artist. Use of Stripe for online payment.",
          websiteLink: "The site is under construction",
          linkGithubFront: "Frontend github link",
          linkGithubBack: "Backend github link",

        },
        pokemonStore: {
          introduction: "This project is a pokémon products online store. Use of Stripe for online payment, use of Puppeteer to scrap data.",
          websiteLink: "The site is under construction",
          linkGithubFront: "Frontend github link",
          linkGithubBack: "Backend github link",
        }
      },
      contact: {
        name: 'name',
        email: 'email',
        message: 'message',
        writeMessage: "Write your message",
        send: "Send"
      },
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      welcomeCube: "Bienvenue dans mon portfolio",
      projectsCube: 'Jetez un oeil à mes projets',
      contactCube: 'Vous voulez me contacter ?',
      changeColorCube: "Changez la couleur du cube !",
      github: 'Mon github',
      introduction: "Bonjour, je m'appelle Martin, développeur fullstack passionné. Mon parcours professionnel et personnel est le reflet d'une quête principale marquée par les défis et explorations.",
      introduction2: "Professionnellement, j'ai pris la décision de me réorienter vers le développement web, un domaine où je peux exprimer ma créativité et résoudre des problèmes.",
      introduction3: "Je me suis également lancé dans des projets personnels et des missions en freelance. Sur le plan personnel, je suis tout autant avide de défis. J'ai parcouru le GR20, et j'apprends le japonais.",
      instruction: "En attente d'instruction du Cube.",
      projects: {
        renoskem: {
          introduction: "Le projet RenoSkem est une application mobile créée avec react native dédiée à l'accompagnement des utilisateurs dans leurs projets de rénovation.",
          linkGithubFront: "Lien github frontend",
          linkGithubBack: "Lien github backend",
          video: "Vidéo d'introduction",
        },
        tournoi: {
          introduction: "Ce projet est une site premettant l'affichage de points attribués aux participants dans le but de créer de l'activité sur Instagram.",
          design : "Design uniquement pour mobile",
          websiteLink: "Lien du site",
          linkGithubFront: "Lien github frontend",
          linkGithubBack: "Lien github backend",

        },
        lunetoile: {
          introduction: "Ce projet est une site de précommande d'un jeu de 52 cartes où chaque carte est illustrée par un artiste tatoueur différent utilisation de Stripe pour l'achat en ligne.",
          websiteLink: "Le site est en construction",
          linkGithubFront: "Lien github frontend",
          linkGithubBack: "Lien github backend",
        },
        pokemonStore: {
          introduction: "Ce projet est une site d'achat de produits Pokémon utilisation de Stripe l'achat en ligne utilisation de Puppeteer pour récupérer des données en ligne.",
          websiteLink: "Le site est en construction",
          linkGithubFront: "Lien github frontend",
          linkGithubBack: "Lien github backend",
        }
      },
      contact: {
        name: 'nom',
        email: 'email',
        message: 'message',
        writeMessage: "Ecrivez votre message",
        send: "Envoyer"
      },
    }
  },
  jp: {
    translation: {
      welcome: "ようこそ",
      welcomeCube: "ようこそ、私のポートフォリオへ",
      projectsCube: 'プロジェクトを見ますか',
      contactCube: "連絡したいですか",
      changeColorCube: '立方体の色は変わりましょか',
      github: '私のgithub',
      introduction: "こんにちわ, マーチンです。フルスタック開発者として情熱を持っています。職業的および個人的な旅は、挑戦と探求に満ちた中心的なメインクエストを反映しています。",
      introduction2: "職業的には、複雑な問題を解決し、創造性を発揮できるウェブ開発に方向転換することを決意しました。また、個人的なプロジェクトやフリーランスのミッションにも取り組んできました。",
      introduction3: "個人的なレベルでは、私は同様に挑戦に駆り立てられています。GR20をハイキングし、日本語を学んでいます。",
      instruction: "立方体からの指示待っています",
      projects: {
        renoskem: {
          introduction: "Le projet RenoSkem est une application mobile créée avec react native dédiée à l'accompagnement des utilisateurs dans leurs projets de rénovation.",
          linkGithubFront: "GitHubのフロントエンドのリンク",
          linkGithubBack: "GitHubのバックエンドのリンク",
          video: "ビデオの紹介",
        },
        tournoi: {
          introduction: "Ce projet est une site premettant l'affichage de points attribués aux participants dans le but de créer de l'activité sur Instagram",
          design : "スマホだけデザインです",
          websiteLink: "ウェブサイトのリンク",
          linkGithubFront: "GitHubのフロントエンドのリンク",
          linkGithubBack: "GitHubのバックエンドのリンク",

        },
        lunetoile: {
          introduction: "Ce projet est une site de précommande d'un jeu de 52 cartes où chaque carte est illustrée par un artiste tatoueur différent utilisation de Stripe pour l'achat en ligne",
          websiteLink: "ウェブサイトを建てています",
          linkGithubFront: "GitHubのフロントエンドのリンク",
          linkGithubBack: "GitHubのバックエンドのリンク",
        },
        pokemonStore: {
          introduction: "Ce projet est une site d'achat de produits Pokémon utilisation de Stripe l'achat en ligne utilisation de Puppeteer pour récupérer des données en ligne",
          websiteLink: "ウェブサイトを建てています",
          linkGithubFront: "GitHubのフロントエンドのリンク",
          linkGithubBack: "GitHubのバックエンドのリンク",
        }
      },
      contact: {
        name: '名前',
        email: 'メール',
        message: 'メッセージ',
        writeMessage: "メッセージを書いてください",
        send: "送信する"
      },
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;