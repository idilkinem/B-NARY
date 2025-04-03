import subprocess
import os
# Kullanıcıdan şifre al (gizli şekilde)
mysql_user = "mehli"
mysql_db = "health_app"
mysql_password ="123456789m"

# Yedek dosyası adı
backup_file = os.path.join(
    os.path.dirname(__file__),
    os.path.pardir,
    "health_app_backup.sql"
)

# mysqldump komutu
command = [
    "mysqldump",
    f"--user={mysql_user}",
    f"--password={mysql_password}",
    "--default-character-set=utf8mb4",
    mysql_db
]

# Dosyaya yaz
with open(backup_file, "w", encoding="utf-8") as f:
    result = subprocess.run(command, stdout=f, stderr=subprocess.PIPE, text=True)

# Hata kontrolü
if result.returncode == 0:
    print(f"Yedekleme başarılı! → {backup_file}")
else:
    print("Bir hata oluştu:")
    print(result.stderr)
