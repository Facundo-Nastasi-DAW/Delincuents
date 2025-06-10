export const HeroBanner = () => {
    return (
        <div className="relative w-full h-96 bg-black mx-auto">
            <img
                src="https://placehold.co/1600x800"
                alt="Hero Banner"
                className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 sm:px-12 md:px-24 text-center">
                    <h2 className="font-extrabold text-4xl sm:text-6xl text-[var(--color-background)] leading-tight">
                        Lorem ipsum dolor sit amet
                    </h2>
                </div>
            </div>
        </div>
    );
}
