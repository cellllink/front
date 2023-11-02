export const CommonConfig = {
  apiHost: process.env.REACT_APP_API_HOST || "",
  apiHostPrefix: process.env.REACT_APP_API_HOST_PREFIX || "",
  
  oauthDomain: process.env.REACT_APP_OAUTH_DOMAIN,

  aliIconfontKeys: ["font_3160388_911x95a6f2u"],
};

export const OAuthConfig = {};

export const WebsiteConfig = {};

export const SpaceConfig = {
  apiHost: process.env.REACT_APP_SPACE_API_HOST,
};

export const ManageConfig = {};

export const ConfigProviderTheme = {
  components: {},
};

export const Apps = [
  {
    to: "organization",
    name: "组织管理",
  },
  {
    to: "demand",
    name: "需求管理",
  },
  {
    to: "project",
    name: "项目管理",
  },
  {
    to: "defect",
    name: "缺陷管理",
  },
  {
    to: "todo",
    name: "代办清单",
  },
  {
    to: "schedule",
    name: "我的日程",
  },
  {
    to: "bbs",
    name: "圈子",
  },
  {
    to: "cloud",
    name: "云盘",
  },
];

// 表情 天气 水果 蔬菜 动物 各12个
export const TodoIcons = [
  "emoji-angel",
  "emoji-cool",
  "emoji-angry",
  "emoji-dizzy",
  "emoji-cry",
  "emoji-expressionless",
  "emoji-flushed",
  "emoji-happy",
  "emoji-kiss",
  "emoji-smiling",
  "emoji-thinking",
  "emoji-tongue",
];
