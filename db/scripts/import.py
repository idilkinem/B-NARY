import subprocess
import getpass
import os
import mysql.connector

# Bilgiler
mysql_user = "mehli"
mysql_password ="123456789m"
mysql_db = "health_app"
backup_file = backup_file = os.path.join(
    os.path.dirname(__file__),
    os.path.pardir,
    "health_app_backup.sql"
)


# 1. Veritabanı varsa yoksa oluştur
try:
    # root değil, kullanıcı olarak bağlantı (gerekirse root yap)
    connection = mysql.connector.connect(
        host="localhost",
        user=mysql_user,
        password=mysql_password
    )
    cursor = connection.cursor()
    cursor.execute(f"CREATE DATABASE IF NOT EXISTS {mysql_db}")
    print(f"Veritabanı kontrolü tamam: {mysql_db}")
except mysql.connector.Error as err:
    print("Veritabanı oluşturulamadı:", err)
    exit()
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()

# 2. .sql dosyası kontrolü
if not os.path.exists(backup_file):
    print(f"Dosya bulunamadı: {backup_file}")
    exit()

# 3. Yedeği içe aktar
command = [
    "mysql",
    f"-u{mysql_user}",
    f"-p{mysql_password}",
    mysql_db
]

with open(backup_file, "r", encoding="utf-8") as f:
    result = subprocess.run(command, stdin=f, stderr=subprocess.PIPE, text=True)

if result.returncode == 0:
    print("Yedek başarıyla içe aktarıldı!")
else:
    print("Hata oluştu:")
    print(result.stderr)
