import Image from "next/image";

const Header = () =>{
    return (
        <div className="fixed px-[132px] py-[20px] w-full">
            <div className="flex items-center flex-row">
                <div className="text-white text-[24px] leading-[32px] py-[13px] pr-[42px] font-bold">BrandName</div>
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-[21px] text-[14px] leading-[24px] text-white">
                        <div>Home</div>
                        <div>Product</div>
                        <div>Pricing</div>
                        <div>Contact</div>
                    </div>
                    <div className="flex flex-row items-center gap-[45px] text-[14px] leading-[22px] font-bold">
                        <div className="text-white">Login</div>
                        <div className="py-[15px] px-[25px] text-white bg-[#8D5CF6] rounded-[5px] flex flex-row items-center gap-[15px]">
                            <div>JOIN US</div>
                            <Image src="arrow.svg" alt="Login" width={12} height={10}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;