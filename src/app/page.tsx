"use client";
import MyMindMap from "@/components/MyMindMap";
import axios from "axios";
import { useEffect, useState } from "react";

type YourModel = {
  id: string;
  title: string;
  Content: string[];
};

async function getAllListsOfUnits(): Promise<YourModel[]> {
  try {
    const response = await axios.get("/api/data");
    const data = response.data;
    return data.success ? data.data : [];
  } catch (error) {
    console.error("Error fetching unit data:", error);
    return [];
  }
}

export default function Home() {
  const [getAllList, setAllList] = useState<YourModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllListsOfUnits();
        setAllList(data);
      } catch (error) {
        console.error("Error fetching unit data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    // <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
    //   <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
    //     Map Master
    //   </h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //     {getAllList.map((item) => (
    //       <div
    //         key={item.id}
    //         className="bg-white p-4 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    //       >
    //         <h3 className="text-lg font-medium mb-3 text-blue-500">
    //           {item.title}
    //         </h3>
    //         <ul className="space-y-1">
    //           {item.Content.length > 0 && (
    //             <div>
    //               <li className="text-gray-600">{item.Content[0]}</li>
    //               <li className="text-gray-600">{item.Content[1]}</li>
    //               <li className="text-gray-600">{item.Content[2]}</li>
    //               <li className="text-gray-600">{item.Content[3]}</li>
    //               <li className="text-gray-600">{item.Content[4]}</li>
    //               <li className="text-gray-600">{item.Content[5]}</li>
    //               <li className="text-gray-600">{item.Content[6]}</li>
    //               <li className="text-gray-600">{item.Content[7]}</li>
    //               <li className="text-gray-600">{item.Content[8]}</li>
    //               <li className="text-gray-600">{item.Content[9]}</li>
    //             </div>
    //           )}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>
      <MyMindMap />
  
    </div>
  );
}
