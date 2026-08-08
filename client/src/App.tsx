
import { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { SeoHead, LanguageSync } from "@/components/seo-head";
import { findRedirect } from "@/lib/seo";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Rooms from "@/pages/Rooms";
import RoomDetail from "@/pages/RoomDetail";
import About from "@/pages/About";
import Attractions from "@/pages/Attractions";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Location from "@/pages/Location";
import Sultanahmet from "@/pages/Sultanahmet";
import AttractionGuide from "@/pages/AttractionGuide";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

/**
 * Client-side fallback for the root URL. In production the server issues
 * the language redirect before the SPA ever loads, this only covers
 * dev mode and pure client-side navigation to "/".
 */
function RootRedirect() {
  const [, navigate] = useLocation();
  useEffect(() => {
    const prefersTr =
      typeof navigator !== "undefined" &&
      (navigator.language || "").toLowerCase().startsWith("tr");
    navigate(prefersTr ? "/tr/" : "/en/", { replace: true });
  }, [navigate]);
  return null;
}

/**
 * Catch-all: old indexed URLs get a client-side redirect to their new
 * canonical location (the server also 301s them in production), anything
 * else renders the 404 page.
 */
function LegacyOrNotFound() {
  const [location] = useLocation();
  const target = findRedirect(location);
  if (target) return <Redirect to={target} replace />;
  return <NotFound />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={RootRedirect} />

      <Route path="/en" component={Home} />
      <Route path="/tr" component={Home} />

      <Route path="/en/rooms" component={Rooms} />
      <Route path="/tr/odalar" component={Rooms} />
      <Route path="/en/rooms/:slug">
        {(params) => <RoomDetail slug={params.slug} />}
      </Route>
      <Route path="/tr/odalar/:slug">
        {(params) => <RoomDetail slug={params.slug} />}
      </Route>

      <Route path="/en/about" component={About} />
      <Route path="/tr/hakkimizda" component={About} />

      <Route path="/en/location" component={Location} />
      <Route path="/tr/konum" component={Location} />

      <Route path="/en/sultanahmet" component={Sultanahmet} />
      <Route path="/tr/sultanahmet" component={Sultanahmet} />

      <Route path="/en/istanbul-guide" component={Attractions} />
      <Route path="/tr/istanbul-rehberi" component={Attractions} />
      <Route path="/en/istanbul-guide/:slug">
        {(params) => <AttractionGuide slug={params.slug} routeLang="en" />}
      </Route>
      <Route path="/tr/istanbul-rehberi/:slug">
        {(params) => <AttractionGuide slug={params.slug} routeLang="tr" />}
      </Route>

      <Route path="/en/gallery" component={Gallery} />
      <Route path="/tr/galeri" component={Gallery} />

      <Route path="/en/contact" component={Contact} />
      <Route path="/tr/iletisim" component={Contact} />

      <Route path="/en/privacy-policy" component={Privacy} />
      <Route path="/tr/gizlilik-politikasi" component={Privacy} />

      <Route path="/en/terms-of-service" component={Terms} />
      <Route path="/tr/hizmet-kosullari" component={Terms} />

      <Route component={LegacyOrNotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageSync />
        <SeoHead />
        <SmoothScroll />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
