import { login, register } from '@/routes';
import { Link } from '@inertiajs/react';
import { Button } from './ui/button';

function UserNotSignin() {
    return (
        <>
            <Link className="flex items-center space-x-4 mx-3 bg-gray-100 hover:bg-gray-200 hover:border-2 border-gray-200 rounded-md" href={register()}>
                <Button variant="ghost" className="p-1 text-lg">
                    Register
                </Button>
            </Link>
            <Link className="flex items-center space-x-4 mx-3 bg-gray-100 hover:bg-gray-200 hover:border-2 border-gray-200 rounded-md" href={login()}>
                <Button variant="ghost" className="p-1 text-lg">
                    Login
                </Button>
            </Link>
        </>
    );
}

export default UserNotSignin;
