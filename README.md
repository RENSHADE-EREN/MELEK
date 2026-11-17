# EBRAR 18 — Sihirli Doğum Günü Sitesi

Ebrar için hazırlanmış, mor-lavanta-pembe temalı, sihirli ve romantik
bir 18. doğum günü hediyesi. Tamamen statiktir: HTML, CSS ve vanilla
JavaScript. Hiçbir kurulum gerektirmez, hiçbir kod yazmadan
`config.js` üzerinden içerik güncellenir.

## Dosyalar

```
index.html      → sayfanın iskeleti (dokunmana gerek yok)
styles.css      → görünüm ve renkler (dokunmana gerek yok)
script.js       → davranışlar (dokunmana gerek yok)
config.js       → TÜM METİNLER ve AYARLAR burada
README.md       → bu kılavuz
.nojekyll       → GitHub için (dokunma)
photos/         → fotoğraflar (photo-01.jpg ... photo-15.jpg)
videos/         → video dosyaları için boş klasör (isteğe bağlı)
music.mp3       → yerel fon müziği (isteğe bağlı)
```

## GitHub Pages'e Yükleme (tabletten, hiçbir program kurmadan)

1. **github.com** adresine gir, hesabınla oturum aç.
2. Sağ üstteki **+** simgesinden **New repository** seç.
   - Repository name: `ebrar-18`
   - Görünürlük: **Public** (Pages ücretsiz sürümde public ister)
   - **Create repository** de.
3. **"uploading an existing file"** bağlantısına dokun.
4. ZIP'i tabletinde çıkart (Dosyalar uygulaması yeter).
5. Kök dosyaları sürükle-yükle: `index.html`, `styles.css`,
   `script.js`, `config.js`, `README.md`, `.nojekyll`, `music.mp3`
   ve `photos` ile `videos` klasörlerini de içine bırak.
   - Kolay yol: "uploading an existing file" ekranında dosya adı
     kutusuna `photos/` yazıp fotoğrafları oraya bırakabilirsin
     (klasör otomatik oluşur). `videos/` için de aynı.
   - Not: GitHub'ın web arayüzü gizli dosyaları (.nojekyll) normal
     sürükle-bırakla görebilir; görünmezse sorun değil — site yine
     çalışır, sadece Jekyll uyarısı olabilir.
6. **Commit changes** de.
7. **Settings → Pages** bölümüne gir:
   - Source: **Deploy from a branch**
   - Branch: **main**, klasör: **/ (root)**
   - **Save** de.
8. 1-2 dakika içinde site hazır olur:
   `https://KULLANICIADIN.github.io/ebrar-18/`

---

## HER ŞEY config.js ÜZERİNDEN DEĞİŞİR

GitHub'da `config.js` dosyasını aç → kalem (düzenle) simgesine dokun
→ sadece tırnak içindeki yazıları değiştir → **Commit changes**.
Site 1-2 dakika içinde güncellenir.

### İsim, yaş ve tarihler

`person` bölümü: `name`, `age`, `birthday`, `celebrationDate`.
İsim buradan değişirse sitede her yerde (açılış, kimlik kartı, mektup)
otomatik güncellenir.

### Açılış ekranı

`hero` bölümü: `kicker` (üstteki tarih satırı), `line1` ("Happy
Birthday"), `line2` (boş bırakırsan "İYİ Kİ DOĞDUN EBRAR!" otomatik
oluşur), `intro` (giriş mesajı).

### Fotoğrafları değiştirmek

`photos` klasörüne **aynı isimle** yeni dosya yükle: yeni bir
`photo-03.jpg` yüklersen eski fotoğraf yenisiyle değişir. Dosya
adlarını olduğu gibi koru (`photo-01.jpg` ... `photo-15.jpg`).
Boyut önerisi: dosya başına 500 KB altı.

### Fotoğraf başlıklarını ve açıklamalarını değiştirmek

`config.js` → `gallery` → `items` listesi. Her satır KENDİ
fotoğrafının adını, başlığını ve açıklamasını taşır:

```
{ id: "memory-01", type: "image", file: "photos/photo-01.jpg",
  title: "Başlık buraya", note: "Açıklama buraya" },
```

- `file` hangi fotoğrafa ait olduğunu belirler — açıklama asla
  başka fotoğrafa kaymaz.
- Satırların sırasını değiştirmek serbesttir; açıklamalar yine kendi
  fotoğraflarına bağlı kalır.
- Bir fotoğrafı tamamen kaldırmak istersen o satırı sil.
- Yeni fotoğraf eklemek için: önce `photos` klasörüne yükle
  (örn. `photo-16.jpg`), sonra listeye aynı biçimde yeni bir satır ekle.

### Video eklemek

