import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { UsersRound, Plus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add User',
        href: '/user_management/add_user',
    },
];

export default function AddUser() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add User" />
            <div className='p-6'>
                <div className="mb-4">
                    <h1 className="text-2xl font-bold text-green-700">Add User</h1>
                    <p className="text-sm text-neutral-400">Register a new user to the system</p>
                </div>

                <Card className='w-[500px] bg-white'>
                    <CardHeader>

                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </AppLayout>
    );
}
