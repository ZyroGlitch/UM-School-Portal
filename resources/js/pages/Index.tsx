
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import logo from '../../../public/assets/logo.png';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Index() {

    const { flash } = usePage().props as unknown as { flash: { error?: string, success?: string } };

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: ''
    })

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post(route('authentication'), {
            onSuccess() {
                reset();
            }
        });
    }

    useEffect(() => {
        if (flash.success) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: flash.success,
                confirmButtonColor: '#28a745'
            });
        } else if (flash.error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: flash.error,
                confirmButtonColor: '#dc3545'
            });
        }
    }, [flash]);

    return (
        <div>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div
                className="h-screen relative"
                style={{
                    backgroundImage: 'url(/assets/background.jpg)', // ✅ No import needed, direct URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full "></div>

                <div className="flex justify-center items-center relative h-screen">
                    <Card className='w-[450px] bg-white'>
                        <CardHeader className='flex justify-center items-center'>
                            <img src={logo} alt="LOGO" className="contain w-[120px] h-[120px]" />
                            <h1 className='text-4xl font-bold text-green-700'>STUDENT PORTAL</h1>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={submit}>
                                <div className="mb-[1rem]">
                                    <Input
                                        type='email'
                                        placeholder="Email"
                                        className="h-[45px] shadow focus-visible:!ring-2 focus-visible:!ring-green-600 focus-visible:ring-offset-0"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    {
                                        errors.email && (
                                            <p className='text-red-500 text-sm mt-[0.5rem]'>
                                                {errors.email}
                                            </p>
                                        )
                                    }
                                </div>
                                <div className="mb-[1rem]">
                                    <Input
                                        type='password'
                                        placeholder='Password'
                                        className='h-[45px] shadow focus-visible:!ring-2 focus-visible:!ring-green-600 focus-visible:ring-offset-0'
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                    />

                                    {
                                        errors.password && (
                                            <p className='text-red-500 text-sm mt-[0.5rem]'>
                                                {errors.password}
                                            </p>
                                        )
                                    }
                                </div>

                                <Link href='#' className="flex justify-end mb-[1.5rem]">
                                    <Label className='hover:underline'>Forgot your password?</Label>
                                </Link>

                                <Button
                                    type='submit'
                                    className='bg-green-700 h-[50px] w-full text-md hover:bg-green-600'
                                    disabled={processing}
                                >
                                    Login
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    );
}
