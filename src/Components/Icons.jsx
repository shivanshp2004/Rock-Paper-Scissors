import Icon from "./Icon"

const Icons = () => {
  return (
    <div className="w-full h-[250px] flex justify-center items-center mt-[40px]" >
        <Icon image="../../../Rock-Paper-Scissors/src/assets/fist.png" move="Rock" />
        <Icon image ="../../../Rock-Paper-Scissors/src/assets/hand-paper.png" move="Paper"/>
        <Icon image="../../../Rock-Paper-Scissors/src/assets/scissors (1).png" move="Scissors"/>
    </div>
  )
}

export default Icons