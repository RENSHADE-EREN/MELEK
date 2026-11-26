/* =====================================================================
   MELEK 18 — SİHİRLİ DOĞUM GÜNÜ SİTESİ · AYAR DOSYASI (config.js)
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
    name: "Melek",                // Sitenin her yerinde kullanılan isim
    age: 18,                      // Kaç yaşına giriyor? (pasta mum sayısı da budur)
    birthday: "27 Kasım 2008",    // Doğum tarihi
    celebrationDate: "27 Kasım 2026", // Kutlama tarihi
  },

  /* ==================================================================
     2) AÇILIŞ HEDİYESİ — site ilk açıldığında görünen sürpriz
     ------------------------------------------------------------------
     Melek siteyi açtığında karşısına hediye kutusu ve mesaj çıkar.
     Kutuya dokununca (ya da düğmeyle) hediye açılır ve site başlar.

     message:    Hediyenin altında görünen mesaj.
     hint:       Kutunun altındaki küçük yönlendirme yazısı.
     openButton: Açılış düğmesindeki yazı.
     enabled:    false yaparsan açılış hediyesi tamamen kapanır.
     ================================================================== */
  gift: {
    enabled: true,
    message: "Gökhan'dan, uzakta olsak da sana küçük bir hediye...",
    hint: "Kutuya dokun ve aç",
    openButton: "Hediye'yi Aç",
  },

  /* ==================================================================
     3) AÇILIŞ EKRANI (HERO) — sitenin ilk ekranı
     ================================================================== */
  hero: {
    kicker: "27 Kasım 2026 · 18. Doğum Günü",
    line1: "Happy Birthday",       // Büyük ilk başlık
    line2: "",                     // BOŞ BIRAK: "İYİ Kİ DOĞDUN MELEK!" otomatik oluşur.
                                   // Farklı bir şey yazmak istersen buraya yaz.
    bigNumber: 18,                 // Dev "yaş" rakamı
    intro: "Bugün sıradan bir gün değil: 18 yıl önce başlayan hikâyenin en parlak sayfası. Aşağı kaydır — bu küçük hediye senin için hazırlandı.",
    scrollHint: "Kaydır ve keşfet",
  },

  /* ==================================================================
     4) MÜZİK — istediğin şarkıyı BURADAN seç
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
        Kendi mp3 dosyanı yükledikten sonra bu seçeneği kullan.
        (mp3, wav veya ogg dosya adı yaz.)

     Müziği tamamen kapatmak için:  enabled: false
     ================================================================== */
  music: {
    enabled: true,
    provider: "youtube",       // "youtube" | "spotify" | "local"
    url: "https://music.youtube.com/watch?v=Fcs9DLlHsPI&si=-3Wvf6hEj1bOAoT2&drli=1",        // Şarkı linki veya dosya adı (yukarıya bak)
    autoplay: true,         // true yaparsan ilk dokunuşta müzik kendiliğinden başlar
    showPlayer: true,        // Küçük oynatıcı paneli görünsün mü?
    loop: true,              // Şarkı bitince tekrar başlasın mı? (yerel dosyada)
    volume: 0.7,             // Ses seviyesi: 0.0 ile 1.0 arası
    label: "Doğum Günü Melodisi", // Oynatıcıda görünen şarkı adı
  },

  /* ==================================================================
     5) ANI GALERİSİ — fotoğraflar VE videolar
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
    { id: "memory-01", type: "image", file: "photos/Photo-_01.jpg", title: "", note: "" },
      { id: "memory-03", type: "image", file: "photos/Photo-_03.jpg", title: "", note: "" },
      { id: "memory-04", type: "image", file: "photos/Photo-_04.jpg", title: "", note: "" },
      { id: "memory-05", type: "image", file: "photos/Photo-_05.jpg", title: "", note: "" },
      { id: "memory-06", type: "image", file: "photos/Photo-_06.jpg", title: "", note: "" },
      { id: "memory-07", type: "image", file: "photos/Photo-_07.jpg", title: "", note: "" },
      { id: "memory-08", type: "image", file: "photos/Photo-_08.jpg", title: "", note: "" },
      { id: "memory-09", type: "image", file: "photos/Photo-_09.jpg", title: "", note: "" },
      { id: "memory-10", type: "image", file: "photos/Photo-_10.jpg", title: "", note: "" },
      { id: "memory-11", type: "image", file: "photos/Photo-_11.jpg", title: "", note: "" },
      { id: "memory-12", type: "image", file: "photos/Photo-_12.jpg", title: "", note: "" },
      { id: "memory-13", type: "image", file: "photos/Photo-_13.jpg", title: "", note: "" },
      { id: "memory-14", type: "image", file: "photos/Photo-_14.jpg", title: "", note: "" },
      { id: "memory-15", type: "image", file: "photos/Photo-_15.jpg", title: "", note: "" },
      { id: "memory-16", type: "image", file: "photos/Photo-_16.jpg", title: "", note: "" },
      { id: "memory-17", type: "image", file: "photos/Photo-_17.jpg", title: "", note: "" },
      { id: "memory-18", type: "image", file: "photos/Photo-_18.jpg", title: "", note: "" },
      { id: "memory-19", type: "image", file: "photos/Photo-_19.jpg", title: "", note: "" },
      { id: "memory-20", type: "image", file: "photos/Photo-_20.jpg", title: "", note: "" },
      { id: "memory-21", type: "image", file: "photos/Photo-_21.jpg", title: "", note: "" },
      { id: "memory-22", type: "image", file: "photos/Photo-_22.jpg", title: "", note: "" },
      { id: "memory-23", type: "image", file: "photos/Photo-_23.jpg", title: "", note: "" },
      { id: "memory-24", type: "image", file: "photos/Photo-_24.jpg", title: "", note: "" },
      { id: "memory-25", type: "image", file: "photos/Photo-_25.jpg", title: "", note: "" },
      
    ],
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
    completionMessage: "18 mum söndü, 18 yıl geride kaldı. Önünde ise daha nice parlak yıllar var. İyi ki doğdun Melek!",
    relightButton: "Mumları Yeniden Yak",
  },

  /* ==================================================================
     7) ÖZEL MEKTUP — zarf ve mektup metni (UZUN METİN DESTEĞİ)
     ------------------------------------------------------------------
     Mektubu İKİ FARKLI BiÇİMDE yazabilirsin — istediğini seç:

     A) text: TEK UZUN YAZI (önerilen — yapıştırması en kolay)
        Backtick işaretleri ( ` ` ) arasına mektubun tamamını
        yapıştır. Boş satırlar paragraf oluşturur; tek satır sonları
        (Enter) aynen korunur. Uzunluk sınırı YOKTUR: mektup kartı
        içeriğe göre otomatik büyür, hiçbir yazı kesilmez.

        DİKKAT: Yazının içinde backtick ( ` ) işareti varsa kaldır
        veya önüne ters eğik çizgi koy: \`

     B) paragraphs: PARAGRAF LİSTESİ
        Her tırnak bir paragraftır; aralarına virgül koyarak satır
        ekleyip çıkarabilirsin. Bu liste yalnızca text boşsa kullanılır.

     İkisi birden doluysa text önceliklidir.
     ================================================================== */
  letter: {
    kicker: "Son Bir Söz Var",
    title: "Melek'e Özel Bir Mektup",
    subtitle: "Kalp mühürlü bir zarf, içinde bir sürpriz",
    envelopeHint: "Zarfa dokun — içindeki mektup senin için yazıldı",
    greeting: "Sevgili Melek,",
    text: `
İlk olarak bana böyle bir dostluk kazandırdığın için teşekkürle başlamak istiyorum. Benim insan ilişkilerine ne kadar değer verdiğimi bilen en iyi kişilerdensin ve kmcödeki kardeşlerim hariç dost kategorisine koyabileceğim nadir kişilerdensin. 3 yıldır birbirimize yeri geldi dostluk yeri geldi sırdaşlık yaptık dertlerimizi ve sevinçlerimizi paylaştık. Bunun için minnettarım. Bir erkek kolay kolay korku ve endişelerini paylaşmaz ama seni o kadar yakın gördüğüm için bunları paylaşmaktan bile hiç bir an çekinmedim sen de elinden geldiğince destek oldun e tabi kavga da ettik (salaklıklarımızdan) 
sen bizi harcarsın dedim zamanında ama son kavgamız da keşke olmasaydı ama benim yüzümden oldu  eksmshjxnsjzkznz. Neyse acısıyla tatlısıyla yanımda olduğun için teşekkür ediyorum sevildiğini bil. Geçen sene de çok stresli bir süreç atlattık sen şimdi hayalini kurduğumuz tıp fakültesindesin 6 yıl sonra çok iyi bir doktor olacağından hiç şüphem yok sadece bilginle değil güzel kalbinle de hastalara şifa dağıtacaksın. Bende arkandan geliyorum 1 yıl geç olsa da inşallah günün birinde meslektaş oluruz. Bu hayat çok olmasa da uzun bir yol umarım karşına değer bilen ve iyi kalpli insanlar çıkar. Düşününce çok anımız var resmi konuşmalarda ne kadar iyi olsamda duygusal konuşma ve yazma işinde çok becerikli olduğumu söyleyemem o yüzden benden bu kadar. Yeni yaşın sana mutluluklar getirsin. Sevdiklerinle nice yıllara... İyi ki doğdun Doktor hanım🥳🥳
  `,
    /* İstersen text'i silip bu listeyi de kullanabilirsin:
    paragraphs: [
      "Birinci paragraf...",
      "İkinci paragraf...",
    ],
    */
    paragraphs: [],
    signature: "Uzakta ama hep yanında,\nGökhan",
    date: "27 Kasım 2026",
  },

  /* ==================================================================
     8) FİNAL KUTLAMA — sitenin son ekranı
     ================================================================== */
  finale: {
    kicker: "Ve Kutlama",
    title: "İyi ki Doğdun Melek",
    message: "18 yıl, 6.574 gün, sayısız kahkaha... Ve bu hikâye daha yeni ısınıyor. Mutlu yıllar Melek — uzaktan da olsa kalpten kutluyorum.",
    signature: "Sevgiyle — Gökhan",
    date: "27 Kasım 2026",
    backButton: "Başa Dön",
  },

  /* ==================================================================
     9) ÜST MENÜ — bölüm linkleri
     ================================================================== */
  navigation: [
    { label: "Açılış", href: "#hero" },
    { label: "Anılar", href: "#galeri" },
    { label: "Pasta", href: "#pasta" },
    { label: "Mektup", href: "#mektup" },
    { label: "Kutlama", href: "#son" },
  ],

  /* ==================================================================
     10) SAYFA SONU — küçük alt bilgi
     ================================================================== */
  footer: {
    note: "Bu site profosyonelce tasarlandı — Eren",
    legal: "© 2009–2026 · İyi ki doğdun Melek",
  },
};

/* ---------------------------------------------------------------------
   BU DOSYANIN SONU. Kodlamaya gerek yok — sadece yazıları değiştir.
   --------------------------------------------------------------------- */
