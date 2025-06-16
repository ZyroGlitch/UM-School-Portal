import logo from '../../../public/assets/logo.png';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md text-sidebar-primary-foreground">
                <img src={logo} alt="LOGO" className="cover" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 leading-tight font-semibold text-[16px] text-green-600 dark:text-green-400">
                    Sultan Kudarat State University
                </span>
            </div>
        </>
    );
}
