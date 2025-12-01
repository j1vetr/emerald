
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Rooms from "@/pages/Rooms";
import RoomDetail from "@/pages/RoomDetail";
import About from "@/pages/About";
import Attractions from "@/pages/Attractions";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/odalar" component={Rooms} />
      <Route path="/odalar/:slug" component={RoomDetail} />
      <Route path="/hakkimizda" component={About} />
      <Route path="/gezilecek-yerler" component={Attractions} />
      <Route path="/galeri" component={Gallery} />
      <Route path="/iletisim" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
