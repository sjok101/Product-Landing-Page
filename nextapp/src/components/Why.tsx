import Image from 'next/image';

function Why(){
    return(
        <div>
        <div id="why-container" className="my-10 min-h-screen bg-lime-200">
            <div id="why-box" className="flex flex-col items-center space-y-5">
            <h1>Why</h1>
            <p>Why Choose [Product Name]?</p>
            <p>With so many options out there, why [Product Name]? The answer is simple: efficiency, innovation, and reliability. Designed with [Target Audience] in mind, [Product Name] stands out by offering [Key Unique Feature or Benefit]. Unlike traditional solutions that [Describe Limitations of Competitors or Standard Solutions], [Product Name] delivers [Primary Benefit], making it the preferred choice for [Audience’s Common Goal or Need].</p>
            
            <Image src="/600x400.svg" alt='placeholder' width={600} height={400}></Image>
            <a id="learn-more-button"  href="/">Learn More</a>
           
            <p>Here’s what sets [Product Name] apart:</p>
             
                <ol>
                <li>[Feature #1]: Get the results you need faster with [specific capability or advantage].</li>
                <li>[Feature #2]: [Product Name] integrates seamlessly with [other platforms, tools, or technologies your audience uses].</li>
                <li>[Feature #3]: Experience unmatched [reliability, scalability, customization—choose relevant quality].</li>
                </ol>
                <p>
                Whether you're [Primary Audience Activity or Task], [Product Name] streamlines the process, helping you [Positive Outcome or Goal Achieved].
            </p>
            </div>
        </div>
        </div>
    )
};

export default Why;