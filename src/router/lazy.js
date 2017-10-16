

const home_path = "../pages"

// 下面是按需加载的组件配置

export const Home = () => import(`../pages/home/Home`);

export const Person = () => import(`../pages/person/Person`)

export const Blog = () => import(`../pages/blog/Blog`)

export const Canvas = () => import(`../pages/blog/SubPages/canvas/Canvas`)

export const Css = () => import(`../pages/blog/SubPages/css/Css`)

export const Html = () => import(`../pages/blog/SubPages/html/Html`)

export const JavaScript = () => import(`../pages/blog/SubPages/js/Javascript`)