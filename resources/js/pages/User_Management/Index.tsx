import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { UsersRound, Plus } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User Management',
        href: '/user_management',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Management" />
            <div className='p-6'>
                <div className="flex justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                        <Link href='#'>
                            <p className="text-[12px] flex justify-center items-center gap-1 rounded-full shadow border-2 border-green-500 py-2 px-4 hover:bg-green-500 hover:text-white">
                                <UsersRound className='w-[16px] h-[16px]' /> Students
                            </p>
                        </Link>

                        <Link href='#'>
                            <p className="text-[12px] flex justify-center items-center gap-1 rounded-full shadow border-2 border-green-500 py-2 px-4 hover:bg-green-500 hover:text-white">
                                <UsersRound className='w-[16px] h-[16px]' /> Professors
                            </p>
                        </Link>

                    </div>

                    {/* <Link href={route('user_management.add_user')}>
                        <p className="text-[12px] flex justify-center items-center gap-1 rounded-full shadow border-2 border-green-500 py-2 px-4 hover:bg-green-500 hover:text-white">
                            <Plus className='w-[16px] h-[16px]' /> Add User
                        </p>
                    </Link> */}
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className="text-[12px] flex justify-center items-center gap-1 rounded-full shadow border-2 border-green-500 py-2 px-4 hover:bg-green-500 hover:text-white"
                        >
                            <Plus className='w-[16px] h-[16px]' /> Add User
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className='px-2 py-3'>
                            <Link href='#'>
                                <DropdownMenuItem
                                    className='hover:!bg-green-500 hover:!text-white'
                                >
                                    Student
                                </DropdownMenuItem>
                            </Link>

                            <Link href='#'>
                                <DropdownMenuItem
                                    className='hover:!bg-green-500 hover:!text-white'
                                >
                                    Professor
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </AppLayout>
    );
}
