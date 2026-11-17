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
    intro: "Bugün sıradan bir gün değil: 18 yıl önce başlayan hikâyenin en parlak sayfası. Aşağı kaydır — bu küçük hediye en sevdiğimiz kürt için hazırlandı.",
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
    provider: "youtube",       // "youtube" | "spotify" | "local"
    url: "https://music.youtube.com/watch?v=LwU9e4dWgUM&si=kLXf2zju5vm11n-x&drli=1",        // Şarkı linki veya dosya adı (yukarıya bak)
    autoplay: true,         // true yaparsan ilk dokunuşta müzik kendiliğinden başlar
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
      { id: "memory-01", type: "image", file: "photos/photo-_01.jpg", title: "3 maymun", note: "kesin kolsuz gökhan kaybetti" },
      { id: "memory-03", type: "image", file: "photos/photo-_03.jpg", title: "", note: "" },
      { id: "memory-04", type: "image", file: "photos/photo-_04.jpg", title: "", note: "" },
      { id: "memory-05", type: "image", file: "photos/photo-_05.jpg", title: "PUHAHAA", note: "GÜLÜŞÜN DAİM OLSUN KİNGO" },
      { id: "memory-06", type: "image", file: "photos/photo-_06.jpg", title: "LAN HÜZÜNLENDİM", note: "tiplere bak aw" },
      { id: "memory-07", type: "image", file: "photos/photo-_07.jpg", title: "oyoyoy", note: "" },
      { id: "memory-08", type: "image", file: "photos/photo-_08.jpg", title: "ayı", note: "sakin ebrar bi çikolata gördün" },
      { id: "memory-09", type: "image", file: "photos/photo-_09.jpg", title: "hıh", note: "bizsiz tadı yok tabi ama" },
      { id: "memory-10", type: "image", file: "photos/photo-_10.jpg", title: "", note: "" },
      { id: "memory-11", type: "image", file: "photos/photo-_11.jpg", title: "çok tatlı", note: "sadece çay paketi kadar" },
      { id: "memory-12", type: "image", file: "photos/photo-_12.jpg", title: "gerçek yüzünü", note: "sonunda göstermen ne güzell" },
      { id: "memory-13", type: "image", file: "photos/photo-_13.jpg", title: "EPİK TÜRKLER", note: "efsane tayfa " },
      { id: "memory-14", type: "image", file: "photos/photo-_14.jpg", title: "Kurban olduğum", note: "yüzüne nur inmiş aw" },
      { id: "memory-15", type: "image", file: "photos/photo-_15.jpg", title: "", note: "" },
      { id: "memory-16", type: "image", file: "photos/photo-_16.jpg", title: "", note: "" },
      { id: "memory-17", type: "image", file: "photos/photo-_17.jpg", title: "", note: "" },
      { id: "memory-18", type: "image", file: "photos/photo-_18.jpg", title: "", note: "" },
      { id: "memory-19", type: "image", file: "photos/photo-_19.jpg", title: "GAY", note: "" },
      { id: "memory-20", type: "image", file: "photos/photo-_20.jpg", title: "DİVALAR", note: "gerçek divalar dediğin böyle olur" },
      { id: "video-01", type: "video", file: "videos/video-_01.mp4",
       poster: "photos/photo-15.jpg",
       title: "VATAN MİLLET EBOŞ",
       note: "AHFDJHGJSDHG EFSANE AW" },
      { id: "video-02", type: "video", file: "videos/video-_02.mp4",
       poster: "photos/photo-15.jpg",
       title: "BUNU NİYE KOYDUM BİLMYORUM",
       note: "" },
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
    portrait: "photos/photo-_02.jpg",   // Kartın portre fotoğrafı
    portraitAlt: "Ebrar'ın portre fotoğrafı",
    description: "Bu bölüm senin kelimelerini bekliyor: Ebrar'ı birkaç cümleyle anlatan tanımı buraya yaz. (config.js → identity → description)",
    fields: [
      { label: "İsim", value: "Ebrar" },
      { label: "Doğum tarihi", value: "17 Kasım 2008" },
      { label: "Yaş", value: "18" },
      { label: "Görev", value: "Hayatı güzelleştirmek ve kürt olmak" },
    ],
    facts: [
      { label: "En sevdiği şarkıcı", value: "wegh" },
      { label: "En sevdiği renk", value: "—" },
      { label: "En sevdiği tatlı", value: "—" },
      { label: "Bir gizli yeteneği", value: "kürt olmak" },
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
    greeting: "Sevgili Kürt,",
    paragraphs: [
      "Bugün en sevdiğimiz Kürt kuzenimizin 18. yaşına girişini hep beraber içtenlikle kutluyoruz ",
      "şaka maka bizim için çok değerlisin hayatımızda ve anılarımızda hep güzel anlar yaşatıığın için teşşekürler",
      "önümüzdeki bu güzel hayatta her zaman yanındayız ",
      "sevildiğini ve arkanın her zaman arkanda olduğumuzu unutma İyi ki doğdun.",
    ],
    signature: "Seni seven,\nEren",
    date: "17 Kasım 2026",
  },

  /* ==================================================================
     8) FİNAL KUTLAMA — sitenin son ekranı
     ================================================================== */
  finale: {
    kicker: "Ve Kutlama",
    title: "İyi ki Doğdun Ebrar",
    message: "18 yıl, 6.574 gün, sayısız kahkaha... Ve bu hikâye daha yeni ısınıyor. Mutlu yıllar Ebrar — seni çok seviyoruz.",
    signature: "Sevgiyle — Eren & Yasir",
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
    note: "Bu site sevgiyle hazırlandı — Eren",
    legal: "© 2008–2026 · İyi ki doğdun Ebrar",
  },
};

/* ---------------------------------------------------------------------
   BU DOSYANIN SONU. Kodlamaya gerek yok — sadece yazıları değiştir.
   --------------------------------------------------------------------- */
