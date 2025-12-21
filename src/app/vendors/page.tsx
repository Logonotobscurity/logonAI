
"use client";

import { useState, useMemo, useCallback } from "react";
import { AgentCard } from "@/components/agent-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { agents, customMarketplaceCategories, industryCategories } from "@/lib/mock-data";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const AGENTS_PER_PAGE = 9;

export default function VendorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [industry, setIndustry] = useState('all');
  const [rating, setRating] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAgents = useMemo(() => {
    return agents.filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || agent.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'all' || agent.category === category;
      const matchesIndustry = industry === 'all' || agent.industry === industry;
      const matchesRating = rating === 'all' || agent.rating >= parseInt(rating);
      return matchesSearch && matchesCategory && matchesRating && matchesIndustry;
    });
  }, [searchQuery, category, industry, rating]);

  const totalPages = Math.ceil(filteredAgents.length / AGENTS_PER_PAGE);
  
  const currentAgents = useMemo(() => {
    return filteredAgents.slice(
      (currentPage - 1) * AGENTS_PER_PAGE,
      currentPage * AGENTS_PER_PAGE
    );
  }, [filteredAgents, currentPage]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  }, []);
  
  const handlePageChange = useCallback((page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  }, [totalPages]);


  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-4">Vendor Marketplace</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the perfect AI vendor to accelerate your business growth. Connect with vetted experts and activate intelligent solutions.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-background p-6 rounded-lg shadow-md">
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Find an AI vendor..." 
                  className="h-12 pl-10" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {customMarketplaceCategories.map(cat => (
                    <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
               <Select value={industry} onValueChange={setIndustry}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industryCategories.map(cat => (
                    <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={rating} onValueChange={setRating}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Rating</SelectItem>
                  <SelectItem value="5">5 stars</SelectItem>
                  <SelectItem value="4">4 stars & up</SelectItem>
                  <SelectItem value="3">3 stars & up</SelectItem>
                </SelectContent>
              </Select>
            </form>
          </div>
        </section>
        
        <section>
          {currentAgents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentAgents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-headline mb-2">No Vendors Found</h2>
              <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </section>

        {totalPages > 1 && (
          <section className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                    aria-disabled={currentPage === 1}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                   <PaginationItem key={page}>
                    <PaginationLink 
                      href="#"
                      isActive={currentPage === page}
                      onClick={(e) => { e.preventDefault(); handlePageChange(page); }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                    aria-disabled={currentPage === totalPages}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        )}

      </div>
    </div>
  );
}
