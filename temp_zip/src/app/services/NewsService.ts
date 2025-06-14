interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

export class NewsService {
  private readonly apiKey: string;
  private readonly baseUrl: string = 'https://newsapi.org/v2';

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY as string;
  }

  /**
   * Sağlık ile ilgili haberleri getirir
   * @param pageSize Sayfa başına haber sayısı
   * @param page Sayfa numarası
   * @returns Haber listesi
   */
  async getHealthNews(pageSize: number = 10, page: number = 1): Promise<NewsArticle[]> {
    try {
      const response = await fetch(`/api/news?pageSize=${pageSize}&page=${page}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: NewsResponse = await response.json();
      const articles = data.articles || [];
      // Fisher–Yates shuffle ile karıştır
      for (let i = articles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [articles[i], articles[j]] = [articles[j], articles[i]];
      }
      return articles.slice(0, pageSize);
    } catch (error) {
      console.error('Haberler alınırken bir hata oluştu:', error);
      throw error;
    }
  }
  

  /**
   * Haberleri formatlanmış şekilde getirir
   * @param pageSize Sayfa başına haber sayısı
   * @returns Formatlanmış haber listesi
   */
  async getFormattedHealthNews(pageSize: number = 20): Promise<string[]> {
    const articles = await this.getHealthNews(pageSize);
    return articles.map(article => 
      `- ${article.title} (${article.source.name})\n  ${article.url}`
    );
  }
} 