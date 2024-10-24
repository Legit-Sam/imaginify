"use client"

import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";

function CreateNew () {
  const [formData, setFormData] = useState([]);

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData({...formData, [fieldName]: fieldValue});
  };

  return(
    <div className="md:px-20">
        <h2 className="text-2xl font-bold text-primary text-center">
            Create New Short Video
        </h2>
        <div className="mt-10  shadow-md p-10 rounded-lg"> 
          <SelectTopic/>
        </div>
    </div>
  )
};

export default CreateNew;
