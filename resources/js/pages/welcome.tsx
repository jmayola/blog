import { AppHeader } from '@/components/app-header';
import { dashboard, login, register } from '@/routes';
import { NavGroup, NavItem, type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const NavItems: NavItem[] = [{
        href: "/blog",
        title: "Blog",
    },{
        href: "/suma",
        title: "Suma",
    }]
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <AppHeader />
            <div>Hello</div>
        </>
    );
}
