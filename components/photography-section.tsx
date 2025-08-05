"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface UnsplashPhoto {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  user: {
    name: string;
    username: string;
  };
}

export function PhotographySection() {
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // You'll need to add your Unsplash Access Key to environment variables
        const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
        
        if (!accessKey) {
          throw new Error("Unsplash access key not configured");
        }

        const response = await fetch(
          `https://api.unsplash.com/users/vybhavab/photos?per_page=6&order_by=popular`,
          {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch photos");
        console.error("Error fetching Unsplash photos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <section id="photography" className="mb-20 md:mb-28">
        <h2 className="text-3xl font-bold mb-8 text-center">Photography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="photography" className="mb-20 md:mb-28">
        <h2 className="text-3xl font-bold mb-8 text-center">Photography</h2>
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Unable to load photos from Unsplash</p>
          <Button asChild variant="outline">
            <Link href="https://unsplash.com/@vybhavab" target="_blank" rel="noopener noreferrer">
              View on Unsplash
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="photography" className="mb-20 md:mb-28">
      <h2 className="text-3xl font-bold mb-8 text-center">Photography</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={photo.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card className="overflow-hidden group-hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src={photo.urls.small}
                  alt={photo.alt_description || photo.description || "Photography by vybhavab"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  ❤️ {photo.likes}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="https://unsplash.com/@vybhavab" target="_blank" rel="noopener noreferrer">
            View More on Unsplash
          </Link>
        </Button>
        <p className="text-xs text-muted-foreground mt-2">
          Photos by{" "}
          <Link href="https://unsplash.com/@vybhavab" className="underline">
            vybhavab
          </Link>{" "}
          on{" "}
          <Link href="https://unsplash.com" className="underline">
            Unsplash
          </Link>
        </p>
      </div>
    </section>
  );
}