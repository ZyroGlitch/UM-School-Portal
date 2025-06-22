"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

export function DateBirthPicker() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
        <div>
            <Label htmlFor='birthdate' className='text-neutral-600'>Birth Date</Label>
            <div>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            id="birthdate"
                            className="w-full justify-between font-normal"
                        >
                            {date ? format(date, 'PPP') : "Select date"}
                            <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            startMonth={new Date(1900, 0)}
                            endMonth={new Date(new Date().getFullYear(), 11)}
                            onSelect={(selectedDate) => {
                                setDate(selectedDate);
                                setOpen(false);
                            }}
                            autoFocus

                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}