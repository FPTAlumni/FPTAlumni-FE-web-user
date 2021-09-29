const DANBOORU_ROUTE = {
  path: "/dan",
  name: "Danbooru",
};
const HOME_ROUTE = {
  path: "home",
  name: "Home",
};

const getNameFromRoute = (path) => {
  switch (path) {
    case DANBOORU_ROUTE.path:
      return DANBOORU_ROUTE.name;
      break;
    case HOME_ROUTE.path:
      return HOME_ROUTE.name;
      break;
    default:
      return "";
      break;
  }
};

export { DANBOORU_ROUTE, HOME_ROUTE, getNameFromRoute };
