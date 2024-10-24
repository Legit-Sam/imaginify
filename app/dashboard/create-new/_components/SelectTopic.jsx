"use client"
import React, { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../../components/ui/select"
import { Textarea } from "../../../../components/ui/textarea";
  
function SelectTopic () {
    const options=["Custom Prompt","Food","Travel","Fashion","Music","Art","Technology","Business","Education","Health","Sports","Gaming","Science","Literature","History","Nature","Politics","Entertainment", "Fun Facts"]
    const [selectedOption, setSelectedOption] = useState("");
    
    return (
    <div>
        <h1 className="text-2xl font-bold text-primary">
           Content
        </h1>
        <p className="text-gray-500">What is the topic of your video</p>
        <Select onValueChange={(value) => setSelectedOption(value)}>
            <SelectTrigger className="w-full mt-2 p-6 text-lg">
                <SelectValue placeholder="Content Type" />
            </SelectTrigger>
            <SelectContent>
                {options.map((option, index) => (
                    <SelectItem key={index} value={option}>{option}</SelectItem>
                ))}
            </SelectContent>
        </Select>
        {selectedOption === "Custom Prompt" && (
            <div className="mt-4">
                <label htmlFor="customPrompt" className="block text-gray-700">Enter your custom prompt:</label>
                <Textarea
                    id="customPrompt"
                    className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    placeholder="Type your custom prompt here..."
                />
            </div>
        )}
    </div>
  )
};

export default SelectTopic;
