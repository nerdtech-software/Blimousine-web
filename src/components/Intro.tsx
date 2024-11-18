const Intro = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            {/* Video Background */}
            <div
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://www.restonlimo.com/wp-content/uploads/2024/04/restonlimo-hero.jpg"
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <source
                        src="https://www.restonlimo.com/wp-content/uploads/2024/04/restonlimo_hero_video_main.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            
            {/* Overlay Content */}
            <div className="relative z-10 flex items-center justify-start h-full p-7">
                <div>
                <h1
                    style={{
                        margin: '0 0 1rem calc(-0.6rem - 4px)',
                        paddingLeft: '2rem',
                        color: '#fff',
                        borderLeft: '5px solid #D91A2F',
                    }}
                    className="text-5xl font-bold"
                >
                    We Always <br /> Care Your Trip
                </h1>
                <button className="text-white bg-Fire hover:bg-Fire-500 focus:ring-4 focus:ring-Fire-300 font-medium rounded-lg text-sm px-10 py-3 mt-4 dark:bg-Fire-600 dark:hover:bg-red-900 focus:outline-none dark:focus:ring-red-800">
                <a href="tel:+1800229933">Call Me</a>
                    </button>
            </div>
            </div>
            
        </div>
    );
};

export default Intro;
