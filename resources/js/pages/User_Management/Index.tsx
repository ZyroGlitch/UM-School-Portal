import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { UsersRound, Plus, Pencil, Trash2 } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User Management',
        href: '/user_management',
    },
];



export default function Index({ students, professors, activeTab }: { students: any[], professors: any[], activeTab: String }) {
    // console.log(students);

    const [role, setRole] = useState('Students');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Management" />
            <div className='p-6'>
                <div className="flex justify-between items-center gap-2 mb-[2rem]">
                    <div className="flex items-center gap-2">
                        <Link
                            href={route('sidebar.user_management', { role: 'students' })}
                        >
                            <p className={
                                `${activeTab === 'students' ? 'bg-green-500 text-white' : 'border-green-500'} 
                                text-[12px] flex justify-center items-center gap-1 rounded-full shadow border-2  py-2 px-4 
                                `}>
                                <UsersRound className='w-[16px] h-[16px]' /> Students
                            </p>
                        </Link>

                        <Link
                            href={route('sidebar.user_management', { role: 'professors' })}
                        >
                            <p className={
                                `${activeTab === 'professors' ? 'bg-green-500 text-white' : 'border-green-500'} 
                                text-[12px] flex justify-center items-center gap-1 rounded-full shadow border-2  py-2 px-4 
                                `}>
                                <UsersRound className='w-[16px] h-[16px]' /> Professors
                            </p>
                        </Link>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className="text-[12px] flex justify-center items-center gap-1 rounded-full shadow border-2 border-green-500 py-2 px-4 hover:bg-green-500 hover:text-white"
                        >
                            <Plus className='w-[16px] h-[16px]' /> Add User
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className='px-2 py-3'>
                            <Link href={route('user_management.add_student')}>
                                <DropdownMenuItem
                                    className='hover:!bg-green-500 hover:!text-white'
                                >
                                    Student
                                </DropdownMenuItem>
                            </Link>

                            <Link href={route('user_management.add_professor')}>
                                <DropdownMenuItem
                                    className='hover:!bg-green-500 hover:!text-white'
                                >
                                    Professor
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='font-semibold'>Student ID</TableHead>
                            <TableHead className="w-100 font-semibold">Name</TableHead>
                            <TableHead className='font-semibold'>Age</TableHead>
                            <TableHead className='font-semibold'>Sex</TableHead>
                            <TableHead className="w-100 font-semibold">Birth Place</TableHead>
                            <TableHead className="w-100 font-semibold">Birth Date</TableHead>
                            {students?.length > 0 && <TableHead className='font-semibold'>Year</TableHead>}
                            <TableHead className='font-semibold'>Department</TableHead>
                            <TableHead className='font-semibold'>Program</TableHead>
                            <TableHead className='font-semibold'>Status</TableHead>
                            <TableHead className='font-semibold'>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            students?.length > 0 ? (
                                students.map((student) => (
                                    <TableRow key={student.id}>
                                        <TableCell>{student.student_id}</TableCell>
                                        <TableCell>
                                            {student.firstname + ' ' + student.middlename + ', ' + student.surname}
                                        </TableCell>
                                        <TableCell>{student.age}</TableCell>
                                        <TableCell>{student.sex}</TableCell>
                                        <TableCell>{student.birth_place}</TableCell>
                                        <TableCell>{student.birth_date}</TableCell>
                                        <TableCell>{student.year_level}</TableCell>
                                        <TableCell>{student.department}</TableCell>
                                        <TableCell>{student.program}</TableCell>
                                        <TableCell>{student.status}</TableCell>
                                        <TableCell className='flex items-center gap-2'>
                                            <Button className='bg-yellow-200 text-dark hover:bg-yellow-300'>
                                                <Pencil /> Edit
                                            </Button>
                                            <Button className='bg-red-500 text-white hover:bg-red-600'>
                                                <Trash2 />
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                professors.map((professor) => (
                                    <TableRow key={professor.id}>
                                        <TableCell>{professor.student_id}</TableCell>
                                        <TableCell>
                                            {professor.firstname + ' ' + professor.middlename + ', ' + professor.surname}
                                        </TableCell>
                                        <TableCell>{professor.age}</TableCell>
                                        <TableCell>{professor.sex}</TableCell>
                                        <TableCell>{professor.birth_place}</TableCell>
                                        <TableCell>{professor.birth_date}</TableCell>
                                        <TableCell>{professor.department}</TableCell>
                                        <TableCell>{professor.program}</TableCell>
                                        <TableCell>{professor.status}</TableCell>
                                        <TableCell className='flex items-center gap-2'>
                                            <Button className='bg-yellow-200 text-dark hover:bg-yellow-300'>
                                                <Pencil /> Edit
                                            </Button>
                                            <Button className='bg-red-500 text-white hover:bg-red-600'>
                                                <Trash2 />
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )
                        }
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
