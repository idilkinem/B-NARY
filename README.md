# 🧬 B-NARY — Kan Değerleri Karşılaştırma Projesi

B-NARY, kullanıcıların kan tahlili sonuçlarını analiz eden, ideal aralıklarla karşılaştıran ve kişiselleştirilmiş sağlık önerileri sunan bir yazılımdır.

## 💡 Projenin Amacı

B-NARY, kullanıcıların tıbbi test sonuçlarını daha kolay yorumlamasına yardımcı olmak için geliştirilmiştir. Sistem, alınan kan değerlerini veri tabanı veya CSV kaynaklı ideal değerlerle kıyaslar, düşük/yüksek değerleri tespit eder ve kullanıcıya öneriler sunar.

## ⚙️ Özellikler

- 📊 **Kan Değeri Analizi:** Girilen kan değerlerini yaş, cinsiyet ve kilo gibi parametreler eşliğinde kontrol eder.
- 🧠 **Akıllı Karşılaştırma:** İdeal aralık dışındaki değerleri tespit eder ve ilgili uyarıları gösterir.
- 💡 **Sağlık Tavsiyeleri:** Yüksek/düşük değerlere göre kişiye özel öneriler sunar.
- 🗂️ **Veri Kaynağı:** CSV dosyalarından veri alma ve PostgreSQL veritabanına aktarma desteği.
- 🌐 **API Tabanlı Yapı:** Web uygulamalarıyla kolay entegrasyon için RESTful API mimarisi.

## 🏗️ Kurulum

Projeyi klonlayarak başla:

```bash
git clone https://github.com/idilkinem/B-NARY.git
cd B-NARY
