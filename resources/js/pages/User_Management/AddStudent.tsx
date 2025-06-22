import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Calendar } from "@/components/ui/calendar"
import { DateBirthPicker } from '@/components/ui/date-birth-picker';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDownIcon } from 'lucide-react';
import { format } from "date-fns";
import React from 'react';
import { toast, Toaster } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User Management / Add Student',
        href: '/user_management/add_user',
    },
];

// Department to courses mapping
const departmentCourses: Record<string, string[]> = {
    "College of Computing Education": [
        "BS Computer Science",
        "BS Information Technology",
        "BS Information Systems"
    ],
    "College of Arts and Sciences Education": [
        "BA English",
        "BA Psychology",
        "BA Political Science"
    ],
    "College of Hospitality Education": [
        "BS Hospitality Management",
        "BS Tourism Management"
    ]
};

export default function AddStudent() {
    const [selectedDept, setSelectedDept] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    // Usestate for Calendar
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    const [birthDateString, setBirthDateString] = useState<string | null>(null);

    // Reset course when department changes
    useEffect(() => {
        setSelectedCourse('');
    }, [selectedDept]);

    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        middlename: '',
        age: '',
        birth_place: '',
        birthdate: '',
        sex: '',
        year: '',
        department: '',
        program: '',
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        post(route('user_management.store_student'), {
            onSuccess() {
                reset(); // Reset form data on success
            }
        });
    }

    // Use useEffect to trigger toast notifications
    const { flash } = usePage().props as unknown as { flash: { success?: string; error?: string } };

    useEffect(() => {
        flash.success ? toast.success(flash.success) : null;
        flash.error ? toast.error(flash.error) : null;
    }, [flash]);


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Management / Add User" />
            <div className='p-6'>
                {/* Initialize the Sooner Toaster */}
                <Toaster position='top-right' expand={true} richColors className='z-50' />

                <form onSubmit={submit}>
                    <div className="mb-[2rem]">
                        <h1 className="text-2xl font-bold text-green-700">Add Student</h1>
                        <p className="text-sm text-neutral-600">Register a new student to the system</p>
                    </div>

                    <h4 className="text-xl font-bold text-slate-700 mb-2">
                        Personal Information
                    </h4>
                    <div className="grid grid-cols-1 gap-x-[2rem] gap-y-[1rem] mb-[2rem] sm:grid-cols-3">
                        <div>
                            <Label htmlFor='firstname' className='text-neutral-600'>Firstname</Label>
                            <Input
                                id='firstname'
                                className='focus-visible:!ring-1 focus-visible:!ring-green-500 shadow'
                                value={data.firstname}
                                onChange={e => setData('firstname', e.target.value)}
                            />
                        </div>

                        <div>
                            <Label htmlFor='lastname' className='text-neutral-600'>Lastname</Label>
                            <Input
                                id='lastname'
                                className='focus-visible:!ring-1 focus-visible:!ring-green-500 shadow'
                                value={data.lastname}
                                onChange={e => setData('lastname', e.target.value)}
                            />
                        </div>

                        <div>
                            <Label htmlFor='middlename' className='text-neutral-600'>Middle Name</Label>
                            <Input
                                id='middlename'
                                className='focus-visible:!ring-1 focus-visible:!ring-green-500 shadow'
                                value={data.middlename}
                                onChange={e => setData('middlename', e.target.value)}
                            />
                        </div>

                        <div>
                            <Label htmlFor='age' className='text-neutral-600'>Age</Label>
                            <Input
                                type='number'
                                id='age'
                                className='focus-visible:!ring-1 focus-visible:!ring-green-500 shadow'
                                value={data.age}
                                onChange={e => setData('age', e.target.value)}
                            />
                        </div>

                        <div>
                            <Label htmlFor='birthplace' className='text-neutral-600'>Birth Place</Label>
                            <Input
                                id='birthplace'
                                className='focus-visible:!ring-1 focus-visible:!ring-green-500 shadow'
                                value={data.birth_place}
                                onChange={e => setData('birth_place', e.target.value)}
                            />
                        </div>

                        <div>
                            {/* <DateBirthPicker
                            /> */}
                            <Label htmlFor='birthdate' className='text-neutral-600'>Birth Date</Label>
                            <div>
                                <Popover open={open} onOpenChange={setOpen} >
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
                                    <PopoverContent className="w-auto p-0" align="start" >
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            captionLayout="dropdown"
                                            startMonth={new Date(1900, 0)}
                                            endMonth={new Date(new Date().getFullYear(), 11)}
                                            onSelect={(selectedDate) => {
                                                setDate(selectedDate);
                                                const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '';
                                                setBirthDateString(formattedDate);
                                                setData('birthdate', formattedDate); // ✅ update form data
                                                setOpen(false);
                                            }}
                                            autoFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>

                        <div>
                            <Label htmlFor='sex' className='text-neutral-600'>Sex</Label>
                            <Select
                                value={data.sex}
                                onValueChange={value => setData('sex', value)}
                            >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Sex" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectItem value="Male">Male</SelectItem>
                                    <SelectItem value="Female">Female</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <hr className="mb-[2rem]" />

                    <h2 className="text-xl font-bold text-slate-700 mb-2">
                        Department & Program
                    </h2>
                    <div className="grid grid-cols-1 gap-x-[2rem] gap-y-[1rem] mb-[2rem] sm:grid-cols-3">
                        <div>
                            <Label htmlFor='year-level' className='text-neutral-600'>Year Level</Label>
                            <Select
                                value={data.year}
                                onValueChange={value => setData('year', value)}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select year level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1st Year">1st Year</SelectItem>
                                    <SelectItem value="2nd Year">2nd Year</SelectItem>
                                    <SelectItem value="3rd Year">3rd Year</SelectItem>
                                    <SelectItem value="4th Year">4th Year</SelectItem>
                                    <SelectItem value="5th Year">5th Year</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor='department' className='text-neutral-600'>Department</Label>
                            <Select
                                onValueChange={(value) => {
                                    setSelectedDept(value);
                                    setData('department', value); // ✅ update form data
                                }}
                                value={selectedDept}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.keys(departmentCourses).map((dept) => (
                                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor='course' className='text-neutral-600'>Program</Label>
                            <Select
                                value={selectedCourse}
                                onValueChange={(value) => {
                                    setSelectedCourse(value);
                                    setData('program', value); // ✅ update form data
                                }}
                                disabled={!selectedDept}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder={selectedDept ? "Select course" : "Select department first"} />
                                </SelectTrigger>
                                <SelectContent>
                                    {selectedDept && departmentCourses[selectedDept]?.map((course) => (
                                        <SelectItem key={course} value={course}>{course}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <Button
                        type='submit'
                        className='bg-green-600 hover:bg-green-500 w-[200px]'
                        disabled={processing}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}
