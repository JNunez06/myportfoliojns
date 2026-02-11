interface ContainerPageProps {
    children: React.ReactNode
    offsetTop?: string
}

const ContainerPage = ({ children, offsetTop = "mt-12" }: ContainerPageProps) => {
    return (
        <div className={`w-full max-w-6xl px-4 pb-40 mx-auto md:pb-0 md:px-6 ${offsetTop}`}>
            {children}
        </div>
    );
}

export default ContainerPage;
