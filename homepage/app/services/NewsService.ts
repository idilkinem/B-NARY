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
    this.apiKey = 'd2596c371e6d4dc5b746bf558423a3e4' // TODO: API key'i gizlemek için .env dosyası kullanılacak
  }

  /**
   * Sağlık ile ilgili haberleri getirir
   * @param pageSize Sayfa başına haber sayısı
   * @returns Haber listesi
   */
  async getHealthNews(pageSize: number = 20): Promise<NewsArticle[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/everything?` + 
        new URLSearchParams({
          q: 'sağlık',
          language: 'tr',
          sortBy: 'publishedAt',
          pageSize: pageSize.toString(),
          apiKey: this.apiKey
        })
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: NewsResponse = await response.json();
      console.log(`Toplam sonuç: ${data.totalResults}`);
      return data.articles;
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