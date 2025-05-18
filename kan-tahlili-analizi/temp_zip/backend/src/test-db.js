require('dotenv').config();
const db = require('./config/db');

async function testConnection() {
  try {
    const result = await db.query('SELECT NOW()');
    console.log('Veritabanı bağlantısı başarılı!');
    console.log('Sunucu zamanı:', result.rows[0].now);
    
    // Tabloları kontrol et
    const tables = await db.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);
    
    console.log('\nMevcut tablolar:');
    tables.rows.forEach(table => {
      console.log(`- ${table.table_name}`);
    });

  } catch (error) {
    console.error('Veritabanı bağlantı hatası:', error);
  } finally {
    process.exit();
  }
}

testConnection(); 