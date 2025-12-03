import { NavItem } from '@/types';
import { Github, Mail, Twitter } from 'lucide-react';
import AppLogoIcon from './app-logo-icon';
import { Icon } from './ui/icon';

const footerNavItems: NavItem[] = [
    {
        href: 'mailto:hello@mayola.net.ar',
        icon: Mail,
    },
    {
        href: 'https://x.com/julian_mayola/',
        icon: Twitter,
    },
    {
        href: 'https://github.com/jmayola/',
        icon: Github,
    },
];
const termsNavItems: NavItem[] = [
    {
        title: 'Privacy policy',
        href: 'mailto:hello@mayola.net.ar',
    },
    {
        title: 'Terms of service',
        href: 'https://x.com/julian_mayola/',
    },
];

function Footer() {
    return (
        <footer className="py-6 dark:bg-gray-100 dark:text-gray-900">
            <div className="divide-opacity-50 container mx-auto space-y-6 divide-y px-6 md:space-y-12 dark:divide-gray-600">
                <div className="grid grid-cols-12">
                    <div className="col-span-full pb-6 md:col-span-6 md:pb-0">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="flex justify-center space-x-3 md:justify-start"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full dark:bg-violet-600">
                                <AppLogoIcon />
                            </div>
                            <span className="self-center text-2xl font-semibold">
                                Mayola's Blog
                            </span>
                        </a>
                    </div>
                    <div className="col-span-6 text-center md:col-span-3 md:text-left">
                        <p className="pb-1 text-lg font-medium">Selected</p>
                        <ul>
                            {/* here should be a collection of blogs, hope i remember lol */}
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="hover:dark:text-violet-600"
                                >
                                    Link
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="hover:dark:text-violet-600"
                                >
                                    Link
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="hover:dark:text-violet-600"
                                >
                                    Link
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="hover:dark:text-violet-600"
                                >
                                    Link
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="hover:dark:text-violet-600"
                                >
                                    Link
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:col-span-3 md:text-left">
                        <p className="pb-1 text-lg font-medium">Category</p>
                        <ul>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="hover:dark:text-violet-600"
                                >
                                    Link
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="hover:dark:text-violet-600"
                                >
                                    Link
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="hover:dark:text-violet-600"
                                >
                                    Link
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="hover:dark:text-violet-600"
                                >
                                    Link
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="hover:dark:text-violet-600"
                                >
                                    Link
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
                        <span>Mayola © 2025 All rights reserved</span>
                        {termsNavItems.map((item) => (
                            <a rel="noopener noreferrer" href={item.href}>
                                <span>{item.title}</span>
                            </a>
                        ))}
                    </div>
                    <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
                        {footerNavItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 font-medium"
                            >
                                {item.icon && (
                                    <Icon
                                        iconNode={item.icon}
                                        className="h-5 w-5"
                                    />
                                )}
                                <span>{item.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
