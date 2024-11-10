// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Melbourne",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "zack",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "sites",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "spotify",
              url: "https://spotify.com",
              icon: "brand-spotify",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "working",
          links: [
            {
              name: "mail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "docs",
              url: "https://docs.google.com",
              icon: "file-type-doc",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "discord",
              url: "https://discord.com",
              icon: "brand-discord",
              icon_color: palette.green,
            },
            {
              name: "channel",
              url: "https://youtube.com/channel/zackolinko",
              icon: "brain",
              icon_color: palette.peach,
            },
            {
              name: "Brain.Blip",
              url: "https://youtube.com/channel/brain.bliper",
              icon: "lego",
              icon_color: palette.red,
            },
            {
              name: "catppuccin",
              url: "https://catppuccin.com",
              icon: "cat",
              icon_color: palette.blue,
            },
            {
              name: "amazon",
              url: "https://amazon.com.au",
              icon: "brand-amazon",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "media",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "sites",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.green,
            },
            {
              name: "battlenet",
              url: "https://battle.net",
              icon: "sword",
              icon_color: palette.peach,
            },
            {
              name: "roms",
              url: "https://vimm.net",
              icon: "device-gamepad",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "blogs",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber research",
              url: "https://eng.uber.com/category/articles",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "google research",
              url: "https://blog.research.google",
              icon: "hexagon-letter-g",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "random",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "things I use",
          links: [
            {
              name: "X",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.green,
            },
            {
              name: "spacehey",
              url: "https://spacehey.com",
              icon: "mood-smile",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "games",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad-2",
              icon_color: palette.green,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "mangadex",
              url: "https://mangadex.org",
              icon: "book",
              icon_color: palette.green,
            },
            {
              name: "netflix",
              url: "https://netflix.com",
              icon: "brand-netflix",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
