import Image from 'next/image';

function Intro(){
    return(
        <div>
        <div id="intro-container" className="my-10 min-h-screen bg-amber-200
                                            flex justify-center items-center">
            <div id="intro-box" className="space-y-[40px] w-[500px] bg-amber-300/50 py-5 px-10
                                            absolute mr-[17vw] top-10 my-10" >
                <h1>CRM-lite is a strong tool for building and maintaining a client base.</h1>
                <p>Check out the feature that comes in this lite version. Free usage, easy-to-use and visualize your goals.</p>
                <button className='p-2 bg-amber-500/50'>See Features</button>
                <button className='p-2 hover:bg-blue-400/50'>Pricing</button>
            </div>
        
            <div className='shrink-0 flex justify center'>
                <Image src={'/600x400.svg'} width={600} height={400} alt='BG' layout='fixed'></Image>
            </div>
        </div>
        </div>
    )
};

export default Intro;