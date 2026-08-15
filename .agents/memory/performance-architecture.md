---
name: Performans mimarisi kararları
description: Core Web Vitals için alınan kalıcı kararlar ve yerel Lighthouse ölçüm yöntemi
---

# Performans mimarisi

- Hero giriş animasyonları CSS keyframe olmalı (index.css `hero-fade-up` vb), framer-motion `initial=hidden` KULLANMA. **Why:** SSR çıktısı opacity 0 ile geliyor ve LCP, JS + hydration + animasyon bitene kadar bekliyordu (LCP 9,7 sn ölçüldü). CSS animasyonla LCP 2,7 sn.
- YouTube ambiyans videoları LazyYouTube facade (lazy-youtube.tsx) üzerinden yükleniyor: hero etkileşim/idle, alttaki video görünürlük. iframe'i doğrudan koymak ~858 KB üçüncü taraf JS getirir.
- Rotalar React.lazy ile bölünüyor, prerender bunun için entry-server'da `renderToPipeableStream` + `onAllReady` kullanır. `renderToString`a geri dönme, lazy rotalar boş fallback basar.
- Express'te `compression()` middleware'i şart ve `script/build.ts` esbuild allowlist'inde `compression` olmalı. **Why:** Sıkıştırmasız JS 613 KB ham iniyordu, gzip ile 195 KB.
- Fontlar @fontsource-variable ile self-host, font family adları 'Montserrat Variable' / 'Playfair Display Variable'. Google Fonts linki index.html'e geri eklenmemeli.
- GA gtag.js analytics.ts içinde idle/ilk etkileşimde yüklenir, dataLayer stub kuyruklar; index.html'e sync gtag script'i geri koyma.

# Yerel Lighthouse ölçümü

- Chrome yok. Geçici çöz: `installSystemDependencies({packages:["chromium"]})`, ölçüm sonrası uninstall et.
- Prod sunucu ve Lighthouse AYNI ShellExec komutunda çalışmalı, arka plan süreçleri oturum bitince ölüyor ("interstitial" hatası aslında ölmüş sunucu demek).
- İlk ölçüm cold-start nedeniyle kötü çıkabilir, 2 kez ölç.
- Yerel prod testi sonrası `.replit` port eklemesini `git checkout -- .replit` ile geri al.
