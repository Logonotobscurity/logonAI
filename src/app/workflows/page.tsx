
"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { workflows, workflowCategories } from '@/lib/mock-data';
import { ArrowRight, PlusCircle, Search } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function TaskLibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filteredWorkflows = useMemo(() => {
    return workflows.filter(workflow => {
      const matchesSearch = workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) || workflow.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'all' || workflow.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, category]);

  return (
    <div className="bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-4">Task Library</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our library of pre-built workflows to automate your business processes in minutes.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-background p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
              <div className="sm:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Filter workflows..."
                  className="h-12 pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {workflowCategories.map(cat => (
                    <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>
        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="md:col-span-1 lg:col-span-1 bg-primary text-primary-foreground flex flex-col justify-center items-center text-center p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                    <PlusCircle className="h-12 w-12 mx-auto mb-4" />
                    <CardTitle className="font-headline text-2xl">Request Custom Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">Need something more specific? Our team can design and build a custom workflow tailored to your exact needs.</p>
                    <Button variant="secondary" asChild>
                        <Link href="/contact">Book a Call</Link>
                    </Button>
                </CardContent>
            </Card>

            {filteredWorkflows.map((workflow) => (
              <Card key={workflow.id} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{workflow.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit capitalize">{workflow.category}</Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{workflow.description}</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full">
                        Use Workflow <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

    