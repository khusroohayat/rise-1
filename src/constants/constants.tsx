import Article from "@/pages/Article";
import Blog from "@/pages/Blog";
import Home from "@/pages/Home";

// Page Routes
export const pageRoutes = [
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug", element: <Article /> },
];
