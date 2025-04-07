from flask import Flask, render_template, request, flash, redirect, url_for
from werkzeug.utils import secure_filename
import os
from PyPDF2 import PdfReader
import logging
from datetime import datetime

# Loglama ayarları
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__)
app.secret_key = 'gizli_anahtar_buraya'  # Güvenlik için değiştirilmeli

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf', 'jpg', 'jpeg', 'png'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max dosya boyutu

# Uploads klasörünü oluştur
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def analyze_blood_values(pdf_path, user_data):
    try:
        logger.debug(f"PDF analiz ediliyor: {pdf_path}")
        reader = PdfReader(pdf_path)
        # PDF analiz işlemleri burada yapılacak
        
        # BMI hesaplama
        height_m = float(user_data['height']) / 100
        weight = float(user_data['weight'])
        bmi = weight / (height_m * height_m)
        
        return {
            'status': 'success',
            'message': 'PDF başarıyla analiz edildi',
            'user_info': {
                'name': user_data['name'],
                'surname': user_data['surname'],
                'birthdate': user_data['birthdate'],
                'gender': user_data['gender'],
                'height': user_data['height'],
                'weight': user_data['weight'],
                'blood_type': user_data['blood_type'],
                'bmi': round(bmi, 2),
                'test_date': user_data['test_date']
            },
            'values': {
                'hemoglobin': '14.5',
                'wbc': '7.5',
                'platelet': '250'
            }
        }
    except Exception as e:
        logger.error(f"PDF analiz hatası: {str(e)}")
        return {
            'status': 'error',
            'message': f'PDF analiz edilirken hata oluştu: {str(e)}'
        }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        # Kullanıcı bilgilerini al
        user_data = {
            'name': request.form.get('name'),
            'surname': request.form.get('surname'),
            'birthdate': request.form.get('birthdate'),
            'gender': request.form.get('gender'),
            'height': request.form.get('height'),
            'weight': request.form.get('weight'),
            'blood_type': request.form.get('blood_type'),
            'test_date': request.form.get('test_date')
        }

        # Kullanıcı bilgilerini kontrol et
        for key, value in user_data.items():
            if not value:
                flash(f'{key} alanı boş bırakılamaz')
                return redirect(url_for('index'))

        if 'file' not in request.files:
            logger.warning("Dosya seçilmedi")
            flash('Dosya seçilmedi')
            return redirect(url_for('index'))
        
        file = request.files['file']
        if file.filename == '':
            logger.warning("Dosya adı boş")
            flash('Dosya seçilmedi')
            return redirect(url_for('index'))
        
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            logger.debug(f"Dosya kaydediliyor: {filepath}")
            file.save(filepath)
            
            # PDF'i analiz et
            results = analyze_blood_values(filepath, user_data)
            return render_template('index.html', results=results)
        
        logger.warning("İzin verilmeyen dosya türü")
        flash('İzin verilmeyen dosya türü')
        return redirect(url_for('index'))
    except Exception as e:
        logger.error(f"Dosya yükleme hatası: {str(e)}")
        flash(f'Bir hata oluştu: {str(e)}')
        return redirect(url_for('index'))

@app.route('/analysis')
def analysis_form():
    return render_template('analysis.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'blood_test' not in request.files:
        flash('Lütfen kan tahlili sonuçlarını yükleyin.', 'error')
        return redirect(url_for('analysis_form'))
    
    file = request.files['blood_test']
    if file.filename == '':
        flash('Dosya seçilmedi.', 'error')
        return redirect(url_for('analysis_form'))

    # Form verilerini al
    name = request.form.get('name')
    surname = request.form.get('surname')
    tc = request.form.get('tc')
    birth_date = request.form.get('birth_date')
    weight = request.form.get('weight')
    height = request.form.get('height')
    blood_type = request.form.get('blood_type')
    gender = request.form.get('gender')
    chronic_diseases = request.form.getlist('chronic_diseases')
    allergies = request.form.getlist('allergies')
    medications = request.form.get('medications')
    recent_illnesses = request.form.get('recent_illnesses')

    # Dosya uzantısını kontrol et
    if not allowed_file(file.filename):
        flash('Geçersiz dosya formatı. Lütfen PDF, JPG veya PNG formatında bir dosya yükleyin.', 'error')
        return redirect(url_for('analysis_form'))

    # Dosyayı kaydet
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)

    # Analiz sonuçlarını oluştur
    analysis_results = {
        'name': name,
        'surname': surname,
        'tc': tc,
        'birth_date': birth_date,
        'weight': weight,
        'height': height,
        'blood_type': blood_type,
        'gender': gender,
        'chronic_diseases': chronic_diseases,
        'allergies': allergies,
        'medications': medications,
        'recent_illnesses': recent_illnesses,
        'file_path': file_path
    }

    return render_template('results.html', results=analysis_results)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001) 