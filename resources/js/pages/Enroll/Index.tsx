import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Enroll Course',
        href: '/enroll',
    },
];

type AuthUser = {
    name: string;
    // add other user properties if needed
};

type PageProps = {
    auth: {
        user?: AuthUser;
    };
};

export default function Index() {
    const { auth } = usePage<PageProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Enroll Course" />
            <div>
                <h1 className="text-4xl font-bold text-center">Enroll Course Page</h1>
                <h4 className="text-xl font-bold text-center">{auth.user ? auth.user.name : ''}</h4>
            </div>
        </AppLayout>
    );
}
