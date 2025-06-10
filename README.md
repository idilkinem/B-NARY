🧬 B-NARY: Kan Değeri Analiz ve Sağlık Öneri Sistemi
B-NARY, kullanıcıdan alınan biyometrik bilgiler ve kan değerlerini kullanarak, bu değerleri ideal referans aralıklarıyla karşılaştıran ve sağlık önerileri sunan bir web uygulamasıdır.

🔍 Proje Amacı
Kullanıcıların kan değerlerinin normal aralıklarda olup olmadığını tespit etmek.

Düşük/yüksek olan değerlere göre sağlık önerileri sunmak.

Kullanıcıya özel geri bildirim sağlayarak sağlık farkındalığını artırmak.

🛠️ Kullanılan Teknolojiler
Backend: JavaScript

API: RESTful Web Services

Veritabanı: PostgreSQL (başlangıçta CSV dosyalarıyla test edildi)

Deployment: Vercel (Frontend) & Localhost (Backend)

Versiyon Kontrol: Git + GitHub

⚙️ Sistem Mimarisi
Kullanıcıdan alınan bilgiler: Cinsiyet, yaş, kilo, boy, kan değerleri (örn. hemoglobin, trombosit vs.)

API: Alınan verileri referans aralıklarla karşılaştırır.

Öneri Motoru: Normal dışı değerler için öneri üretir.

Veri Kaynağı: Kullanıcıdan alınacak excel dosyası.


Bu linkten projeyi kullanabilirsiniz : https://b-nary-c32l.vercel.app/

