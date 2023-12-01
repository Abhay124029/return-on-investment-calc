import { createContext, useContext,useState } from "react";


// creating context

export const roiContext = createContext();

export function useCustomRoiContext () {
    const value = useContext(roiContext)
    return value;
}

// Providing context 

export function CreateRoiContext ({children}) {
        // For Togggling Details Component
        const [showData, setShowData] = useState(false)

        // For creating States For TimeFrame/ApyComp Component
        const [activeButton, setActiveButton] = useState(null);
        const [activeButton2, setActiveButton2] = useState(null);

        // for toggling toggleSwitch
        const [isOn, setIsOn] = useState(false);
        const [AnotherIsOn, AnotherSetIsOn] = useState(false);

         // for toggling icons in InputApy
         const [icon, setIcon] = useState(false)
         const [showIcon,setShowIcon] = useState(false)

        // State for getting input in inputWithToggle Component
        const [input, setInput] = useState("0.0000")

        // State for getting input in inputApy
            const [input2, setInput2] = useState("0.00")

       // Onclick for deatils Compoenent
        const handleClick = () => {
        setShowData(!showData)
    }

    // onClick for toggling Input Component
    const handleToggle = () => {
        setIsOn((prevIsOn) => !prevIsOn);
      };
      const AnotherHandleToggle = () => {
        AnotherSetIsOn((prevAnotherIsOn) => !prevAnotherIsOn);
      };



    // onClick for timeframe/ApyComp buttons
    const buttonClick = (value) => {
        setActiveButton(value);
      };

      const buttonClick2 = (value) => {
        setActiveButton2(value);
      };

      // onClick to get values from buttons in inputfield

      const handleButtonClick = (value) => {
        setInput(value.toString());
      };

      // onClick to toggleIcons in inputApy

      const handleIcon = () => {
        if (!showIcon) {
            setIcon(!icon);
            setShowIcon(true);
          }
      }

      const cancelIcon = () => {
        setIcon(false);
        setShowIcon(false);
      };


    return (
          <>
          <roiContext.Provider value = {{handleClick,buttonClick,buttonClick2,handleToggle,AnotherHandleToggle,
                                         handleButtonClick,setInput2,handleIcon, cancelIcon, input2, showData,activeButton,
                                         activeButton2,isOn,input, AnotherIsOn, icon,setInput}}>
            {children}
          </roiContext.Provider>
          </>
    )

}