1. `videos` klasörüne video dosyanı yükle (örn. `video-01.mp4`).
   MP4 önerilir.
2. `config.js` → `gallery` → `items` listesine şu biçimde satır ekle:

```
{ id: "video-01", type: "video", file: "videos/video-01.mp4",
  poster: "photos/photo-15.jpg",
  title: "Video başlığı",
  note: "Video açıklaması" },
```

- `poster` (video kartındaki ön resim) isteğe bağlıdır; istersen sil.
- Video açıldığında tam ekran büyüteçte, kendi oynatma düğmeleriyle
  oynar.

### Kimlik kartını düzenlemek

`config.js` → `identity` bölümü:
- `portrait`: karttaki fotoğrafın dosya adı.
- `description`: kısa tanım (şu an yer tutucu bir yazı var — kendi
  cümlelerinle değiştir).
- `fields`: karttaki bilgi satırları (etiket + değer).
- `facts`: "özellikler" bölümü — değerler `—` bırakıldı; doldurmak
  tamamen serbest.
- `badges`: alttaki süslü rozetler.

### Mektubu düzenlemek

`config.js` → `letter` bölümü: `greeting` (hitap), `paragraphs`
(mektubun paragrafları — satır ekleyip çıkarabilirsin), `signature`
(imza), `date` (tarih).

### Pastayı düzenlemek

`config.js` → `cake` bölümü: `wishMessage` (dilek isterken görünen
mesaj), `blowButton`, `completionTitle` + `completionMessage`
(mumlar söndükten sonraki kutlama yazısı), `relightButton`.
`candleCount` mum sayısıdır (18).

---

## MÜZİĞİ DEĞİŞTİRME — istediğin şarkıyı seç

Hepsi `config.js` → `music` bölümünde. Üç seçenek var:

### A) YouTube şarkısı

```
provider: "youtube",
url: "https://www.youtube.com/watch?v=AbCdEfGhIjK",
```

- Normal video linki, `youtu.be/...` kısaltması veya Shorts linki olur.
- Sağ alttaki müzik düğmesine dokununca şarkı başlar; küçük oynatıcı
  paneli açılır.
- Uyarı: videonun sahibi gömmeye izin vermiyorsa oynatıcı hata
  mesajı gösterir — başka bir video seç ya da yerel mp3 kullan.

### B) Spotify şarkısı

```
provider: "spotify",
url: "https://open.spotify.com/track/ALBUMLINKI...",
```

- Spotify'ın resmî gömülü oynatıcısı panelde açılır.
- Spotify kuralı gereği site şarkıyı uzaktan başlatamaz: paneldeki
  oynatıcıda **oynat düğmesine kendin dokunman** gerekir (Spotify
  Premium'da istediğin gibi oynar; ücretsiz hesapta kısıtlı
  olabilir).

### C) Kendi mp3 dosyan

```
provider: "local",
url: "music.mp3",
```

- Şarkı dosyanı site klasörüne yükle ve adını `url` kısmına yaz.
  (`music.mp3` halihazırda projede var; istersen kendi şarkınla
  aynı isimle değiştir.)

### Diğer ayarlar

- `enabled: false` → müziği tamamen kapat (düğme kaybolur, site
  sorunsuz çalışır).
- `autoplay: true` → kullanıcı sayfaya ilk dokunduğunda müzik
  kendiliğinden başlar (tarayıcı kuralları gereği yine de ilk
  dokunuşu bekler; ses zorla başlatılmaz).
- `label` → oynatıcıda görünen şarkı adı.
- `volume` → ses seviyesi (0.0 - 1.0).

---

## Sık Sorulanlar

- **Site açılmıyor / 404:** Dosya adlarının tam olarak `photo-01.jpg`
  biçiminde ve küçük harfle olduğundan emin ol. Klasör adları
  `photos` ve `videos`.
- **Müzik başlamıyor:** Tarayıcılar ilk dokunuşa kadar sesi
  başlatmaz. Sağ alttaki müzik düğmesine dokun ya da oynatıcı
  panelindeki oynat düğmesini kullan.
- **Video oynamıyor:** Dosya adını ve yolu (`videos/...`) kontrol
  et. MP4 önerilir.
- **Yazı Türkçe karakterler bozuk görünüyor:** Dosyaları UTF-8 olarak
  kaydet (GitHub web editörü bunu otomatik yapar).
- **Mumları mikrofonla üfleyemiyorum:** Mikrofon düğmesi tarayıcı
  desteğine bağlıdır; izin vermen gerekir. Çalışmasa da "Dileği Tut,
  Mumları Söndür" düğmesi her zaman iş görür.

---

Sevgiyle: Eren & Yaşır · 17 Kasım 2026
