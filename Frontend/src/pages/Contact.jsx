import React, {useEffect} from "react";

import ContactDetails from "../components/common/Contact/ContactDetails";
import ContactForm from "../components/common/Contact/ContactForm";

const Contact = () => {
  
  useEffect(() => {
    document.title = "K-Books | Contact"
  }, [])
  
  
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 min-h-screen pt-24 pb-8 md:pb-10 md:pt-28">
      <div className="flex md:flex-row flex-col md:max-w-7xl gap-x-20 gap-y-12 justify-center mx-auto my-9 md:my-20" >
        <div className="bg-slate-200 dark:bg-slate-900 h-2/3  rounded-xl">
          <ContactDetails/>
        </div>
  
        <div className="bg-slate-200 dark:bg-slate-900 rounded-xl">
          <ContactForm />
        </div>        
      </div>
    </div>
  )
}

export default Contact