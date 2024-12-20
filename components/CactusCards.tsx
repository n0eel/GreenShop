import Image from "next/image"
import Button from "./Button"

const CactusCards = () => {
    return (
        <div className="flex justify-between items-center mt-[200px]">
            <div className="flex items-center w-[580px]">
                <Image className="w-[292px] h-[292px]" src={"/images/summer-cactus.png"} alt="Summer cactus" width={292} height={292} />
                <div className="flex flex-col items-end text-end space-y-[20px]">
                    <h2 className="font-bold text-[20px] text-[#3D3D3D] w-[190px]">SUMMER CACTUS & SUCCULENTS</h2>
                    <p className="font-medium text-[13px] text-[#727272]">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <Button type="button" title="Find more ->" />
                </div>
            </div>
            <div className="flex items-center w-[580px]">
                <Image className="w-[292px] h-[292px]" src={"/images/winter-cactus.png"} alt="winter cactus" width={292} height={292} />
                <div className="flex flex-col items-end text-end space-y-[20px]">
                    <h2 className="font-bold text-[20px] text-[#3D3D3D] w-[190px]">STYLING TRENDS & MUCH MORE</h2>
                    <p className="font-medium text-[13px] text-[#727272]">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <Button type="button" title="Find more ->" />
                </div>
            </div>
        </div>
    )
}

export default CactusCards