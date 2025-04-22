function Pricing(){
    const pricingStyle= 'h-[700px] w-[300px] bg-blue-100/90 border-black border-1'
    return(
        <div>
        <div id="pricing-container" className="my-10 min-h-screen bg-amber-200
                                                flex flex-col justify-center items-center">
            <div id="pricing-box" className="w-auto space-y-5">
            <h1 className="text-6xl font-bold">Pricing</h1>
            <p className="font-semibold">Use CRM-lite for free for your whole team. Upgrade to enable advanced features and metrics. </p>
            </div>
            <div id='pricing container' className="flex flex-row items-center mx-auto text-center">
                <div id="Free" className={`${pricingStyle} h-[750px] w-[330px] rounded-2xl`}>Free</div>
                <div id="Basic" className={pricingStyle}>Basic</div>
                <div id="Business" className={pricingStyle}>Business</div>
                <div id="Enterprise" className={`${pricingStyle} rounded-r-2xl`}>Enterprise</div>
            </div>
        </div>
        </div>
    )
};

export default Pricing;