/* =====================================================================
   EBRAR 18 — SİHİRLİ DOĞUM GÜNÜ SİTESİ · AYAR DOSYASI (config.js)
   ---------------------------------------------------------------------
   Bu dosya sitenin KALBİ: buradaki yazıları değiştirerek tüm içeriği
   hiçbir kod bilgisine ihtiyaç duymadan güncelleyebilirsin.

   NASIL DÜZENLENİR (GitHub üzerinden, tabletten bile):
     1. github.com'da depo (repository) sayfanı aç.
     2. config.js dosyasına dokun → kalem (düzenle) simgesine dokun.
     3. Sadece tırnak içindeki yazıları ("...") değiştir.
     4. "Commit changes" (değişiklikleri kaydet) de. Site güncellenir.

   ÖNEMLİ KURALLAR:
     - Tırnak işaretlerini ("), virgülleri (,) ve süslü parantezleri
       { } bozmadan bırak. Sadece tırnak İÇİNDEKİ yazıları değiştir.
     - Bir satırın başına // koyarsan o satır etkisizleşir (yorum).
     - Türkçe karakterler (İ, ı, ğ, ş, ü, ö, ç) serbest — sorun çıkmaz.
   ===================================================================== */

var SITE_CONFIG = {

  /* ==================================================================
     1) KİŞİSEL BİLGİLER — isim ve yaş BURADAN yönetilir
     ================================================================== */
  person: {
    name: "Ebrar",                // Sitenin her yerinde kullanılan isim
    age: 18,                      // Kaç yaşına giriyor? (pasta mum sayısı da budur)
    birthday: "17 Kasım 2008",    // Doğum tarihi (kimlik kartında görünür)
    celebrationDate: "17 Kasım 2026", // Kutlama tarihi
  },

  /* ==================================================================
     2) AÇILIŞ EKRANI (HERO) — sitenin ilk ekranı
     ================================================================== */
  hero: {
    kicker: "17 Kasım 2026 · 18. Doğum Günü",
    line1: "Happy Birthday",       // Büyük ilk başlık
    line2: "",                     // BOŞ BIRAK: "İYİ Kİ DOĞDUN EBRAR!" otomatik oluşur.
                                   // Farklı bir şey yazmak istersen buraya yaz.
    bigNumber: 18,                 // Dev "yaş" rakamı
    intro: "Bugün sıradan bir gün değil: 18 yıl önce başlayan hikâyenin en parlak sayfası. Aşağı kaydır — bu küçük hediye senin için hazırlandı.",
    scrollHint: "Kaydır ve keşfet",
  },

  /* ==================================================================
     3) MÜZİK — istediğin şarkıyı BURADAN seç
     ------------------------------------------------------------------
     provider (sağlayıcı) olarak 3 seçenek var:

     A) YOUTUBE  →  provider: "youtube",  url: "YouTube linki buraya"
        Örnek url: "https://www.youtube.com/watch?v=AbCdEfGhIjK"
        (Normal link, youtu.be kısaltması veya Shorts linki olur.)

     B) SPOTIFY  →  provider: "spotify",  url: "Spotify parça linki"
        Örnek url: "https://open.spotify.com/track/4uLU6hMCjMI75M8A8v94..."
        Not: Spotify kendi oynatıcısında oynatma düğmesine sen
        dokunman gerekebilir (Spotify kuralıdır, siteden aşılamaz).

     C) YEREL DOSYA →  provider: "local",  url: "music.mp3"
        Kendi mp3 dosyanı yukledikten sonra bu seçeneği kullan.
        (mp3, wav veya ogg dosya adı yaz.)

     Müziği tamamen kapatmak için:  enabled: false
     ================================================================== */
  music: {
    enabled: true,
    provider: "local",       // "youtube" | "spotify" | "local"
    url: "music.mp3",        // Şarkı linki veya dosya adı (yukarıya bak)
    autoplay: false,         // true yaparsan ilk dokunuşta müzik kendiliğinden başlar
    showPlayer: true,        // Küçük oynatıcı paneli görünsün mü?
    loop: true,              // Şarkı bitince tekrar başlasın mı? (yerel dosyada)
    volume: 0.7,             // Ses seviyesi: 0.0 ile 1.0 arası
    label: "Doğum Günü Melodisi", // Oynatıcıda görünen şarkı adı
  },

  /* ==================================================================
     4) ANI GALERİSİ — fotoğraflar VE videolar
     ------------------------------------------------------------------
     Her satır KENDİ dosyasını, KENDİ başlığını ve KENDİ açıklamasını
     taşır. Bir fotoğrafın açıklaması asla başka fotoğrafa kaymaz.

     - Fotoğraf eklemek için: photos klasörüne dosya yükle
       (örn: photo-16.jpg), sonra buraya yeni bir satır ekle.
     - Çıkarmak için satırı sil.
     - Sıra değiştirme: satırların yerini değiştirmen serbesttir;
       açıklamalar kendi dosyalarına bağlıdır, kayma olmaz.

     VİDEO EKLEMEK İÇİN (örnek — başındaki // işaretini kaldır ve
     videos/ klasörüne kendi video dosyanı yükle):

     { id: "video-01", type: "video", file: "videos/video-01.mp4",
       poster: "photos/photo-15.jpg",
       title: "Video başlığı",
       note: "Video açıklaması" },

     ------------------------------------------------------------------ */
  gallery: {
    kicker: "Anı Albümü",
    title: "Birlikte Yaşadığımız Anlar",
    subtitle: "Her kare kendi hikâyesini anlatıyor. Fotoğraflara dokunarak büyütebilirsin.",
    items: [
      { id: "memory-01", type: "image", file: "photos/photo-01.jpg", title: "Şehrin Üstünde Bir Yıldız", note: "O gece şehrin üzerinde tek bir yıldız parladı; ertesi sabah Ebrar dünyaya geldi. Tesadüf mü? Biz sanmıyoruz." },
      { id: "memory-02", type: "image", file: "photos/photo-02.jpg", title: "Sisli Gecede Bir Yürüyüş", note: "Yol uzun olsa da adımlar hep emin atıldı. Yürüyenin kim olduğu zaten aşikâr." },
      { id: "memory-03", type: "image", file: "photos/photo-03.jpg", title: "Kahkahanın Kanıtı", note: "O gülüş duyulduğunda, sokaktaki neonlar bile bir an kendilerini unuttu." },
      { id: "memory-04", type: "image", file: "photos/photo-04.jpg", title: "Gece Sohbeti", note: "İki koltuk, tek lamba, saatlerce konuşma. Yorgunluk, keyfe yenik düştü." },
      { id: "memory-05", type: "image", file: "photos/photo-05.jpg", title: "Gece Atıştırması", note: "Ses yok, ışık bile kısık... Ama sabah bulunan boş tabak her şeyi anlatıyordu." },
      { id: "memory-06", type: "image", file: "photos/photo-06.jpg", title: "Rüya Arasında", note: "Alarm çaldı ama rüya bitmemişti. \"Beş dakika daha...\" derin bir hikâye." },
      { id: "memory-07", type: "image", file: "photos/photo-07.jpg", title: "Flaşlar Arasında", note: "Kimi anlar net, kimi anlar bulanık. Ama hepsi aynı güzelliği taşıyor." },
      { id: "memory-08", type: "image", file: "photos/photo-08.jpg", title: "İki Fincan", note: "Bir masada iki kahve. Sohbet bitince fincanlar değil, sohbete yenildi." },
      { id: "memory-09", type: "image", file: "photos/photo-09.jpg", title: "Eski Telefon, Sıcak Sözler", note: "Bu ahizeden konuşulan her şey kalpten kalbe gitti." },
      { id: "memory-10", type: "image", file: "photos/photo-10.jpg", title: "Omzunun Üzerinden Bir Bakış", note: "Fotoğrafa değil, hayata bakış. Bu bakışı yakalayanlar şanslıdır." },
      { id: "memory-11", type: "image", file: "photos/photo-11.jpg", title: "Özel Bir Gece İçin", note: "Bir elbise asmada bekliyor. Doğum günü geldiğinde onun da saati çalacak." },
      { id: "memory-12", type: "image", file: "photos/photo-12.jpg", title: "Uzanan Yol", note: "Yolun sonu değil, yolda birlikte yürümek güzeldi. Nereye gidersek gidelim." },
      { id: "memory-13", type: "image", file: "photos/photo-13.jpg", title: "Sinema Gecesi", note: "Film ne olursa olsun, perde her seferinde bir öncekinden daha parlak görünüyordu." },
      { id: "memory-14", type: "image", file: "photos/photo-14.jpg", title: "Pencere Kenarında", note: "Işıklar dışarıda, gülüş içeride. En güzel manzara hangisiydi, hâlâ tartışılıyor." },
      { id: "memory-15", type: "image", file: "photos/photo-15.jpg", title: "Bir Mum, Bir Dilek", note: "18. yılın mumu: gözlerini kapat, dileğini tut. Gerisi sadece güzel olacak." },
    ],
  },

  /* ==================================================================
     5) KİMLİK KARTI — Ebrar'ın kişisel kartı
     ------------------------------------------------------------------
     fields: kartin üstündeki bilgi satırları (etiket + değer).
     facts: "özellikler" bölümü — henüz yazılmamış bilgiler için
     boş bırakılmış yerler var; doldurmak tamamen serbest.
     badges: kartın altındaki süslü rozetler (şaka rozetleri).
     ================================================================== */
  identity: {
    kicker: "Resmî Doğum Günü Kartı",
    title: "Ebrar'ın Kimlik Kartı",
    subtitle: "18 yıllık bir hikâyenin resmî özeti",
    portrait: "photos/photo-14.jpg",   // Kartın portre fotoğrafı
    portraitAlt: "Ebrar'ın portre fotoğrafı",
    description: "Bu bölüm senin kelimelerini bekliyor: Ebrar'ı birkaç cümleyle anlatan tanımı buraya yaz. (config.js → identity → description)",
    fields: [
      { label: "İsim", value: "Ebrar" },
      { label: "Doğum tarihi", value: "17 Kasım 2008" },
      { label: "Yaş", value: "18" },
      { label: "Görev", value: "Hayatı güzelleştirmek" },
    ],
    facts: [
      { label: "En sevdiği şarkı", value: "—" },
      { label: "En sevdiği renk", value: "—" },
      { label: "En sevdiği tatlı", value: "—" },
      { label: "Bir gizli yeteneği", value: "—" },
    ],
    factsHint: "(Bu bölüm boş bırakıldı — değerleri config.js → identity → facts içinden doldurabilirsin.)",
    badges: [ "Gülüş Ustası", "Odaları Isıtan Kişi", "18. Sezonun Yıldızı" ],
  },

  /* ==================================================================
     6) DOĞUM GÜNÜ PASTASI — 18 mum, dilek ve kutlama
     ================================================================== */
  cake: {
    kicker: "Etkileşimli Pasta Sahnesi",
    title: "Dilek Tut ve Üfle",
    subtitle: "18 mum seni bekliyor",
    candleCount: 18,          // Mum sayısı (person.age ile aynı tut)
    wishMessage: "Gözlerini kapat ve bir dilek tut... Sonra mumları söndür — istersen tek tek, istersen hepsini birden.",
    blowButton: "Dileği Tut, Mumları Söndür",
    micButton: "Mikrofonla Üfle",
    completionTitle: "Dileğin Kabul Olsun!",
    completionMessage: "18 mum söndü, 18 yıl geride kaldı. Önünde ise daha nice parlak yıllar var. İyi ki doğdun Ebrar!",
    relightButton: "Mumları Yeniden Yak",
  },

  /* ==================================================================
     7) ÖZEL MEKTUP — zarf ve mektup metni
     ------------------------------------------------------------------
     paragraflar: mektubun gövdesi. İstediğin kadar satır
     ekleyebilir veya silebilirsin ("..." aralarına virgül koyarak).
     ================================================================== */
  letter: {
    kicker: "Son Bir Söz Var",
    title: "Ebrar'a Özel Bir Mektup",
    subtitle: "Kalp mühürlü bir zarf, içinde bir sürpriz",
    envelopeHint: "Zarfa dokun — içindeki mektup senin için yazıldı",
    greeting: "Sevgili Ebrar,",
    paragraphs: [
      "Bugün bir hikâyenin en güzel sayfası yazılıyor: 17 Kasım 2008'de başlayan yolculuk, tam 18 yıl sonra bugün en tatlı durağına ulaştı.",
      "Şakayı bir kenara bırakıp en samimi hâlimizle yazıyoruz: seni tanımak, yanında olmak ve seninle büyümek bu 18 yılın en güzel kısmıydı. Girdiğin ortamı ısıtan, seven ve sevilen ender insanlardansın.",
      "Bundan sonrası tamamen senin: hayallerinin peşinden çekinmeden yürü. Nereye gidersen git, iki dostun her zaman bir mesaj uzağında.",
      "Yolun açık, kalbin hafif, kahven her zaman sıcak olsun. İyi ki doğdun.",
    ],
    signature: "Seni seven,\nEren & Yaşır",
    date: "17 Kasım 2026",
  },

  /* ==================================================================
     8) FİNAL KUTLAMA — sitenin son ekranı
     ================================================================== */
  finale: {
    kicker: "Ve Kutlama",
    title: "İyi ki Doğdun Ebrar",
    message: "18 yıl, 6.574 gün, sayısız kahkaha... Ve bu hikâye daha yeni ısınıyor. Mutlu yıllar Ebrar — seni çok seviyoruz.",
    signature: "Sevgiyle — Eren & Yaşır",
    date: "17 Kasım 2026",
    backButton: "Başa Dön",
  },

  /* ==================================================================
     9) ÜST MENÜ — bölüm linkleri
     ================================================================== */
  navigation: [
    { label: "Açılış", href: "#hero" },
    { label: "Anılar", href: "#galeri" },
    { label: "Kimlik", href: "#kimlik" },
    { label: "Pasta", href: "#pasta" },
    { label: "Mektup", href: "#mektup" },
    { label: "Kutlama", href: "#son" },
  ],

  /* ==================================================================
     10) SAYFA SONU — küçük alt bilgi
     ================================================================== */
  footer: {
    note: "Bu site sevgiyle hazırlandı — Eren & Yaşır",
    legal: "© 2008–2026 · İyi ki doğdun Ebrar",
  },
};

/* ---------------------------------------------------------------------
   BU DOSYANIN SONU. Kodlamaya gerek yok — sadece yazıları değiştir.
   --------------------------------------------------------------------- */
