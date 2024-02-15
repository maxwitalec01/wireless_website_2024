import cheetah2 from "../assets/cheetah2.jpg";

export default function Header2() {
    return (
        <div className="relative">
            <img className="h-120" src={cheetah2} alt="Cheetah" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="text-5xl font-bold">Unlimited Wireless Broadband</h1>
                <h4 className="text-2xl py-4 font-bold">Available Across South Dublin</h4>
            </div>
        </div>
    );
}