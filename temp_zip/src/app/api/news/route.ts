import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pageSize = searchParams.get('pageSize') || '10';
  const page = searchParams.get('page') || '1';
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=(+sağlık +bilim)&language=tr&sortBy=publishedAt&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return NextResponse.json(data);
} 