import { useEffect, useRef, useState } from "react";

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
  /**
   * "interaction": load after first user interaction or idle time after
   * window load (used for above-the-fold ambience video).
   * "visible": load when the element scrolls near the viewport.
   */
  strategy?: "interaction" | "visible";
}

function buildSrc(videoId: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    loop: "1",
    playlist: videoId,
    showinfo: "0",
    rel: "0",
    iv_load_policy: "3",
    disablekb: "1",
    modestbranding: "1",
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

/**
 * Defers the heavy YouTube iframe (~850 KB of third party JS) until the
 * page is interactive or the element is near the viewport. Renders nothing
 * until then, so the surrounding poster/background styling shows instead.
 */
export function LazyYouTube({ videoId, title, className, strategy = "interaction" }: LazyYouTubeProps) {
  const [load, setLoad] = useState(false);
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (load) return;

    if (strategy === "visible") {
      const el = holderRef.current;
      if (!el || typeof IntersectionObserver === "undefined") {
        setLoad(true);
        return;
      }
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            setLoad(true);
            io.disconnect();
          }
        },
        { rootMargin: "600px" },
      );
      io.observe(el);
      return () => io.disconnect();
    }

    // "interaction" strategy: first input, or idle time shortly after load
    let done = false;
    const start = () => {
      if (done) return;
      done = true;
      cleanup();
      setLoad(true);
    };

    const events: (keyof WindowEventMap)[] = ["pointerdown", "touchstart", "keydown", "wheel", "scroll"];
    const opts: AddEventListenerOptions = { once: true, passive: true };
    events.forEach((ev) => window.addEventListener(ev, start, opts));

    let timer: ReturnType<typeof setTimeout> | undefined;
    const scheduleIdle = () => {
      timer = setTimeout(start, 3500);
    };
    if (document.readyState === "complete") {
      scheduleIdle();
    } else {
      window.addEventListener("load", scheduleIdle, { once: true });
    }

    const cleanup = () => {
      events.forEach((ev) => window.removeEventListener(ev, start));
      window.removeEventListener("load", scheduleIdle);
      if (timer) clearTimeout(timer);
    };
    return cleanup;
  }, [load, strategy]);

  return (
    <div ref={holderRef} className="absolute inset-0">
      {load && (
        <iframe
          className={className}
          src={buildSrc(videoId)}
          allow="autoplay; encrypted-media"
          title={title}
        />
      )}
    </div>
  );
}
