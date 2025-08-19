
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { marketplaceProducts, reviews } from "@/lib/mock-data.tsx";
import { MessageCircle, Star, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";
import Image from 'next/image';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = marketplaceProducts.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  // Mock reviews for now
  const productReviews = reviews.filter((r) => r.agentId === '1').slice(0,2);
  const rating = 4.8;
  const reviewCount = 132;

  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="sticky top-24 overflow-hidden">
                <div className="relative h-64 w-full">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover"
                        data-ai-hint="automation solution"
                    />
                     {product.isTrending && (
                        <Badge className="absolute top-2 right-2" variant="destructive"><TrendingUp className="mr-1 h-4 w-4"/>Trending</Badge>
                    )}
                </div>
              <CardContent className="p-6">
                <p className="text-sm font-semibold text-primary mb-1 capitalize">{product.category.replace(/-/g, ' ')}</p>
                <h1 className="text-3xl font-bold font-headline">{product.name}</h1>
                <div className="flex items-center gap-1 mt-3 text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-lg font-bold text-foreground">{rating.toFixed(1)}</span>
                    <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <Button size="lg" className="w-full mt-6">
                    Activate Solution <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">About {product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-muted-foreground font-body">{product.description}</p>
                </CardContent>
            </Card>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Ratings & Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {productReviews.length > 0 ? productReviews.map(review => (
                            <div key={review.id} className="flex gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-semibold">{review.author}</p>
                                        <div className="flex items-center text-yellow-500">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current"/>
                                            ))}
                                            {[...Array(5 - review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-muted-foreground/50 fill-current"/>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground font-body">{review.comment}</p>
                                </div>
                            </div>
                        )) : <p className="text-muted-foreground">No reviews yet.</p>}
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
