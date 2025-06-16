import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { UsersRound, MoveRight, BookOpenText } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            {/* <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
                <div className="bg-green-500 min-h-[150px] rounded-lg shadow-lg text-white p-4 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold">5,000</h2>
                            <h4 className="text-base">Total Students</h4>
                        </div>

                        <UsersRound className='w-[50px] h-[50px] bg-green-400 p-3 rounded-lg' />
                    </div>

                    <Link href='#' className='flex justify-end'>
                        <Label className='text-md flex items-center gap-2 hover:text-green-700'>More Information <MoveRight /></Label>
                    </Link>
                </div>

                <div className="bg-blue-500 min-h-[150px] rounded-lg shadow-lg text-white p-4 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold">100</h2>
                            <h4 className="text-base">Total Professors</h4>
                        </div>

                        <UsersRound className='w-[50px] h-[50px] bg-blue-400 p-3 rounded-lg' />
                    </div>

                    <Link href='#' className='flex justify-end'>
                        <Label className='text-md flex items-center gap-2 hover:text-blue-700'>More Information <MoveRight /></Label>
                    </Link>
                </div>

                <div className="bg-yellow-500 min-h-[150px] rounded-lg shadow-lg text-white p-4 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold">10</h2>
                            <h4 className="text-base">Total Programs</h4>
                        </div>

                        <BookOpenText className='w-[50px] h-[50px] bg-yellow-400 p-3 rounded-lg' />
                    </div>

                    <Link href='#' className='flex justify-end'>
                        <Label className='text-md flex items-center gap-2 hover:text-yellow-700'>More Information <MoveRight /></Label>
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
