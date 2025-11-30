import Blog, { BlogType } from '@/components/Blog';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];
type ArrayObject<T> = {
    [P in keyof T]: [T[P]];
};

type BlogResult = ArrayObject<BlogType>;

export default function Dashboard({ results }: BlogResult) {
    const [Search, SetSearch] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            var arr = location.href.split('?');
            if (arr.length > 1 && arr[1] !== '') {
                SetSearch(true);
            }
        }, 2000);
    }, []);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            {Search && (
                <span className="m-auto p-2 text-2xl text-black lg:text-4xl">
                    Resultados de la busqueda
                </span>
            )}
            <div className="flex h-full flex-1 flex-col gap-4 overflow-scroll overflow-x-auto overflow-y-visible rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {results.map((val) => {
                        return (
                            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                                <Blog results={val} />
                            </div>
                        );
                    })}
                    </div>
            </div>
            <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
            </div>
        </AppLayout>
    );
}
