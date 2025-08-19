"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { MarketplaceProduct } from "@/lib/types";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: MarketplaceProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
       <CardHeader className="p-0">
        <div className="relative h-48 w-full">
            <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint="automation workflow"
            />
            {product.isTrending && (
                <Badge className="absolute top-2 right-2" variant="destructive"><TrendingUp className="mr-1 h-4 w-4"/>Trending</Badge>
            )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <p className="text-sm font-semibold text-primary mb-1 capitalize">{product.category.replace(/-/g, ' ')}</p>
        <h3 className="font-headline text-xl mb-2 font-bold truncate">{product.name}</h3>
        <p className="font-body text-sm text-muted-foreground mb-4 h-20 overflow-hidden text-ellipsis">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          {product.tags.slice(0,3).map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/product/${product.id}`} passHref className="w-full">
          <Button className="w-full" >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
