import Image from "next/image";

const Hero = () =>{
    return(
        <div className="flex flex-row justify-between pt-[95px]">
            <div className="pl-[132px] pt-[152px] flex flex-col gap-[30px]">
                <div className="text-[#8D5CF6] text-base font-bold">Join Us</div>
                <div className="text-white text-[58px] leading-[80px] font-bold">25K+ STUDENTS <br/> TRUST US</div>
                <div className="text-white text-[20px] leading-[30px] ">Our goal is to make online education work <br/> for everyone</div>
                <div className="flex flex-row gap-[10px] text-white font-bold">
                    <div className="bg-[#8D5CF6] py-[15px] px-[40px] rounded-[5px]">Join Us</div>
                    <div className="border border-[#8D5CF6] py-[15px] px-[40px] rounded-[5px]">Learn More</div>
                </div>
            </div>
            <div className="pr-[32px]">
                <Image src="/Sergiu.png" alt="Erorr 404" width={641} height={750}/>
            </div>
        </div>
    )
}

export default Hero