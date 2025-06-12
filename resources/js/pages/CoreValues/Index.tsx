import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Mission & Vision',
        href: '/core-values',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Mission & Vision" />
            <div>
                <h1 className="text-4xl font-bold text-center">Mission & Vision Page</h1>
            </div>
        </AppLayout>
    );
}
