Health App - Veritabanı Yedekleme ve Geri Yükleme

Bu belge, health_app adlı MySQL veritabanının yedeğinin alınması ve geri yüklenmesi için geliştirilen Python betiklerinin kullanımına dair bilgi içerir.

1. Dosya Yapısı:
----------------
db/
│
├── health_app_backup.sql         → Alınan veritabanı yedeği
├── README.md  → Bu açıklama dosyası
└── scripts/
    ├── export.py                 → Veritabanı yedeğini oluşturan Python betiği
    └── import.py                 → Yedeği geri yükleyen Python betiği

2. Kullanım:
------------

• export.py  → Veritabanı yedeğini oluşturur.
  - Kullanım: `python export.py`
  - health_app adlı veritabanının içeriğini UTF-8 formatında `.sql` dosyasına kaydeder.

• import.py  → Daha önce alınmış yedeği geri yükler.
  - Kullanım: `python import.py`
  - health_app veritabanı mevcut değilse oluşturur ve yedeği yükler.

3. Gereksinimler:
-----------------
- Python 3.7 veya üzeri
- MySQL Server kurulmuş olmalıdır.
- mysql ve mysqldump komutlarının terminalden çalışması gerekir.
- Aşağıdaki Python paketi yüklü olmalıdır:
  → mysql-connector-python

Yükleme komutu:
pip install mysql-connector-python

4. Notlar:
----------
- `.sql` yedek dosyasının UTF-8 formatında olduğundan emin olun.
- Betikler Windows ve Linux sistemlerde çalışacak şekilde yazılmıştır.

