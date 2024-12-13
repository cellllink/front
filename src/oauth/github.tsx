import queryString from "query-string";
import { useEffect } from "react";

import { message } from "@share/component/escapeAntd";

export const Github: React.FC = () => {
  const { code } = queryString.parse(window.location.search);

  useEffect(() => {
    if (!code) message.error("code不存在，授权失败！");
  }, []);

  return <div>github</div>;
};
