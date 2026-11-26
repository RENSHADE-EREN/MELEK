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
    provider: "local",       // "youtube" | "spotify" | "local"
    url: "music.mp3",        // Şarkı linki veya dosya adı (yukarıya bak)
    autoplay: false,         // true yaparsan ilk dokunuşta müzik kendiliğinden başlar
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
      { id: "memory-01", type: "image", file: "photos/photo-01.jpg", title: "Şehrin Üstünde Bir Yıldız", note: "O gece şehrin üzerinde tek bir yıldız parladı; ertesi sabah Melek dünyaya geldi. Tesadüf mü? Biz sanmıyoruz." },
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
Bugün 18 oluyorsun ve ben ilk cümleyi nereden başlatacağımı bilemiyorum. Belki de en iyisi şuradan başlamak: iyi ki doğdun, iyi ki varsın, iyi ki seni tanımışım.

Sana bunu yazarken aramızdaki kilometreleri düşündüm. Uzakta olmak bazen zor; özellikle de böyle özel günlerde. Ama şunu bilmeni isterim: mesafe, doğru insanlar arasındaki bağı asla eritemez. Bizimki erimedi; her yıl biraz daha sağlamlaştı. Bugün de burada olamasam bile kalbimdeki yerin, yanımda olsaydın alacağı yerden hiç farklı değil.

18 yaş; kimilerine göre "resmî olarak büyüdün" demek. Bana göre ise tam tersi: her şeyin yeni başladığı yaş. Önünde kararlar var, hayaller var, belki biraz korkular da var. Hepsine sırayla, kendi hızında, kendi uslubünle yaklaşacağından hiç şüphem yok. Sen hep öyle yaptın zaten: kimsenin kalıbına sığmadan, kendi yolunu kendin çizerek.

Seni tanıyan biri olarak birkaç şeyi cesaretle söyleyeyim: Girdiğin ortamı ısıtan, gülerken etrafına neşe saçan, zor gününde bile yanındakine güç veren insanlardansın. Bazen bunun ne kadar değerli olduğunu kendin bile fark etmiyorsun belki; ama biz fark ediyoruz. Senin gülüşün bir odanın aydınlığı değiştiriyor, inan buna.

Geçen gün aklıma eski sohbetlerimiz geldi. Saatlerce süren, hiç sıkmayan, bazen hiçbir şeyle ilgili olmayan ama bir o kadar da güzel konuşmalarımız. Sonra düşündüm: iyi ki o sohbetlerin ilki olmuş, iyi ki hiç bitmemiş. Umarım önümüzde daha nice böylesi sohbet, daha nice kahkaha, daha nice ortak anı olur.

Bundan sonrası için sana tek bir dileğim var: kendine iyi bak. Hayalin neyse peşinden çekinmeden yürü. Yorulursan dinlen ama asla vazgeçme. Kararsız kaldığın günlerde kendi sesini dinle; çünkü o ses şimdiye kadar hep doğruyu söyledi. Ve unutma: nereye gidersen git, bir mesaj uzağında seni seven bir dost var.

Yolun açık, kalbin hafif, kahven hep sıcak olsun.
Bugün sadece gülümse ve dileğini tut.
Doğum günün kutlu olsun Melek.
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
    note: "Bu site sevgiyle hazırlandı — Gökhan",
    legal: "© 2008–2026 · İyi ki doğdun Melek",
  },
};

/* ---------------------------------------------------------------------
   BU DOSYANIN SONU. Kodlamaya gerek yok — sadece yazıları değiştir.
   --------------------------------------------------------------------- */
