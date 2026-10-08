import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function StudentInfo() {
    const [open, setOpen] = useState(false);

  return (
    // Use Drawer component to display student information
    <>
    <Drawer 
      open={open}
      onOpenChange={setOpen}
      swipeDirection={"right"}
    >
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle className="text-xl font-semibold">ข้อมูลนักศึกษา</DrawerTitle>
        <DrawerDescription>Student information</DrawerDescription>
      </DrawerHeader>
      
      <Card className="relative mx-auto w-80 max-w-sm my-auto">
        <img
          src="/Untitled.png"
          alt="img"
        />
        <CardHeader>
          <CardTitle>Lalitnapas Pasasuk</CardTitle>
          <CardDescription>
            นักศึกษาปี 2 ท่านหนึ่ง
          </CardDescription>
          <div className="py-1">
            <div className="my-2">
          <Badge>Hobby</Badge> นอน, นอน, นอน
            </div>
          
          <div className="my-2">
          <Badge>Email</Badge> lalitnapas_p@cmu.ac.th
            </div>

          <div className="my-2">
          <Badge>Social</Badge> instagram.com
          </div>
          </div>
        </CardHeader>
        <CardFooter>
          รหัสนักศึกษา 680610712
        </CardFooter>
      </Card>
      
      <DrawerFooter>
        <DrawerClose render={<Button/>}>Close</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
    </Drawer>

    <div className="flex-1 p-4">
      <Button 
        variant="outline"
        onClick={()=>setOpen(true)}>
        Lalitnapas Pasasuk
      </Button>
    </div>
    </>
  );
}
