import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
    NewPortfolioFormData,
    createPortfolio,
  } from "@/app/portfolios/actions";
import React, { useState } from "react";

type AddPortfolioFormProps = {
    fetchPortfolios: () => void;
  };

export default function AddPortfolioForm({ fetchPortfolios }: AddPortfolioFormProps) {

const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<NewPortfolioFormData>({
    name: "",
    type: "",
    currencyCode: "",
  });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        createPortfolio(formData)
          .then(() => {
            setShowForm(false);
            fetchPortfolios();
          });
      };

  return (
    <Dialog open={showForm} onOpenChange={setShowForm}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="mr-2 h-4 w-4" /> Add Portfolio
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Portfolio</DialogTitle>
          <DialogDescription>
            Enter the details of your new portfolio here.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="col-span-3"
                placeholder="ETFs portfolio"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Type</Label>
              <Input
                id="type"
                name="type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="col-span-3"
                placeholder="ETF"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right">Currency ISO Code</label>
              <Input
                id="currency"
                name="currency"
                value={formData.currencyCode}
                onChange={(e) =>
                  setFormData({ ...formData, currencyCode: e.target.value })
                }
                className="col-span-3"
                placeholder="CZK"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Investment</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
