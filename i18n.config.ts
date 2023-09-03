const shared = {
  copyrightNotice: "© 2023 Auraz Marketing",
  founders: {
    gabi: {
      name: "Gabriela André",
      gravatarId: "99f9e9b11a8be74bbb04994a24ed17f2",
      linkedinId: "gabriela-andr%C3%A9",
    },
    julia: {
      name: "Júlia Goldman",
      gravatarId: "78672fab5733bfcf13c4120888db29a8",
      linkedinId: "juliafelippegoldman",
    },
    renato: {
      gravatarId: "cdffc1df22bce6b6a4a1776e2450474c",
      linkedinId: "renatocf",
      name: "Renato Cordeiro",
    },
  },
};

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    "pt-BR": {
      companyName: "Auraz",
      motto: "Trazendo Marketing de volta para as Pessoas",
      waitList: "Entre na nossa lista de espera!",
      copyrightNotice: shared.copyrightNotice,
      pages: {
        about: "Sobre",
      },
      profileImageAlt: "Imagem Perfil",
      founders: {
        gabi: {
          ...shared.founders.gabi,
          experience: "Ex Meta e Bytedance (Social Media)",
          education: "Bacharel Relações Internacionais",
        },
        julia: {
          ...shared.founders.julia,
          experience: "Ex ONU e Bytedance (Social Media)",
          education: "Bacharel Relações Internacionais e Marketing",
        },
        renato: {
          ...shared.founders.renato,
          experience: "Ex Elo7 (Principal ML Engineer)",
          education: "Doutorando Ciência da Computação",
        },
      },
      blog: {
        name: "Auraz Blog",
        publication: "Publicação",
        revision: "Revisão",
        tags: "Tags",
      },
    },
    "en-US": {
      companyName: "Auraz",
      blogName: "Auraz Blog",
      motto: "Bringing Marketing back to People",
      waitList: "Join our waitlist!",
      copyrightNotice: shared.copyrightNotice,
      pages: {
        about: "About",
      },
      profileImageAlt: "Profile Image",
      founders: {
        gabi: {
          ...shared.founders.gabi,
          experience: "Ex Meta and Bytedance (Social Media)",
          education: "BSc International Relations",
        },
        julia: {
          ...shared.founders.julia,
          experience: "Ex ONU and Bytedance (Social Media)",
          education: "BSc International Relations and Marketing",
        },
        renato: {
          ...shared.founders.renato,
          experience: "Ex Elo7 (Principal ML Engineer)",
          education: "PhD candidate in Computer Science",
        },
      },
      blog: {
        name: "Auraz Blog",
        publication: "Publication",
        revision: "Revision",
        tags: "Tags",
      },
    },
  },
}));
