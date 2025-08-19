import { AgentCard } from "@/components/agent-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { agents } from "@/lib/mock-data";
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

const marketplaceCategories = [
  { value: 'automation-ops', label: 'Automation Ops' },
  { value: 'assistant-tools', label: 'Assistant Tools' },
  { value: 'process-mining', label: 'Process Mining' },
  { value: 'integration-services', label: 'Integration Services' },
];

const industryCategories = [
  { value: 'finance', label: 'Finance' },
  { value: 'hr', label: 'Human Resources' },
  { value: 'retail', label: 'Retail' },
  { value: 'marketing', label: 'Marketing' },
]

export default function MarketplacePage() {
  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-4">Marketplace</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the perfect AI agent or solution to accelerate your business growth. Connect with vetted experts and activate intelligent solutions.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-background p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="md:col-span-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Find an AI agent or solution..." className="h-12 pl-10" />
                </div>
              </div>
              <div className="md:col-span-1">
                 <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {marketplaceCategories.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
               <div className="md:col-span-1">
                 <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industryCategories.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="h-12 md:col-span-1">Search</Button>
            </div>
          </div>
        </section>
        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>

        <section className="mt-12">
           <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>

      </div>
    </div>
  );
}
