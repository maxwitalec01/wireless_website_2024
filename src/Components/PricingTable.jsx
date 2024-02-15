export default function PricingTable(){
    return(
        <div class="min-h-screen flex justify-center items-center">

           
                
                
                <div class="w-100 p-8 bg-white text-center rounded-xl text-black border-4 shadow-xl border-gray-200 transform scale-125">
                    <h1 class="text-black font-semibold text-2xl">50Mbps Plan 1</h1>
                    <p class="pt-2 tracking-wide">
                        <span class="text-black align-top">€ </span>
                        <span class="text-3xl font-semibold">29.95</span>
                        <span class="text-black font-medium">/ Per Month</span>
                    </p>
                    
                    <div className="pt-8">
                        <p class="font-semibold text-black text-left">
                            <span class="pl-2">
                                All features in <span class="text-black">UP TO 50MBPS DOWNLOAD SPEED</span>
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2">
                                Flexible <span class="text-black">UP TO 10MBPS UPLOAD SPEED</span>
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2">
                                <span class="text-black">UNLIMITED USAGE LIMIT</span>
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2">
                                <span class="text-black">INSTALLATION CHARGE FROM €49.95</span>
                            </span>
                        </p>
                        <p class="font-semibold text-black text-left pt-5">
                            <span class="pl-2">
                                <span class="text-black">NO MINIMUM CONTRACT</span>
                            </span>
                        </p>

                        <a href="#" class="">
                            <p class="w-full py-4 bg-amber-500 mt-8 rounded-xl text-black">
                                <span class="font-medium">
                                    Contact Us
                                </span>

                            </p>
                        </a>
                    </div>
                    <div class="absolute top-1 right-4">
                        <p class="bg-amber-500 font-semibold px-4 py-1 text-black rounded-full uppercase text-xs">Popular</p>
                    </div>
                </div>
                
              
            
        </div>
    
    )
}