import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { CategoryCards } from "./CategoryCards";
import { OverviewCards } from "./OverviewCards";

import { LayoutGrid, ChartBar } from 'lucide-react';

export function DashboardTabs() {
  return (
    <div className="w-full">
      <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger 
          className="text-xl" 
          value="overview">
            <ChartBar/> Overview
        </TabsTrigger>
        
        <TabsTrigger 
          className="text-xl" 
          value="category">
            <LayoutGrid/> By Category
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <OverviewCards/>
      </TabsContent>
      <TabsContent value="category">
        <CategoryCards/>
      </TabsContent>
    </Tabs>
    </div>
  );
}
