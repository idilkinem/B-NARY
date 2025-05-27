'use client';

import React, { useEffect, useState } from 'react';
import { NewsService } from '../services/NewsService';

interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  description: string | null;
  urlToImage: string | null;
  publishedAt: string;
}

export default function HealthNews() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsService = new NewsService();
        const articles = await newsService.getHealthNews(10);
        setNews(articles);
      } catch (err) {
        setError('Haberler yüklenirken bir hata oluştu.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Haberler yükleniyor...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Güncel Sağlık Haberleri</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {news.map((article, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            {article.urlToImage && (
              <img 
                src={article.urlToImage} 
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
            )}
            <h3 className="font-semibold mb-2">{article.title}</h3>
            {article.description && (
              <p className="text-gray-600 mb-3">{article.description}</p>
            )}
            <a 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Haberin devamını oku →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
} 