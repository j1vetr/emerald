---
name: Post-merge kurulumu
description: Birleşme sonrası otomatik dependency kurulumu ve production build davranışı
---

Post-merge kurulumu, kökteki `scripts/post-merge.sh` dosyasından çalışır. Script non-interactive `npm ci --prefer-offline --no-audit --no-fund` ve ardından `npm run build` komutlarını çalıştırır. `.replit` içindeki postMerge yolu ve timeout değeri platformun doğrulamalı yapılandırma akışıyla ayarlanmalıdır.

**Why:** Task birleşmesinden sonra yapılandırılmış script yolu bulunmadığı için otomatik kurulum başarısız oldu. Script eklenip gerçek post-merge çalıştırmasıyla doğrulandı.

**How to apply:** Gelecekte bağımlılık veya build gerektiren birleşmelerde aynı scripti kullan. Build uyarısı alındığında, hata ile uyarıyı birbirinden ayır ve yalnızca başarısızlık varsa müdahale et.