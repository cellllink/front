export const CommonConfig = {
  apiHost: process.env.REACT_APP_API_HOST || "",
  apiHostPrefix: process.env.REACT_APP_API_HOST_PREFIX || "",
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
