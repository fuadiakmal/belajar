"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";

export default function Page() {
   const [show, setShow] = useState(false);
   const [message, setMessage] = useState("");

   const handleClick = () => {
      setMessage("ini baru di klik");
      setShow(true);
   };
   return (
      <div className="mx-auto w-full max-w-2xl">
         <button onClick={handleClick}>SHow</button>
         <Dialog open={show} onOpenChange={() => setShow(false)}>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                     <Input defaultValue={message} />
                     <br />
                     <br />
                     <br />
                     <br />
                     <Input value={message} />
                  </DialogDescription>
               </DialogHeader>
            </DialogContent>
         </Dialog>
      </div>
   );
}
