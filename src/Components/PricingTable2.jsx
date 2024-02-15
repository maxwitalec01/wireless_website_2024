export default function PricingTable2() {
    return (
        <section className="py-16">
            <div className="container px-4 mx-auto ">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <h2 className="text-4xl font-bold lg:text-5xl">Plans</h2>
                </div>
                <div className="flex justify-center">
                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-2/5 lg:mb-0">
                        <div className="relative flex flex-grow flex-col p-6 space-y-6 rounded shadow-2xl sm:p-8 border-2 border-yellow-500">
                            <div className="absolute -top-5 -right-3 bg-yellow-500 text-black px-5 py-3 rounded-full t font-bold ">No Minimum Contract</div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold">Residential Plan</h4>
                                <span className="text-6xl font-bold">€29.95
                                    <span className="text-sm tracki">/month (including vat)</span>
                                </span>
                            </div>
                            <br></br>
                            <ul className="flex-1 space-y-2">
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>UP TO <b>50MBPS</b> DOWNLOAD SPEED</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>UP TO 10MBPS UPLOAD SPEED</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>UNLIMITED USAGE LIMIT</span>
                                </li>
                                <li className="flex items-center space-x-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>INSTALLATION CHARGE FROM €49.95</span>
                                </li>
                            </ul>
                            <button className="bg-yellow-500 rounded-xl"><a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded">Contact Us</a></button>
                        </div>
                    </div>
                    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-2/5 lg:mb-0">
                        <div className="relative flex flex-grow flex-col p-6 space-y-6 rounded shadow-2xl sm:p-8 border-2 border-yellow-500">
                        <div className="absolute -top-5 -right-3 bg-yellow-500 text-black px-5 py-3 rounded-full t font-bold ">No Minimum Contract</div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold">Business Plan</h4>
                                <span className="text-6xl font-bold">€49.95
                                    <span className="text-sm tracki">/month (including vat)</span>
                                </span>
                            </div>
                            <br></br>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>UP TO <b>100MBPS</b> DOWNLOAD SPEED</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>UP TO 20MBPS UPLOAD SPEED</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>UNLIMITED USAGE LIMIT</span>
                                </li>
                                <li className="flex items-center space-x-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>INSTALLATION CHARGE FROM €49.95</span>
                                </li>
                            </ul>
                            <button className="bg-yellow-500 rounded-xl"><a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded ">Contact Us</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
