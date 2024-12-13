import React, { useState } from 'react'
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import { useTranslation } from 'react-i18next';

function Header({changeLanguage}) {

const [selectedFlag, setSelectedFlag] = useState("fi fi-fr")
  const { t } = useTranslation();
  
  const flag = (
    <PopoverContent>
      <div className="px-1 py-2">
        <div onClick={() => (changeLanguage('fr', selectedFlag), setSelectedFlag("fi fi-fr"))} className="fi fi-fr mr-5"></div>
        <div onClick={() => (changeLanguage('en', selectedFlag), setSelectedFlag("fi fi-us"))} className="fi fi-us mr-5"></div>
        <div onClick={() => (changeLanguage('jp', selectedFlag), setSelectedFlag("fi fi-jp"))} className="fi fi-jp"></div>
      </div>
    </PopoverContent>
  );

    return (
        <div className='flex justify-between'>
            <p className='text-whiteBlue text-2xl'>{t('welcome')}</p>
            <div className='flex pr-2'>
                <Popover placement={'bottom-start'} color="#F00"> 
                    <PopoverTrigger>
                        <div className={selectedFlag}></div>
                    </PopoverTrigger>
                {flag}
                </Popover>
            </div>
        </div>
    )
}

export default Header